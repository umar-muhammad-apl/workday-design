import { Box, TertiaryButton, Text } from "@workday/canvas-kit-react"
import {
    justifyIcon,
    notificationsIcon,
    plusCircleIcon,
    userIcon,
    gearIcon
} from '@workday/canvas-system-icons-web';
import { SidebarContext } from "../context/SidebarProvider";
import { useContext } from "react";

const Sidebar = () => {
    const {  isShowingSidebar, closeSidebar } = useContext(SidebarContext)
    return (
        <div
            className="Sidebar"
            style={{
                position: 'fixed',
                transform: `translateX(calc(100% * (${isShowingSidebar} - 1)))`,
                transition: 'transform 0.4s, width 0.4s',
                zIndex: 10000,
                backgroundColor: 'red',
                height: '100dvh',
                width: 'var(--Sidebar-width, 0px)',
                top: 0,
                padding: 2,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRight: '1px solid',
                borderColor: 'divider',
            }}
        >
            <div
                className="Sidebar-overlay"
                style={{
                    position: 'fixed',
                    zIndex: 9998,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    opacity: isShowingSidebar,
                    backgroundColor: 'rgba(var(--joy-palette-neutral-darkChannel, 11 13 14) / 0.25)',
                    transition: 'opacity 0.4s',
                    transform: `translateX(calc(100% * (${isShowingSidebar} - 1) + ${isShowingSidebar} * var(--Sidebar-width, 0px)))`,

                }}
                onClick={() => closeSidebar()}
            />
           

            <div style={{display: 'flex', gap: 1, alignItems: "center"}}>
                <TertiaryButton icon={userIcon} />
                <Text>Acme Co.</Text>
                {/* <ColorSchemeToggle sx={{ ml: 'auto' }} /> */}
            </div>
        </div>
    )
}

export default Sidebar