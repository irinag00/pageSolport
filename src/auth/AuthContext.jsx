import { createContext, useContext, useEffect, useState } from "react";
import { apiSolsport } from "../services/apiSolsport";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { data } from "autoprefixer";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async (token) => {
    try {
      const response = await apiSolsport.get("/auth/status", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.statusText === "OK") {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Check auth error", error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
    return isAuthenticated;
  };

  const login = async (username, password) => {
    try {
      const response = await apiSolsport.post(
        "/auth/login",
        { username, password },
        { withCredentials: true }
      );
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      return response.data;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Error during login");
      }
    }
  };

  const logout = async () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkAuth(token);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ checkAuth, login, logout, loading, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
