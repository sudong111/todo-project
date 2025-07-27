import { useDispatch } from "react-redux"
import { Calendar, Home, Settings } from "lucide-react"
import {
    Sidebar,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/shadcn-ui/sidebar"
import { setPage } from "@/ci/pages/slice"
// Menu items.
const items = [
    {
        title: "Home",
        icon: Home,
    },
    {
        title: "Calendar",
        icon: Calendar,
    },
    {
        title: "Setting",
        icon: Settings,
    },
]

export function AppSidebar() {
    const dispatch = useDispatch()
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <button
                                            onClick={() => dispatch(setPage(item.title.toLowerCase()))}
                                        >
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </button>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}