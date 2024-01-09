import { Flex, FormField, PrimaryButton, SecondaryButton, SystemIcon, TertiaryButton, background } from "@workday/canvas-kit-react"
import {
    justifyIcon,
    notificationsIcon,
    plusCircleIcon,
    userIcon,
    gearIcon
} from '@workday/canvas-system-icons-web';
import InputGroupFormFieldForwarder from "./SearchInput";
import IconButton from "./IconButton";
import logo from "../assets/dummy-logo-5b 1.png"
import { toggleSidebar } from "../utils/helpers";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarProvider";


const Header = () => {
    const { openSidebar } = useContext(SidebarContext)
    return (
        <Flex flexDirection="row" alignItems="center">
            <Flex.Item>
                <TertiaryButton onClick={() => openSidebar()} colors={{focus: {focusRing: {outline: "none"}}}} icon={justifyIcon} />
                {/* <IconButton>
                    <SystemIcon icon={justifyIcon} />
                </IconButton> */}
            </Flex.Item>
            <Flex.Item>
                <img src={logo} alt="logo" height={60} style={{ alignSelf: "center" }} />
            </Flex.Item>
            <Flex.Item>
                <FormField style={{ margin: 0, border: "none", outline: "none" }}>
                    <InputGroupFormFieldForwarder />
                </FormField>
                {/* <InputGroupFormFieldForwarder /> */}
            </Flex.Item>
            <Flex.Item cs={{ marginLeft: 'auto' }}>
                <Flex gap='5px' alignItems="center">
                {/* <TertiaryButton onClick={() => openSidebar()} colors={{focus: {focusRing: {outline: "none"}}}} icon={justifyIcon} /> */}
                    <PrimaryButton colors={{ default: { background: 'black' }, hover: { background: 'black' }, focus: { background: "red", focusRing: { outline: "none" } } }} icon={plusCircleIcon} size="small" iconPosition="end">
                        CREATE
                    </PrimaryButton>
                    <PrimaryButton size="small" cs={{ border: '1px solid black', outline: "none", color: 'black' }} colors={{ default: { background: 'white' }, hover: { background: 'black' }, focus: { background: "red", focusRing: { outline: "none" } } }}>
                        RECENT HISTORY
                    </PrimaryButton>
                    <TertiaryButton icon={notificationsIcon} size="medium" />
                    <TertiaryButton icon={userIcon} />
                    <TertiaryButton icon={gearIcon} />
                   
                </Flex>
            </Flex.Item>
        </Flex>
    )
}
export default Header