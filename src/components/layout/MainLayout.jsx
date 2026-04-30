import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import TopActions from "./TopActions";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-black text-white light:bg-white light:text-black">
      <SideNav />
      <TopActions />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;