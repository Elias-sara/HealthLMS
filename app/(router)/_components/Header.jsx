"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { BellDot, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

function Header() {
  const { user, isLoaded } = useUser();
  return (
    <div className="p-2 bg-white flex justify-between items-center">
      {/* Search bar */}
      <div className="flex gap-1 border p-2 rounded-md items-center">
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
        {isLoaded && user ? 
          <UserButton SignOutUrl="/courses" />
         : 
          <Link href={"/sign-in"}>
            <Button>Get Started</Button>
          </Link>
        }
      </div>
    </div>
  );
}

export default Header;
