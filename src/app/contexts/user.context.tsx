import { createContext, useContext, useEffect, useState } from "react";

type User = {
  clientId: string;
  username: string;
} | null;

interface UserContextProps {
  user: User;
  setUser: (user: User) => void;
  cleanUser: () => void;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
  cleanUser: () => {},
});

const useUser = () => {
  return useContext(UserContext);
};

interface UserProviderProps {
  children: React.ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setUser(JSON.parse(user));
  }, []);

  const cleanUser = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, setUser, cleanUser }}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { UserProvider, useUser };
