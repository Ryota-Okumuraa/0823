"use client"

import { Post } from "../generated/prisma"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu"
import { Icon } from "./Icon"
import Link from "next/link"
import { useState } from "react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

async function deletePost(postId: string) {
    try {
        const response = await fetch(`/api/posts/${postId}`, {
            method: "DELETE",
        })
        if (!response.ok) {
            throw new Error("Failed to delete post")
        }

        return true;
    } catch (error) {
        toast.error("問題が発生しました", {
            description: "記事の削除に失敗しました"
        })
    }
}

interface PostOPerationsProps {
    post: Pick<Post, "id" | "title">
}

export const PostOperations = ({ post }: PostOPerationsProps) => {
    const router = useRouter();
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [isDeleteLoading, setIsDeleteLoading] = useState(false);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                    <Icon.ellipsis className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link href={`/editer/${post.id}`} className="w-full ">編集</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive cursor-pointer focus:text-destructive" onClick={() => setShowDeleteAlert(true)}>
                        削除
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu >
            <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>本当にこの記事を削除しますか？</AlertDialogTitle>
                        <AlertDialogDescription>
                            この操作は一度行うと元には戻せません
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>キャンセル</AlertDialogCancel>
                        <AlertDialogAction onClick={async (e) => {
                            e.preventDefault();
                            setIsDeleteLoading(true);
                            const deleted = await deletePost(post.id);

                            if (deleted) {
                                setShowDeleteAlert(false);
                                setIsDeleteLoading(false);
                                router.refresh();
                            }
                        }}
                            className="bg-red-600 focus:ring-red-600 hover:bg-red-700">
                            {isDeleteLoading ? <Icon.spinner className="mr-2 w-4 h-4 animate-spin" /> : <Icon.trash className="mr-2 w-4 h-4 " />}
                            削除
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}