import { createContext, useCallback, useMemo, useState } from "react";

export const LoginContext = createContext<{
  isLoggedIn: boolean;
  login: (value: boolean) => void;
}>({ isLoggedIn: false, login: (value: boolean) => {} });

export function LoginContextProvider({ children }: { children: any }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback((value: boolean) => {
    setIsLoggedIn(value);
  }, []);

  const contextValue = useMemo(
    () => ({ isLoggedIn, login }),
    [isLoggedIn, login]
  );

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
}
