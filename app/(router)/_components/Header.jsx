import { Button } from "@/components/ui/button";
import { BellDot, Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-4 bg-white flex justify-between items-center">
      {/* Search bar */}
      <div className="flex gap-2 border p-2 rounded-md items-center">
        <Search />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none p-1"
          aria-label="Search"
        />
      </div>
      {/* Get Started Button and Bell Icon */}
      <div className="flex items-center gap-4">
        <BellDot className="text-gray-500" aria-label="Notifications" />
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
