// ~/components/state/AuthProvider.js

import { useState, useContext, createContext } from 'react';
import { login } from '@/utils/api/auth';

export const AuthenticationContext = createContext({});

export default function AuthProvider({children}) {
    const [token, setToken] = useState(""); // The "Access Token"
    const [user, setUser] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signIn = ({email, password}) => {
        return login({email, password}).then(loginData => {
            setIsAuthenticated(true);
            setToken(loginData.accessToken);
            setUser(loginData.user);
        });
    }

    const signOut = () => {
        setIsAuthenticated(false);
        setUser();
        setToken("");
    }

    return <AuthenticationContext.Provider value={{
        token, user, isAuthenticated, signIn, signOut
    }}>
        {children}
    </AuthenticationContext.Provider>
}
