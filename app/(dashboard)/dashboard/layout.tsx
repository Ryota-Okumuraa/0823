import { dashboardConfig } from "@/config/dashboard";
import MainNav from "@/components/MainNav";
import { SiteFotter } from "@/components/SiteFotter"
import { DashboardNav } from "@/components/DashboardNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <header className="sticky top-0 z-40 border-b bg-background">
                <div className="container flex items-center py-4 h-16 mx-auto">
                    <MainNav items={dashboardConfig.mainNav} />
                </div>
            </header>
            <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] mx-auto">
                <aside className="hidden md:flex w-[200px] flex-col">
                    <DashboardNav items={dashboardConfig.sidebarNav} />
                </aside>
                <main className="flex flex-col w-full flex-1 overflow-hidden">{children}</main>
            </div>
            <SiteFotter />
        </div>
    )
}