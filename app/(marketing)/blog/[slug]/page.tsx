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
        <article className="container relative max-w-3xl py-6 lg:py-10">
            <div className="mx-auto w-full min-w-0">
                <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
                    <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                        ブログ
                    </div>
                    <div>/</div>
                    <div className="font-medium text-foreground">
                        {post.title}
                    </div>
                </div>
                <div className="space-y-2">
                    <h1 className="inline-block font-heading text-4xl leading-tight lg:text-5xl">
                        {post.title}
                    </h1>
                    {post.description && (
                        <p className="text-xl text-muted-foreground">
                            {post.description}
                        </p>
                    )}
                </div>
                {post.date && (
                    <time
                        dateTime={post.date}
                        className="block text-sm text-muted-foreground"
                    >
                        公開日: {new Date(post.date).toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </time>
                )}
                <div className="pb-12 pt-8">
                    <div 
                        className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-heading prose-headings:leading-tight hover:prose-a:text-accent-foreground prose-a:font-medium prose-a:no-underline prose-a:shadow-[0_1px_0_0_currentColor] prose-img:rounded-md prose-img:border prose-img:bg-muted"
                        dangerouslySetInnerHTML={{ __html: post.body.raw }}
                    />
                </div>
            </div>
        </article>
    );
}