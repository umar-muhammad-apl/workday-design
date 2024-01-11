import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { SidebarProvider } from './context/SidebarProvider'
import SidebarWorkday from './components/SidebarWorkday'
import { Flex, flex } from '@workday/canvas-kit-react'
import { useSidePanel } from '@workday/canvas-kit-preview-react'
import BaseBreadcrumbs from './components/BaseBreadcrumbs'
import RootNavigator from './components/RootNavigator'
//import { ThemeProvider, createTheme, styled } from '@mui/material/styles';

// import './App.css'

const App = () => {
  //const { expanded, panelProps, labelProps, controlProps, setExpanded } = useSidePanel({ initialExpanded: true });
  //const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
  //   expanded ? 'expanded' : 'collapsed'
  //);
  //const defaultTheme = createTheme();
  return (

    <div>
     
      <SidebarProvider>
      {/* <ThemeProvider theme={defaultTheme}>
     
        </ThemeProvider> */}
        <RootNavigator />
      </SidebarProvider>
      {/* <Header handleSidebar={() => { }} /> */}
      {/* <Sidebar /> */}
      {/* workday sidebar */}
      {/* <div style={{ display: 'flex', height: '100vh' }}>
          <aside style={{ borderRight: '1px solid yellow'}}>
            <SidebarWorkday sidebarStatus={expanded} />
          </aside>
          <main style={{ flex: 1 }}>
            <Header handleSidebar={() => setExpanded(!expanded)} />
            <BaseBreadcrumbs />
          </main>
        </div> */}
      {/* <RootNavigator /> */}
    </div>
  )
}

export default App
