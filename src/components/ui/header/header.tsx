"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Typography } from "@/components";
import { NavLinks } from "@/constants";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Logo = () => {
  return (
    <div className="flex h-_66 w-_177 items-center justify-center rounded-bl-xl rounded-tl-xl border-r-2 border-gray-800 bg-primary-800 text-center md:w-_195 2xl:h-_76 2xl:w-_230">
      <Link href="/" className="flex items-center justify-center gap-2">
        <div className="relative h-7 w-7">
          <Image src="/assets/img/logo.png" fill alt="Logo" />
        </div>
        <Typography variant="p" paragraphSize="sm">
          Little Learners
        </Typography>
      </Link>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <div className="flex h-_66 w-_88 items-center justify-center rounded-br-xl rounded-tr-xl border-l-2 border-gray-800 bg-primary-300 lg:hidden">
      <div className="relative h-7 w-7">
        <Image src="/assets/img/burger.png" fill alt="Logo" />
      </div>
    </div>
  );
};

export const Header = () => {
  const pathName = usePathname();
  return (
    <header className="mb-_50 mt-_14 px-4 lg:mb-_60 lg:px-_50 2xl:mb-20">
      <div className="m-auto flex items-center justify-between rounded-xl border-2 border-gray-800 bg-white 2xl:max-w-_1819">
        <div>
          <div className="relative overflow-hidden text-center 2xl:max-w-_1819">
            <Logo />
          </div>
        </div>

        <div>
          <ul className="hidden lg:flex">
            {NavLinks.map(({ name, path }, key) => {
              const isActive = pathName === path;

              return (
                <li
                  key={key}
                  className={clsx(
                    "flex h-_66 items-center justify-center border-r-2 border-gray-800 px-_30 first:border-l-2 last:rounded-br-xl last:rounded-tr-xl last:border-r-0 last:bg-primary-800 2xl:h-_76",
                    isActive && "bg-primary-300",
                  )}
                >
                  <Link href={path}>
                    <Typography variant="p" paragraphSize="sm">
                      {name}
                    </Typography>
                  </Link>
                </li>
              );
            })}
          </ul>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
