import { createContext, useContext, useEffect, useState } from "react";

type User = {
  clientId: string;
} | null;

interface UserContextProps {
  user: User;
  getUser: () => User;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  getUser: () => null,
  setUser: () => {},
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

  const addUser = (user: User) => {
    console.log("Entré en addUser", user);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const getUser = () => {
    const user = localStorage.getItem("user");
    if (user) return JSON.parse(user);
    return null;
  };

  return (
    <UserContext.Provider value={{ user, setUser: addUser, getUser }}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { UserProvider, useUser };
