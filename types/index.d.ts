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
}