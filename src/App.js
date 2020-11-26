import React from "react";
import Navbar from "./components/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ThemeState from "./context/ThemeState";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <ThemeState>
      <Navbar />
      <div className="container">
        <ThemeSwitcher />
      </div>
    </ThemeState>
  );
}
