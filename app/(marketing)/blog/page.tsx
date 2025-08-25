import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default function BlogPage() {
    console.log("🏠 Blog Index Page Debug:");
    console.log("Total posts:", allPosts.length);
    console.log("Available posts:", allPosts.map(p => ({ title: p.title, slug: p.slug })));

    const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="container mx-auto max-w-4xl py-6 lg:py-12">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block text-4xl font-bold leading-tight lg:text-5xl">
                        ブログ
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        開発に関する記事やTipsを投稿しています。
                    </p>
                </div>
            </div>
            <hr className="my-8" />
            {posts.length === 0 ? (
                <p>まだ記事がありません。</p>
            ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.slug} className="group relative">
                            <Link href={`/blog/${post.slug}`} className="block">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold leading-tight group-hover:underline">
                                        {post.title}
                                    </h2>
                                    {post.description && (
                                        <p className="text-muted-foreground">
                                            {post.description}
                                        </p>
                                    )}
                                    <p className="text-sm text-muted-foreground">
                                        {new Date(post.date).toLocaleDateString('ja-JP')}
                                    </p>
                                    <p className="text-xs text-blue-500">
                                        Slug: {post.slug}
                                    </p>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}