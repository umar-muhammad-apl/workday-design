import React, { createContext } from "react";


export type AuthContextType = {
    isLoggedIn?: boolean,
    setLogginStatus?: (id: boolean) => void;
    user: any
    saveUser: (todo: any) => void;
};
type AuthorizationProviderProps  = {
    children: React.ReactNode;
}

const initialValueContext = {
    isLoggedIn: false,
    setLogginStatus: () => {},
    user: null,
    saveUser: () => {}
}


export const Authorization = createContext<AuthContextType>(initialValueContext);

export const AuthorizationProvider: React.FC<AuthorizationProviderProps> = ({ children }) => {
  
   const [user, setUser] = React.useState(null)

  const saveUser = (newUser: any) => {
    setUser(newUser);
  };
   
   
   
  return (
    <Authorization.Provider
      value={{
        user,
        saveUser
      }}
    >
      {children}
    </Authorization.Provider>
  );
};
