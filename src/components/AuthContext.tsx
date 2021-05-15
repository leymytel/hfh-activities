import React, { useState } from 'react';
import { HatTokenValidation } from '@dataswift/hat-js/lib/utils/HatTokenValidation';

import { config } from "../config";



export const AuthContext = React.createContext({
  user: {
    isAuthenticated: false,
    token: '',
    pdaName: '',
  },
  logout: () => {},
  login: (token: string, pdaName: string) => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    token: '',
    pdaName: '',
  })

  return (
    <AuthContext.Provider
      value={{
        user: user,
        logout: () => {
          localStorage.removeItem(config.jwtTokenKey);

          setUser({
            isAuthenticated: false,
            token: '',
            pdaName: '',
          });
        },
        login: (token: string, pdaName: string) => {
          if (token && !HatTokenValidation.isEncodedTokenExpired(token)) {
            setUser({
                isAuthenticated: true,
                token,
                pdaName,
              }
            );
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

