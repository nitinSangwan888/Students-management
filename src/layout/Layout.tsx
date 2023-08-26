// Layout.tsx
import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { LayoutRouteProps } from "react-router-dom";
import { Outlet,  } from "react-router-dom";
import './Layout.css'
import { useSelector } from "react-redux";


const Layout: React.FC<LayoutRouteProps> = () => {
  const mode = useSelector((state:any)=>state.darkmode.darkMode);
  const [open,setOpen]=useState(true)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      // Update the window width when the window is resized
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Attach the event listener
      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    console.log(windowWidth);
    
useEffect(()=>{
if (window.innerWidth < 1000) {
  setOpen(false);
}else{
  setOpen(true)
}
},[window.innerWidth])

  return (


    <div className={mode?"layoutLight":"layoutDark"} >
    {open?   <aside className="aside"  >
   
       <Sidebar setOpen = {setOpen} />
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
