import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import NavBar from "./NavBar";
import UploadNews from "./UploadNews";
import Rewards from "./Rewards";
import News from "./News"; // News bileşenini içe aktarıyoruz
import Home from "./Home";
import Footer from "./Footer"; // Footer bileşenini içe aktarıyoruz
import { AuthProvider, useAuth } from "./AuthContext";
import "./App.css";

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <NavBar />
          <div className="app-body">
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route
                path="/upload"
                element={<PrivateRoute element={<UploadNews />} />}
              />
              <Route
                path="/rewards"
                element={<PrivateRoute element={<Rewards />} />}
              />
              <Route
                path="/news"
                element={<PrivateRoute element={<News />} />}
              />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
          </div>
          <Footer /> {/* Footer bileşenini ekliyoruz */}
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
