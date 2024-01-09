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
// import './App.css'

const App = () => {
  const { expanded, panelProps, labelProps, controlProps, setExpanded } = useSidePanel({ initialExpanded: false });
  // const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
  //   expanded ? 'expanded' : 'collapsed'
  // );
  return (
    <SidebarProvider>
    <div style={{display: 'flex', height: '100vh'}}>
      {/* <Header /> */}
      {/* <Sidebar /> */}
      {/* <SidebarWorkday /> */}
      <aside style={{ border: '1px solid yellow'}}>
        <SidebarWorkday sidebarStatus={expanded} />
      </aside>
      <main style={{flex: 1, border: '1px solid red'}}>
        <Header handleSidebar={() => setExpanded(!expanded)} />
        <BaseBreadcrumbs />
      </main>
    </div>
    </SidebarProvider>
  )
}

export default App
