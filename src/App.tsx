import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { SidebarProvider } from './context/SidebarProvider'
// import './App.css'

const App = () => {
  return (
    <SidebarProvider>
    <div>
      <Header />
      <Sidebar />
    </div>
    </SidebarProvider>
  )
}

export default App
