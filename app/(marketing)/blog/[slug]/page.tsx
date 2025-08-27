import { allPosts } from "contentlayer/generated";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Mdx } from "@/components/Mdx";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";


async function getPostFromSlug(slug: string) {
    const post = allPosts.find((pos) => pos.slugAsParams === slug);
    return post;
}

export async function generateMetadata({ params }: {
    params: {
        slug: string
    }
}): Promise<Metadata> {

    const page = await getPostFromSlug(params.slug);

    if (!page) {
        return {}
    }

    return {
        title: page.title,
        description: page.description,
        openGraph: {
            type: "article",
            locale: "ja_JP",
            url: siteConfig.url,
            title: siteConfig.name,
            description: siteConfig.description,
            siteName: siteConfig.name
        },
        twitter: {
            card: "summary_large_image",
            title: siteConfig.name,
            description: siteConfig.description,
            images: [`${siteConfig.url}/og.png`],
            creator: "my name",
        },

    }
}

export default async function PostPage({ params }: {
    params: {
        slug: string
    }
}) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const post = await getPostFromSlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container max-w-3xl py-6 lg:py-10 mx-auto">
            <div>
                {post.date &&
                    (<time>Published on {format(post.date, "yyyy-MM-dd")}  </time>)
                }
                <h1 className="font-extrabold mt-2 text-4xl lg:text-5xl leading-tight">{post.title}</h1>
            </div>
            {post.image && (
                <Image
                    src={post.image}
                    alt={post.title}
                    width={720}
                    height={405}
                    className="mt-8 rounded-md border bg-muted"
                />
            )}
            <Mdx code={post.body.code} />
            <hr className="mt-12" />
            <div className="py-6 text-center lg:py-10 ">
                <Link
                    href={"/blog"}
                    className={cn(buttonVariants({ variant: "ghost" }))}
                >
                    全ての記事を見る
                </Link>
            </div>
        </article>
    )
} 