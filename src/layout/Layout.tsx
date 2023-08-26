// Layout.tsx
import React, {  useState } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { LayoutRouteProps } from "react-router-dom";
import { Outlet,  } from "react-router-dom";
import './Layout.css'
import { useSelector } from "react-redux";


const Layout: React.FC<LayoutRouteProps> = () => {
  const mode = useSelector((state:any)=>state.darkmode.darkMode);
  const [open,setOpen]=useState(false)
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);



  return (
    <div className={mode ? "layoutLight" : "layoutDark"}>
     
        <aside className="aside"  style={{display:open?"flex":"none"}} >
          <Sidebar setOpen={setOpen} />
        </aside>
   
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
