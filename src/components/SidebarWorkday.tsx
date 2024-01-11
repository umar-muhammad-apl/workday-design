import * as React from 'react';
import { TertiaryButton } from "@workday/canvas-kit-react"

import {
    SidePanel,
    useSidePanel,
    SidePanelTransitionStates,
} from '@workday/canvas-kit-preview-react/side-panel';
import { Flex } from '@workday/canvas-kit-react/layout';
import { Text } from '@workday/canvas-kit-react/text';
import { Box } from '@workday/canvas-kit-react'

import { NavLink } from 'react-router-dom';
import { SystemIcon } from '@workday/canvas-kit-react';
import SidebarItems from './SidebarItems';
import SidebarItemsWithIcons from './SidebarItemsWithIcons';
import logo from '../assets/dummy-logo-5b 1.png'
import slogo from '../assets/logo-short.png'
import {
    xIcon
} from '@workday/canvas-system-icons-web';

interface SidebarWorkdayProps {
    sidebarStatus: boolean,
    closeSidebar: () => void
}

const baseStyles = {
    color: 'blackPepper500',
    display: 'inline-block',
    margin: 'xxs',
    minHeight: 'xl',
    minWidth: '8rem',
    padding: 'xs',
};


const SidebarWorkday = ({ sidebarStatus, closeSidebar }: SidebarWorkdayProps) => {
    const { expanded, panelProps, labelProps, controlProps, setExpanded } = useSidePanel({ initialExpanded: false });
    const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
        expanded ? 'expanded' : 'collapsed'
    );




    return (
        <Flex cs={{
            //position: 'fixed',
            //zIndex: 10000,
            backgroundColor: 'white',
            height: '100dvh',
            //width: 'var(--Sidebar-width, 0px)',
            //top: 0,
            //padding: 8,
            //flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,

            borderRight: '1px solid',
            borderColor: 'divider',
        }}
        // height={320}
        >
            <div>
                {/* <img src={logo} alt="logo" height={60} style={{ alignSelf: "center" }} /> */}
                {/* <Box
                    backgroundColor="blueberry300"
                    {...baseStyles}
                >
                   
                    <Text typeLevel="subtext.small">
                        Logo
                    </Text>
                </Box> */}
            </div>

            <SidePanel
                as="div"
                {...panelProps}
                onExpandedChange={expanded => {
                    console.log(`expanded prop is: ${expanded ? 'true' : 'false'}`);
                }}
                onStateTransition={() => setPanelState(expanded ? 'expanded' : 'collapsed')}
                //onStateTransition={panelState}
                expanded={sidebarStatus}
                expandedWidth={220}
                className=''
                style={{ backgroundColor: 'white' }}
                variant="alternate"

            >
                <Flex justifyContent='center' height={60}>
                {sidebarStatus
                ?
                    <img src={logo} alt="logo" height={60} style={{ alignSelf: "center" }} />
                    :
                    <img src={slogo} alt="logo" height={30} style={{ alignSelf: "center" }} />
                }
                </Flex>

                {/* <Flex>
                    <TertiaryButton icon={xIcon} onClick={closeSidebar} />
                </Flex> */}

                {(panelState === 'expanded' || sidebarStatus) && (
                    <SidebarItems showOnlyIcons={sidebarStatus} />
                )}
                {!sidebarStatus && (
                    <SidebarItemsWithIcons showOnlyIcons={sidebarStatus} />
                )}

            </SidePanel>
        </Flex>
    );
};

export default SidebarWorkday