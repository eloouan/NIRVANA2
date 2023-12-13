import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isLogged: boolean;
  setisLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLogged, setisLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogged, setisLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
