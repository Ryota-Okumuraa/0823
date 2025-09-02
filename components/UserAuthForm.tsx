"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import { Icons } from "./Icon";
import { signIn } from "next-auth/react";

export const UserAuthForm = () => {

    const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);

    return (
        <div className="grid gap-6">
            <form>
                <div className="grid gap-2 text-left">
                    <div className="grid gap-1">
                        <Label htmlFor="email">メールアドレス</Label>
                        <Input id="email" placeholder="name@example.com" type="email" />
                    </div>
                    <button className={cn(buttonVariants())}>
                        メールアドレスでログイン
                    </button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex  imtes-center top-2">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs">
                    <span className="text-muted-foreground px-2 bg-background">or</span>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <button
                    className={cn(buttonVariants({ variant: "outline" }))}
                    onClick={() => {
                        setIsGithubLoading(true);
                        signIn("github")
                    }
                    }
                >
                    {isGithubLoading ? (<Icons.spinner className="animate-spin mr-2 h-4 w-4" />) : (<Icons.github className="mr-2 h-4 w-4" />)}
                    GitHub
                </button>
                <button
                    className={cn(buttonVariants({ variant: "outline" }))}
                    onClick={() => {
                        setIsGoogleLoading(true);
                        signIn("google")
                    }
                    }
                >
                    {isGoogleLoading ? (<Icons.spinner className="animate-spin mr-2 h-4 w-4" />) : (<Icons.google className="mr-2 h-4 w-4" />)}
                    Google
                </button>
            </div>
        </div>
    )
}