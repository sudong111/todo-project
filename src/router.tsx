import {useSelector} from "react-redux";
import type {RootState} from "@/ci/store";
import Header from "@/components/layouts/header";
import Home from "@/pages/home";
import Footer from "@/components/layouts/footer";
import {CalendarUI as Calendar} from "@/pages/calendar";
import Setting from "@/pages/setting";
import { SidebarProvider, SidebarTrigger } from "@/components/shadcn-ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { Button } from "@/components/shadcn-ui/button";
import Dialog from "@/components/ui/dialog"
import {scheduleDto} from "@/dto/schedule.dto";
import {useState} from "react";

export function Router() {
    const page = useSelector((state: RootState) => state.page.currentPage)
    const [scheduleDto, setScheduleDto] = useState<scheduleDto | undefined>()

    function handleClickDeleteSchedule() {

    }

    return (
        <div className="h-full flex flex-col">
                <Header />
            <SidebarProvider>
                <AppSidebar />
                <main className="flex flex-1 flex-col">
                    <div className="flex mt-2">
                    <SidebarTrigger className="sidebar-trigger" />
                    <Dialog />
                    <Button variant="delete"
                            onClick={() => {
                                handleClickDeleteSchedule();
                            }}
                            className="todo-button">일정 삭제</Button>
                    </div>
                    {page === 'home' && <Home
                        dataParams={scheduleDto}
                    />}
                    {page === 'calendar' && <Calendar />}
                    {page === 'setting' && <Setting />}
                </main>
            </SidebarProvider>
            <Footer />
        </div>
    )
}