import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthProvider = createContext();
    // Using Context Api
const AuthContext = ({children}) => {
    const authFirebase = useFirebase();
    return (
        <AuthProvider.Provider value={authFirebase}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;