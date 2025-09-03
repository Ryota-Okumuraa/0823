import { Editer } from "@/components/Editer"
import { User, Post } from "@/generated/prisma";
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

interface EditerPageProps {
    params: { postId: string }
}

const getPostForUser = async (postId: Post["id"], UserId: User["id"]) => {
    const post = await db.post.findFirst({
        where: {
            id: postId,
            authorId: UserId,
        }
    })

    return post;
}

export default async function EditerPage({ params }: EditerPageProps) {
    const user = await getCurrentUser();
    const userId = user?.id;

    if (!userId) {
        redirect("/login")
    }

    const postId = params.postId;

    const post = await getPostForUser(postId, userId);
    console.log("post" + post);

    if (!post) {
        redirect("/dashboard")
    }

    return (
        <Editer post={{
            id: post.id,
            title: post.title,
            content: post.content,
            published: post.published
        }} />
    )
}