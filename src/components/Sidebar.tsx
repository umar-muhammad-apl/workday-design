import { Box, Flex, SystemIcon, TertiaryButton, Text, color, colors } from "@workday/canvas-kit-react"
import {
    justifyIcon,
    notificationsIcon,
    caretUpIcon,
    caretDownIcon,
    caretDownSmallIcon,
    caretRightSmallIcon,
    userIcon,
    xIcon
} from '@workday/canvas-system-icons-web';
import { SidebarContext } from "../context/SidebarProvider";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";


const routesArray = [
    {
        route: "/dashboard",
        label: "Dashboard",
        id: "dashboard",
        icon: justifyIcon,
    },
    {
        route: "/attendances",
        label: "Attendances",
        id: "attendance",
        icon: notificationsIcon,
        subNav: [
            {
                route: "/attendances/all-attendances",
                label: "All Attendances",
                icon: justifyIcon,
            },
            {
                route: "/attendances/attendance-request",
                label: "Attendance Request",
                icon: justifyIcon,
            },
        ],
    },
    {
        route: "/leaves",
        label: "Leaves",
        id: "leave",
        icon: xIcon
    },
];

const Sidebar = () => {
    const { isShowingSidebar, closeSidebar } = useContext(SidebarContext)
    const [showSubNav, setShowSubNav] = useState<any>({
        attendance: false,
        leave: false,
        maintenance: false,
    });

    const handleSubNav = (event: any, item: any) => {
        if (item.subNav) {
            event.preventDefault();
            let nav: any = { ...showSubNav };
            nav[item.id] = !nav[item.id];
            for (const [key, value] of Object.entries(nav)) {
                if (key != item.id) {
                    nav[key] = false;
                }
            }
            setShowSubNav(nav);
        }
    };

    console.log('showSubNav', showSubNav)

    return (
        <aside
            className="Sidebar"
            style={{
                position: 'fixed',
                transform: `translateX(calc(100% * (${isShowingSidebar} - 1)))`,
                transition: 'transform 0.4s, width 0.4s',
                zIndex: 10000,
                backgroundColor: 'white',
                height: '100dvh',
                width: 'var(--Sidebar-width, 0px)',
                top: 0,
                padding: 8,
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
                    backgroundColor: 'rgba(var(--neutral-darkChannel, 11 13 14) / 0.25)',
                    transition: 'opacity 0.4s',
                    transform: `translateX(calc(100% * (${isShowingSidebar} - 1) + ${isShowingSidebar} * var(--Sidebar-width, 0px)))`,

                }}
                onClick={() => closeSidebar()}
            />
            <Flex>
                <TertiaryButton icon={xIcon} onClick={closeSidebar} />
            </Flex>


            {/* <div style={{ display: 'flex', gap: 1, alignItems: "center" }}>
                <TertiaryButton icon={userIcon} />
                <Text>Acme Co.</Text>
            </div> */}

            <nav className="nav-container">
                <ul>
                    {routesArray.map((item, index) => {
                        return (
                            <li key={item.route}>
                                <NavLink
                                    to={item.route}
                                    end
                                    //className="nav-link-container"
                                    className={({ isActive }) =>
                                        `nav-link-container ${isActive ||
                                            window.location.pathname.split("/")[1] ===
                                            item.route.split("/")[1] || (showSubNav[item.id])
                                            ? "active"
                                            : "inactive"
                                        }`
                                    }
                                    onClick={(e) => handleSubNav(e, item)}
                                >
                                    <div className="list-item-with-icon">
                                        <SystemIcon
                                            icon={item.icon}
                                            fill="#000"
                                            fillHover="#fff"
                                            size={20}
                                        />
                                        <span>{item.label}</span>
                                    </div>
                                    {item.subNav ? (
                                        !(
                                            showSubNav[item.id] ||
                                            window.location.pathname.split("/")[1] ===
                                            item.route.split("/")[1]
                                        ) ? (
                                            <SystemIcon fill="#000" fillHover="#fff" icon={caretRightSmallIcon} size={20} />
                                        ) : (
                                            <SystemIcon fill="#000" fillHover="#fff" icon={caretDownSmallIcon} size={20} />
                                        )
                                    ) : null}
                                </NavLink>
                                {(showSubNav[item.id] ||
                                    window.location.pathname.split("/")[1] ===
                                    item.route.split("/")[1]) &&
                                    item.subNav?.map((subNavItem) => (
                                        <NavLink
                                            key={subNavItem.route}
                                            to={subNavItem.route}
                                            className={({ isActive }) =>
                                                `nav-link-container nav-sub-link-container ${isActive
                                                    ? "active"
                                                    : "inactive"
                                                }`
                                            }
                                        >
                                            <div className="list-item-with-icon">
                                                <SystemIcon
                                                    icon={subNavItem.icon}
                                                    fill="#000"
                                                    fillHover="#fff"
                                                    size={20}
                                                />
                                                <span>{subNavItem.label}</span>
                                            </div>
                                        </NavLink>
                                    ))}
                            </li>
                        )
                    })}
                </ul>
            </nav>









        </aside>
    )
}

export default Sidebar