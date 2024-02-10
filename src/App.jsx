import { useEffect, useState } from "react";
import { Navbar } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto w-[90vw] flex flex-wrap h-full justify-start gap-14 mt-5">
        <Outlet />
      </div>
    </>
  );
}

export default App;
