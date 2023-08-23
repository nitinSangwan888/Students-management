// Layout.tsx
import React, { useState } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { LayoutRouteProps } from "react-router-dom";
import { Outlet,  } from "react-router-dom";
import './Layout.css'
import { useSelector } from "react-redux";


const Layout: React.FC<LayoutRouteProps> = () => {
  const mode = useSelector((state:any)=>state.darkmode.darkMode);
  const [open,setOpen]=useState(true)
  return (


    <div className={mode?"layoutLight":"layoutDark"} style={{transition:"0.5s all ese"}}>
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
        
        </main>
      </div>
    </div>
  
  );
};

export default Layout;
