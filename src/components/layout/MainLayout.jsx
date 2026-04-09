import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import TopActions from "./TopActions";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      <SideNav />
      <TopActions />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;