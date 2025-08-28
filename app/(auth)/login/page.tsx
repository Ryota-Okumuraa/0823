import Link from "next/link"
import { UserAuthForm } from "@/components/UserAuthForm"

export default function LoginPage() {
    return (
        <div className="container flex flex-col justify-center h-screen items-center w-screen mx-auto">
            <div className="mx-auto text-center sm:w-[350px] flex flex-col space-y-6">
                <div className="space-y-2">
                    <h1 className="text-2xl tracking-tight font-semibold">
                        Wellcome back
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        メールアドレスを入力してログインできます
                    </p>
                </div>

                <UserAuthForm />
                <p className="text-muted-foreground text-sm text-center px-8 ">
                    <Link
                        href={"/register "}
                        className="underline underline-offset-4">
                        アカウントをお持ちでない方はこちら
                    </Link>
                </p>
            </div>
        </div>
    )
}