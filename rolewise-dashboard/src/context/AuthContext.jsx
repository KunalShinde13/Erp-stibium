import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("session")));
  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("session", JSON.stringify(userData));

    if (userData.role === "admin") navigate("/admin/dashboard");
    else navigate("/user/dashboard");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("session");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
