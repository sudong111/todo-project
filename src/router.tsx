import {useSelector} from "react-redux";
import type {RootState} from "./ci/store.ts";
import Header from "./components/layouts/header.tsx";
import Home from "./pages/home.tsx";
import Work from "./pages/work.tsx";
import Footer from "./components/layouts/footer.tsx";
import Projects from "./pages/projects.tsx";
import Dashboard from "./pages/dashboard.tsx";

export function Router() {
    const page = useSelector((state: RootState) => state.page.currentPage)
    return (
        <>
            <Header />
            {page === 'home' && <Home />}
            {page === 'work' && <Work />}
            {page === 'projects' && <Projects />}
            {page === 'dashboard' && <Dashboard />}
            <Footer />
        </>
    )
}