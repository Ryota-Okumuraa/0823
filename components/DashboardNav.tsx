"use client";

import { SidebarNavItem } from "@/types";
import Link from "next/link";
import { Icons } from "./Icon";
import { usePathname } from "next/navigation";


interface DashboardNavProps {
    items: SidebarNavItem[];
}


export const DashboardNav = ({ items }: DashboardNavProps) => {

    const pathname = usePathname();

    if (!items.length) {
        return null;
    }

    return (
        <nav className="flex flex-col gap-2">
            {items.map((item, index) => {

                const iconName = item.icon || "arrowRight";
                const Icon = Icons[iconName as keyof typeof Icons] || Icons.arrowRight;

                return (
                    <Link href={item.href!} key={index}>
                        <span
                            className={`flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${pathname === item.href ? "bg-accent" : "bg-transparent"}`}>
                            <Icon className="mr-2 h-4 w-4" />
                            {item.title}
                        </span>
                    </Link>
                )
            })}
        </nav>
    )
}