"use client"; // Mark this file as a Client Component

import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { Menu } from "lucide-react"; // Example icon for the toggle button

function Layout({ children }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSideNav}
        className="md:hidden p-4 fixed top-0 left-0 bg-primary text-white z-50"
      >
        <Menu />
      </button>

      {/* SideNav for larger screens */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-sm border p-5 md:block ${
          isSideNavOpen ? "block" : "hidden"
        } md:block`}
      >
        <SideNav />
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${isSideNavOpen ? "ml-64" : "ml-0"} md:ml-64`}>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
