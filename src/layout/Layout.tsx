// Layout.tsx
import React, { useState } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { LayoutRouteProps } from "react-router-dom";
import { Outlet,  } from "react-router-dom";
import './Layout.css'
import Home from "../pages/Home/Home";
const Layout: React.FC<LayoutRouteProps> = () => {
  const [open,setOpen]=useState(true)
  return (
    <div className="layoutLight" style={{transition:"0.5s all ese"}}>
    {open?   <aside className="aside"  >
   
       <Sidebar />
      </aside>:""}
      <div className="mainLayoutWrapper">
        <header>
          {" "}
          <Header setOpen={setOpen} open={open} />{" "}
        </header>
        <main className="main">
          <Outlet />
          {/* <Home/> */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
