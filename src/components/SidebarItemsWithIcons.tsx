import React from "react";
import { NavLink } from "react-router-dom"
import {
    justifyIcon,
    notificationsIcon,
    caretUpIcon,
    caretDownIcon,
    caretDownSmallIcon,
    caretRightSmallIcon,
    userIcon,
    dashboardIcon,
    xIcon
} from '@workday/canvas-system-icons-web';
import { SystemIcon } from "@workday/canvas-kit-react";

const routesArray = [
    {
        route: "/dashboard",
        label: "Dashboard",
        id: "dashboard",
        icon: dashboardIcon,
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

interface SidebarItemsProps {
    showOnlyIcons: boolean
}

const SidebarItemsWithIcons = ({showOnlyIcons}: SidebarItemsProps ) => {

    const [showSubNav, setShowSubNav] = React.useState<any>({
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


    return (
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
                                    `nav-link-container ${!showOnlyIcons ? 'justify-center': 'justify-space'} ${isActive ||
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
                                    {showOnlyIcons ? <span>{item.label}</span> : null}
                                </div>
                                {(item.subNav && showOnlyIcons) ? (
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
                            <div className="sub-list">
                            {(showSubNav[item.id] ||
                                window.location.pathname.split("/")[1] ===
                                item.route.split("/")[1]) &&
                                item.subNav?.map((subNavItem) => (
                                    <NavLink
                                        key={subNavItem.route}
                                        to={subNavItem.route}
                                        className={({ isActive }) =>
                                            `nav-link-container nav-sub-link-container ${!showOnlyIcons ? 'justify-center': 'justify-space'} ${isActive
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
                                            {/* <span>{subNavItem.label}</span> */}
                                            {showOnlyIcons ? <span>{subNavItem.label}</span> : null}
                                        </div>
                                    </NavLink>
                                ))}
                             </div>   
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default SidebarItemsWithIcons