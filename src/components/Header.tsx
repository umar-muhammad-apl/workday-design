import { Flex, FormField, PrimaryButton, SecondaryButton, SystemIcon, TertiaryButton, background, colors } from "@workday/canvas-kit-react"
import {
    justifyIcon,
    notificationsIcon,
    plusCircleIcon,
    userIcon,
    gearIcon,
    xIcon
} from '@workday/canvas-system-icons-web';
import InputGroupFormFieldForwarder from "./SearchInput";
import IconButton from "./IconButton";
import logo from "../assets/dummy-logo-5b 1.png"
import { toggleSidebar } from "../utils/helpers";
import { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarProvider";
import * as React from 'react';
import {
    SidePanel,
    useSidePanel,
    SidePanelTransitionStates,
} from '@workday/canvas-kit-preview-react/side-panel';
import { Text } from '@workday/canvas-kit-react/text';

interface HeaderProps {
    handleSidebar: () => void
}


const getIconColor = () => {
    return {
      default: {
        icon: colors.blueberry300,
      },
      hover: {
        icon: colors.blueberry300,
      },
      active: {
        icon: colors.blueberry300, 
     },
      focus: {
        
      },
      disabled: {},
    };
  };

const Header = ({handleSidebar}: HeaderProps) => {
    const { openSidebar } = useContext(SidebarContext)
    
    return (
        <Flex flexDirection="row" alignItems="center" paddingY={10}>
            <Flex.Item>
                <TertiaryButton
                    onClick={handleSidebar}
                    role="button"
                    //onClick={() => openSidebar()}
                    //onClick={toggleSidebar} 
                    //colors={{focus: {focusRing: {outline: "none"}}}} 
                    colors={getIconColor()}
                    icon={justifyIcon}
                />
                {/* <IconButton>
                    <SystemIcon icon={justifyIcon} />
                </IconButton> */}
            </Flex.Item>
            {/* <Flex.Item>
                <img src={logo} alt="logo" height={60} style={{ alignSelf: "center" }} />
            </Flex.Item> */}
            <Flex.Item>
                <FormField style={{ margin: 0, border: "none", outline: "none" }}>
                    <InputGroupFormFieldForwarder />
                </FormField>
                {/* <InputGroupFormFieldForwarder /> */}
            </Flex.Item>
            <Flex.Item cs={{ marginLeft: 'auto' }}>
                <Flex gap='5px' alignItems="center">
                    {/* <TertiaryButton onClick={() => openSidebar()} colors={{focus: {focusRing: {outline: "none"}}}} icon={justifyIcon} /> */}
                    <PrimaryButton 
                        colors={{ default: { background: colors.blueberry300 }, hover: { background: colors.blueberry300 }, active: {background: colors.blueberry300}, focus: { background: colors.blueberry300, focusRing: { outline: "none" } } }} 
                        icon={plusCircleIcon} 
                        size="small" 
                        iconPosition="end"
                    >
                        CREATE
                    </PrimaryButton>
                    <PrimaryButton 
                        size="small" 
                        //cs={{ icon: 'red', border: '1px solid black', outline: "none", color: 'black' }} 
                        colors={{ default: { background: 'white', border: '1px solid red', label: colors.blueberry300 }, hover: { background: colors.blueberry300 }, focus: { background: "red", focusRing: { outline: "none" } } }}>
                        RECENT HISTORY
                    </PrimaryButton>
                    
                    <IconButton icon={notificationsIcon} />
                    <IconButton icon={userIcon} />
                    <IconButton icon={gearIcon} />
        
                </Flex>
            </Flex.Item>
        </Flex>
    )
}
export default Header