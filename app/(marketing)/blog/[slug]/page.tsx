import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

async function getPostFromSlug(slug: string) {
    console.log("🔍 Debug Info:");
    console.log("検索対象のslug:", slug);
    console.log("allPostsの数:", allPosts.length);
    console.log("allPostsの全slug:", allPosts.map(p => p.slug));
    
    const post = allPosts.find((post) => post.slug === slug);
    console.log("見つかったpost:", post);
    return post;
}

export default async function PostPage({ params }: {
    params: {
        slug: string
    }
}) {
    // Next.js 13+ App Router ではparamsがPromiseの場合があります
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    console.log("📄 Page Level Debug:");
    console.log("URL params:", resolvedParams);
    console.log("slug value:", slug);
    console.log("slug type:", typeof slug);
    
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
