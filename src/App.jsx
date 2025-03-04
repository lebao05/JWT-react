import { useEffect, useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeaderBar from "./component/headerBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User from "./pages/User";
import AuthProvider, { useAuth } from "./component/auth.context";
import { getUser } from "./services/api";
function App() {
  const { setUser } = useAuth();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        if (user) {
          setUser({
            isAuthenticated: true,
            info: { email: user.email, username: user.username },
          });
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);
  return (
    <div>
      <HeaderBar></HeaderBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/user" element={<User></User>}></Route>
      </Routes>
    </div>
  );
}

export default App;
