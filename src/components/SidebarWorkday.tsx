import * as React from 'react';
import {
    SidePanel,
    useSidePanel,
    SidePanelTransitionStates,
} from '@workday/canvas-kit-preview-react/side-panel';
import { Flex } from '@workday/canvas-kit-react/layout';
import { Text } from '@workday/canvas-kit-react/text';

import { NavLink } from 'react-router-dom';
import { SystemIcon } from '@workday/canvas-kit-react';
import SidebarItems from './SidebarItems';

interface SidebarWorkdayProps {
    sidebarStatus: boolean
}



const SidebarWorkday = ({ sidebarStatus }: SidebarWorkdayProps) => {
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
            top: 0,
            //padding: 8,
            //flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            //borderRight: '1px solid',
            //borderColor: 'divider',
        }}
        // height={320}
        >
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
                style={{justifyContent: "center"}}

            >
                {(panelState === 'expanded' || sidebarStatus) && (
                    <SidebarItems showOnlyIcons={sidebarStatus} />
                )}
                {!sidebarStatus && (
                    <SidebarItems showOnlyIcons={sidebarStatus} />
                )}
                 
            </SidePanel>
        </Flex>
    );
};

export default SidebarWorkday