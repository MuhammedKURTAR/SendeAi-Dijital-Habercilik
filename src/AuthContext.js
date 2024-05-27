import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = ({ email }) => {
    setIsAuthenticated(true);
    setUser({ email });
  };

  const signup = ({ firstName, lastName, phone, email, password, userType }) => {
    setIsAuthenticated(true);
    setUser({ firstName, lastName, phone, email, userType });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
