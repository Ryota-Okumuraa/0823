export type NavItem = {
    title: string;
    href: string;
    disabled?: boolean;
}

export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    linkes: {
        x: string;
        github: string;
    }
}

export type MarketingConfig = {
    mainNav: NavItem[];
<<<<<<< HEAD
}

export type SidebarNavItem = {
    title: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons,
} & (
        | {
            href: string;
            items?: never;
        }
        | {
            href?: string;
            items: NavItem[];
        }
    )

export type DashboardConfig = {
    mainNav: NavItem[];
    sidebarNav: SidebarNavItem[];
=======
>>>>>>> eb3468aa4f4b5558040343d8ade5db3a25099e9d
}