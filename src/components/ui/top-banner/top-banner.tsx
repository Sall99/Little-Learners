import Image from "next/image";
import React from "react";

export const TopBanner = () => {
  return (
    <div className="lg:px-_50 px-4">
      <div className="2xl:max-w-_1819 py-_14 mt-_18 relative m-auto overflow-hidden rounded-md border-2 border-gray-800 bg-primary-400 text-center">
        <p className="font-outfit text-base font-medium xl:text-lg">
          Admission is Open, Grab your seat now
        </p>

        <div className="absolute left-7 top-0 -translate-x-1/2 -translate-y-1/2 transform lg:left-1/4 lg:top-1/4">
          <div className="xl:w-_72 xl:h-_72 w-_50 h-_50 relative">
            <Image src="/assets/img/sphere.png" alt="sphere" fill />
          </div>
        </div>

        <div className="-bottom-_50 absolute -right-10 -translate-x-1/2 -translate-y-1/2 transform lg:right-1/4 xl:-bottom-1/2">
          <div className="w-_50 h-_50 relative xl:h-10 xl:w-10">
            <Image src="/assets/img/sphere.png" alt="sphere" fill />
          </div>
        </div>
      </div>
    </div>
  );
};
