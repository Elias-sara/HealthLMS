import Image from "next/image";
import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5">
      <Image src="/Logo5.svg" alt="Welcome" width={100} height={100} />
      <div>
        <h2 className="font-bold text-[29px]">
          Welcome to <span className="text-primary">Hayat Health </span>Acadamy
        </h2>
        <h2 className="text-gray-500">
          Explore,Learn and build All Real Life Projects
        </h2>
      </div>
    </div>
  );
};

export default WelcomeBanner;
