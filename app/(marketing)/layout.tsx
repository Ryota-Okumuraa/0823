import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import MainNav from "@/components/MainNav";
import { marketingConfig } from "@/config/marketing";
import { SiteFotter } from "@/components/SiteFotter";


export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <header className="container z-40 bg-background mx-auto">
                <div className="h-20 py-6 flex justify-between items-center">
                    <MainNav items={marketingConfig.mainNav} />
                    <nav>
                        <Link
                            href={"/login"}
                            className={cn(buttonVariants({ variant: "secondary", size: "sm" }),
                                "px-4")}
                        >
                            ログイン
                        </Link>
                    </nav>
                </div>
            </header>
            <main>{children}</main>
            <SiteFotter />
        </div>
    )
}