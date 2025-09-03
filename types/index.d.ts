export type NavItem = {
    title: string;
    href: string;
    disabled?: boolean;
}

export type SidebarNavItem = {
    title: string;
    href: string;
    disabled?: boolean;
    external?: boolean;
    icon?: string;
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
}

export type DashboardConfig = {
    mainNav: NavItem[];
    sidebarNav: SidebarNavItem[];
}