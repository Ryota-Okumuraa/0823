import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

async function getPostFromSlug(slug: string) {
    const post = allPosts.find((post) => post.slug === slug);
    return post;
}

export default async function PostPage({ params }: {
    params: {
        slug: string
    }
}) {
    const slug = params.slug;
    const post = await getPostFromSlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container mx-auto max-w-3xl py-6 lg:py-12">
            <div className="space-y-4">
                <h1 className="inline-block text-4xl font-bold leading-tight lg:text-5xl">
                    {post.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                    {post.description}
                </p>
                {post.date && (
                    <time dateTime={post.date} className="block text-sm text-muted-foreground">
                        公開日: {new Date(post.date).toLocaleDateString('ja-JP')}
                    </time>
                )}
            </div>
            <hr className="my-6" />
            <div className="prose prose-neutral mx-auto dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
            </div>
        </article>
    );
}
