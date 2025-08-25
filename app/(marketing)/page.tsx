import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
    return (
        <>
            <section className="pt-6 md:pt-10 lg:pt-32 pb-8 md:pb-12">
                <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem] mx-auto">
                    <Link
                        href={siteConfig.links.x}
                        className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm">
                        Xをフォローする
                    </Link>
                    <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl ">
                        Post Writer
                    </h1>
                    <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
                        このアプリケーションはNext.jsのappルーターで作成されたものです。 ユーザーは自由に投稿することが可能です。
                    </p>
                    <div className="space-x-4">
                        <Link href={"/lgoin"} className={cn(buttonVariants({ size: "lg" }))}>
                            始める
                        </Link>
                        <Link href={siteConfig.links.github} className={cn(buttonVariants({ size: "lg", variant: "outline" }))} target="_blank" rel="noreferrer">
                            GitHub
                        </Link>
                        {/* // target="_blank"飲みだとセキュリティ的によろしくないのでrel="noreferrer"を使用する */}
                    </div>
                </div>
            </section>
            <section id="feature" className="py-8 md:py-12 bg-slate-50 w-full container mx-auto">
                <div className="text-center space-y-6 max-w-[64rem] mx-auto container">
                    <h2 className="font-extrabold text-3xl md:text-6xl ">サービスの特徴</h2>
                    <p className="text-muted-foreground sm:text-lg sm:leading-7">
                        このプロジェクトはモダンな技術スタックを使用して作られたwebアプリケーションです。Next.js AppRouterやcontentLayerを利用してマークダウン形式でブログ投稿ができます。
                    </p>
                </div>
                <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem] py-8">
                    <div className="bg-backgroud border p-2 rounded-lg  ">
                        <div className="flex flex-col justify-between p-6 h-[150px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z" /></svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Next.js</h3>
                                <p className="text-muted-foreground text-sm">
                                    AppRouter/Layouts/API Routesの技術を使用
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-backgroud border p-2 rounded-lg  ">
                        <div className="flex flex-col justify-between p-6 h-[150px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z" /></svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Next.js</h3>
                                <p className="text-muted-foreground text-sm">
                                    AppRouter/Layouts/API Routesの技術を使用
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-backgroud border p-2 rounded-lg  ">
                        <div className="flex flex-col justify-between p-6 h-[150px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z" /></svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Next.js</h3>
                                <p className="text-muted-foreground text-sm">
                                    AppRouter/Layouts/API Routesの技術を使用
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-backgroud border p-2 rounded-lg  ">
                        <div className="flex flex-col justify-between p-6 h-[150px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z" /></svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Next.js</h3>
                                <p className="text-muted-foreground text-sm">
                                    AppRouter/Layouts/API Routesの技術を使用
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-backgroud border p-2 rounded-lg  ">
                        <div className="flex flex-col justify-between p-6 h-[150px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z" /></svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Next.js</h3>
                                <p className="text-muted-foreground text-sm">
                                    AppRouter/Layouts/API Routesの技術を使用
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-backgroud border p-2 rounded-lg  ">
                        <div className="flex flex-col justify-between p-6 h-[150px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z" /></svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Next.js</h3>
                                <p className="text-muted-foreground text-sm">
                                    AppRouter/Layouts/API Routesの技術を使用
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-muted-foreground sm:text-lg sm:leading-7 text-center ">
                        Post Writerはログインするとブログ投稿ができるようになります
                    </p>
                </div>
            </section>
            <section id="contact" className="py-8 md:py-12 lg:py-24">
                <div className="container max-w-[58rem] mx-auto text-center flex flex-col gap-4">
                    <h2 className="font-extrabold text-3xl md:text-6xl">Contact me</h2>
                    <p className="text-muted-foreground sm:text-lg sm:leading-7">
                        もしもwebサービスが気に入った場合は、下記Xからご連絡ください
                        <br />
                        お仕事のご連絡お待ちしております。
                    </p>
                    <Link href={siteConfig.links.x}
                        className="underline underline-offset-4 text-sm"
                        target="_blank"
                        rel="noreferrer">
                        お仕事はXまで
                    </Link>
                </div>
            </section>
        </>
    )
}