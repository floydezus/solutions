import { createContext } from 'react';

export type AuthContextType = {
    loggedIn: boolean;
    logIn: () => void;
    logOut: () => void;
  };

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;