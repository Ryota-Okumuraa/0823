"use client"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useState } from "react";
import { Icon } from "./Icon"
import { ButtonProps } from "./ui/button"
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface PostCreateButtonProps extends ButtonProps { }

export const PostCreateButton = ({ className, variant, ...props }: PostCreateButtonProps) => {
    const router = useRouter();
    const [isloading, setIsloading] = useState(false);

    const onClick = async () => {
        setIsloading(true);

        const res = await fetch("api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "Untitled Post",

            })
        })

        setIsloading(false);

        console.log(res);

        if (!res.ok) {
            toast.error("問題が発生しました", {
                description: " 投稿が作成されませんでした。"
            });
            return;
        }

        const post = await res.json();

        router.push(`/editer/${post.id}`);
    }

    return (
        <button
            className={cn(buttonVariants({ variant }),
                { "cursor-not-allowed opacity-60": isloading }, className)}
            onClick={onClick}
            disabled={isloading}
            {...props}
        >
            {isloading ? (<Icon.spinner className="animate-spin mr-2 h-4 w-4" />
            ) : (
                <Icon.add className="mr-2 h-4 w-4" />
            )}
            新しい投稿
        </button>
    )
}