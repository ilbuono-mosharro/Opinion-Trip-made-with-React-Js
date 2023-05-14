import { createContext, useState } from "react";
import PropTypes from 'prop-types';
// Crea il contesto
export const AuthContext = createContext();

// Componente Provider per condividere lo stato di autenticazione
export function AuthProvider(props) {
  const [loggin, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggin, handleLogin, handleLogout }}>
      {props.children}
    </AuthContext.Provider>
  );
}


AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
};
