import {useSelector} from "react-redux";
import type {RootState} from "./ci/store";
import Header from "./components/layouts/header";
import Home from "./pages/home";
import Footer from "./components/layouts/footer";
import Calendar from "./pages/calendar";
import Dashboard from "./pages/dashboard";
import Setting from "@/pages/setting";
import { SidebarProvider, SidebarTrigger } from "@/components/shadcn-ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { Button } from "@/components/shadcn-ui/button";

export function Router() {
    const page = useSelector((state: RootState) => state.page.currentPage)
    return (
        <div className="h-full flex flex-col">
            <Header />
            <SidebarProvider>
                <AppSidebar />
                <main className="main">
                    <SidebarTrigger className="sidebar-trigger" />
                    <Button variant="todo" className="todo-button">일정 추가</Button>
                    {page === 'home' && <Home />}
                    {page === 'calendar' && <Calendar />}
                    {page === 'dashboard' && <Dashboard />}
                    {page === 'setting' && <Setting />}
                </main>
            </SidebarProvider>
            <Footer />
        </div>
    )
}