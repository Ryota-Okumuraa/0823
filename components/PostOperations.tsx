import { Post } from "../generated/prisma"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu"
import { Icon } from "./Icon"
import Link from "next/link"

interface PostOPerationsProps {
    post: Pick<Post, "id" | "title">
}

export const PostOperations = ({ post }: PostOPerationsProps) => {
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
                    <DropdownMenuItem className="text-destructive cursor-pointer focus:text-destructive">
                        削除
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu >
        </>
    )
}