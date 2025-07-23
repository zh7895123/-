import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ProjectDetail from "@/pages/ProjectDetail";
import Alerts from "@/pages/Alerts";
import Accounts from "@/pages/Accounts";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {},
  logout: () => {},
});

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Accounts />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </AuthContext.Provider>
  );
}
