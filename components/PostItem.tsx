import { Post } from "../generated/prisma"
import { format } from "date-fns";
import Link from "next/link";

import { PostOperations } from "./PostOperations";

interface PostItemProps {
    post: Pick<Post, "id" | "title" | "published" | "createdAt">
}

export const PostItem = ({ post }: PostItemProps) => {
    return (
        <div className="flex justify-between items-center py-4">
            <div className="grid gap-1">
                <Link
                    href={`/editer/${post.id}`}
                    className="font-semibold hover:underline"
                >{post.title}</Link>
                <div>
                    <p className="text-sm text-muted-foreground">
                        {format(post.createdAt, 'yyyy/MM/dd')}
                    </p>
                </div>
            </div>
            <PostOperations post={post} />
        </div>
    )
}