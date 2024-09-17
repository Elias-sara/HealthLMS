import React, { useEffect } from "react";
import { BadgeIcon, BookOpen, GraduationCap, Store, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
      path: "/courses", // Add path for navigation
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
      path: "/membership", // Add path for navigation
    },
    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap,
      path: "/be-instructor", // Add path for navigation
    },
    {
      id: 4,
      name: "Store",
      icon: Store,
      path: "/store", // Add path for navigation
    },
    {
      id: 5,
      name: "Newsletter",
      icon: Mail,
      path: "/newsletter", // Add path for navigation
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log("Current path:", path);
  }, [path]);

  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <Image src="/Logo6.svg" alt="logo" width={40} height={40} />
      <span className="text-xl font-semibold">Contents</span>
      <hr className="my-5" />
      {/* Menu List */}
      <div className="mt-5">
        {menu.map((item) => (
          <Link key={item.id} href={item.path}>
            <div
              className={`group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200
                ${path === item.path ? "bg-primary text-white" : ""} `}
            >
              <item.icon className="group-hover:animate-bounce" />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
