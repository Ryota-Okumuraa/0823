import Link from "next/link"
import { UserAuthForm } from "@/components/UserAuthForm"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function RegisterPage() {
    return (
        <div className="container grid flex-col lg:grid-cols-2 h-screen w-screen items-center justify-center lg:max-w-none lg:px-0">
            <Link
                href={"/login"}
                className={cn(buttonVariants({ variant: "ghost" }),
                    "absolute left-4 md:left-8 md:top-8"
                )}>
                ログイン
            </Link>
            <div className="h-full bg-muted lg:block hidden"></div>
            <div className="mx-auto text-center sm:w-[350px] flex flex-col space-y-6">
                <div className="space-y-2">
                    <h1 className="text-2xl tracking-tight font-semibold">
                        アカウントの作成
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        メールアドレスを入力してアカウントを作成してくだい
                    </p>
                </div>

                <UserAuthForm />
                <p className="text-muted-foreground text-sm text-center px-8 ">
                    続けてクリックすれば私たちの
                    <Link
                        href={"/terms "}
                        className="underline underline-offset-4">
                        利用規約
                    </Link>
                    と<br />
                    <Link
                        href={"/privacy"}
                        className="underline underline-offset-4">
                        プライバシーポリシー
                    </Link>
                    に同意したことになります。
                </p>
            </div>
        </div>
    )
}