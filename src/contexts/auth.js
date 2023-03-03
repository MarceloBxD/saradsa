import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [users, setUsers] = useState([]);

  const value = {
    users,
    setUsers,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
