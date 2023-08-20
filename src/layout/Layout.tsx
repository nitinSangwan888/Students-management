// Layout.tsx
import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { LayoutRouteProps } from "react-router-dom";
import { Outlet,  } from "react-router-dom";
import './Layout.css'
const Layout: React.FC<LayoutRouteProps> = () => {
  return (
    <div className="layoutLight">
      <aside className="aside">
        <Sidebar />
      </aside>
      <div className="mainLayoutWrapper">
        <header>
          {" "}
          <Header />{" "}
        </header>
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
