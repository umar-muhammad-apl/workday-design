import { useSidePanel } from "@workday/canvas-kit-preview-react";
import { Outlet } from "react-router-dom"
import SidebarWorkday from "../components/SidebarWorkday";
import Header from "../components/Header";
import BaseBreadcrumbs from "../components/BaseBreadcrumbs";

const RootLayout = () => {
    const { expanded, panelProps, labelProps, controlProps, setExpanded } = useSidePanel({ initialExpanded: true });
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <aside>
                <SidebarWorkday sidebarStatus={expanded} closeSidebar={() => setExpanded(!expanded)} />
            </aside>
            <main style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
                <Header handleSidebar={() => setExpanded(!expanded)} />
                <BaseBreadcrumbs /> 
                <Outlet />
            </main>
            
            {/* <SidebarWorkday sidebarStatus={expanded} closeSidebar={() => setExpanded(!expanded)} />
            <Header handleSidebar={() => setExpanded(!expanded)}  />
            <BaseBreadcrumbs /> 
            <Outlet /> */}

        </div>
    )
}


export default RootLayout