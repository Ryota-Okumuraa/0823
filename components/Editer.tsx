"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import TextareaAutosize from "react-textarea-autosize"
import EditorJS from '@editorjs/editorjs'
import { useCallback, useEffect, useState, useRef } from "react"
import Header from "@editorjs/header"
import LinkTool from "@editorjs/link"
import list from "@editorjs/list"
import { Post } from "@/generated/prisma"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { postPathSchema, PostPathSchemaType } from "@/lib/validations/post"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Icon } from "./icon"

interface EditerProps {
    post: Pick<Post, "id" | "title" | "content" | "published">
}


export const Editer = ({ post }: EditerProps) => {
    const ref = useRef<EditorJS | undefined>(undefined);
    const router = useRouter();
    const [isSaving, setIsSaving] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<PostPathSchemaType>({
        resolver: zodResolver(postPathSchema)
    });
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const initializeEditor = useCallback(async () => {
        const body = postPathSchema.parse(post);

        const editor = new EditorJS({
            holder: "editor",
            onReady() {
                ref.current = editor;
            },
            placeholder: "ここに記事を書く",
            inlineToolbar: true,
            data: body.content,
            tools: {
                header: Header,
                link: LinkTool,
                list: list
            }
        })
    }, [post])

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMounted(true);
        }
    })

    useEffect(() => {
        if (isMounted) {
            initializeEditor();
        }

        return () => {
            ref.current?.destroy();
            ref.current = undefined;
        }
    }, [isMounted, initializeEditor]);

    const onSubmit = async (data: PostPathSchemaType) => {
        setIsSaving(true);
        const blocks = await ref.current?.save();

        const response = await fetch(`/api/posts/${post.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: data.title,
                content: blocks,
            })
        })

        setIsSaving(false);

        if (!response.ok) {
            return toast.error("エラーが発生しました", {
                description: "あなたの記事は保存されませんでした。もう一度お試しください",

            })
        }

        router.refresh();

        toast.success("記事を保存しました")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full gap-10">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center space-x-10">
                        <Link
                            href={"/dashboard"}
                            className={cn(buttonVariants({ variant: "ghost" }))}>
                            戻る
                        </Link>
                        <p className="text-sm text-muted-foreground">公開</p>
                    </div>
                    <button className={cn(buttonVariants())} type="submit">
                        {isSaving && <Icon.spinner className="animate-spin w-4 h-4 mr-2 " />}
                        <span>保存</span>
                    </button>
                </div>
                <div className="w-[700px] mx-auto">
                    <TextareaAutosize
                        autoFocus
                        id="title"
                        defaultValue={post.title}
                        placeholder="Post Title"
                        className="w-full resize-none overflow-hidden bg-transparent text-5xl focus:outline-none font-bold"
                        {...register("title")}>
                    </TextareaAutosize>
                </div>
                <div id="editor" className="h-[500px]" />
                <p className="text-sm text-gray-500">
                    Use
                    <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">Tab</kbd>
                    to open the command menu
                </p>
            </div>
        </form >
    )
}