import React, { useEffect } from "react";
import {
  BadgeIcon,
  BookOpen,
  GraduationCap,
  Store,
  Mail,
  LayoutDashboard,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const SideNav = () => {
  const { user } = useUser();

  const menu = [
    {
      id: 6,
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
      auth: true,
    },
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
      path: "/courses",
      auth: true,
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
      path: "/membership",
      auth: true,
    },
    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap,
      path: "/be-instructor",
      auth: true,
    },
    {
      id: 4,
      name: "Store",
      icon: Store,
      path: "/store",
      auth: true,
    },
    {
      id: 5,
      name: "Newsletter",
      icon: Mail,
      path: "/newsletter",
      auth: true,
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log("Current path:", path);
  }, [path]);

  return (
    <div className="hidden md:block p-5 bg-white shadow-sm">
      <Image src="/Logo6.svg" alt="logo" width={40} height={40} />
      <span className="text-xl font-semibold">Contents</span>
      <hr className="my-5" />
      <div className="mt-5">
        {menu.map(
          (item) =>
            item.auth && (
              <Link key={item.id} href={item.path}>
                <div
                  className={`group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200
                ${path === item.path ? "bg-primary text-white" : ""}`}
                >
                  <item.icon className="group-hover:animate-bounce" />
                  <h2>{item.name}</h2>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default SideNav;
