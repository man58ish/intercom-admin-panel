import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import ChatPage from "./pages/ChatPage";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";

// PrivateRoute now always expects an 'element' prop
const PrivateRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  return isLoggedIn ? element : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute
                element={
                  <Layout>
                    <Dashboard />
                  </Layout>
                }
              />
            }
          />
          <Route
            path="/chat/:id"
            element={
              <PrivateRoute
                element={
                  <Layout>
                    <ChatPage />
                  </Layout>
                }
              />
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute
                element={
                  <Layout>
                    <Settings />
                  </Layout>
                }
              />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute
                element={
                  <Layout>
                    <Profile />
                  </Layout>
                }
              />
            }
          />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
