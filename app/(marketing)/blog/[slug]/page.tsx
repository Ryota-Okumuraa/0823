import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

async function getPostFromSlug(slug: string) {
    const post = allPosts.find((post) => post.slugAsParams === slug);
    return post;
}

export default async function PostPage({ params }: {
    params: { slug: string }
}) {
    const post = await getPostFromSlug(params.slug);
    
    if (!post) {
        notFound();
    }
    
    return (
        <div className="container max-w-3xl py-6 lg:py-10">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-xl text-muted-foreground">{post.description}</p>
            <div dangerouslySetInnerHTML={{ __html: post.body.raw }} />
        </div>
    )
}
