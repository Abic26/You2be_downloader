import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@/App.css";
import { MiComponente } from "./components/Template.jsx";
import { MyNavbar } from "./components/MyNavbar.jsx";

function App() {
  return (
    <>
      <MyNavbar />
      <MiComponente />
    </>
  );
}

export default App;
