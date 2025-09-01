"use client"

import Link from "next/link"
import { NavItem } from "@/types";
import { useState } from "react";

import MobileNav from "./MobailNav";

interface MainNavProps {
    items: NavItem[];
    children?: React.ReactNode
}

export default function MainNav({ items }: MainNavProps) {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    return (
        <div className="flex items-center md:gap-12">
            <Link href={"/"} className="hidden md:flex items-center space-x-2">
                <span className="font-bold ">Post Writer</span>
            </Link>
            <nav className="md:flex gap-6 hidden">
                {items?.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="text-lg sm:text-sm font-medium hover:text-foreground/80">
                        {item.title}
                    </Link>
                ))}
            </nav>
            <button
                className="md:hidden flex items-center"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                <span>メニュー</span>
            </button>
            {showMobileMenu && <MobileNav items={items} />}
        </div>
    )
}