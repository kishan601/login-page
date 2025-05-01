import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUser, saveUser, removeUser } from '../services/authStorage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = getUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (username, remember) => {
    const userData = { username };
    saveUser(userData, remember);
    setUser(userData);
  };

  const logout = () => {
    removeUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
