import React, { createContext, useState } from "react";


export type SidebarContextType = {
    isShowingSidebar: number,
    openSidebar: () => void;
    closeSidebar: () => void
};
type SidebarProviderProps  = {
    children: React.ReactNode;
}

const initialValueContext = {
    isShowingSidebar: 0,
    openSidebar: () => {},
    closeSidebar: () => {}

}


export const SidebarContext = createContext<SidebarContextType>(initialValueContext);

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  
   const [isShowingSidebar, setIsShowingSidebar] = useState(0)

  const openSidebar = () => {
    setIsShowingSidebar(1);
  };
   
  const closeSidebar = () => {
    setIsShowingSidebar(0);
  };
   
  return (
    <SidebarContext.Provider
      value={{
        isShowingSidebar,
        openSidebar,
        closeSidebar
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
