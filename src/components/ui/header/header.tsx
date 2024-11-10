"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

import { Typography } from "@/components";
import { NavLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

interface MenuBurgerProps {
  toggleMenu: () => void;
}

interface MenuMobileProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

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

const MenuBurger = ({ toggleMenu }: MenuBurgerProps) => {
  return (
    <motion.div
      onClick={toggleMenu}
      whileTap={{ scale: 0.9 }}
      className="flex h-_66 w-_88 items-center justify-center rounded-br-xl rounded-tr-xl border-l-2 border-gray-800 bg-primary-300 lg:hidden"
    >
      <div className="relative h-7 w-7">
        <Image src="/assets/img/burger.png" fill alt="Logo" />
      </div>
    </motion.div>
  );
};

const MobileMenu = ({ isMenuOpen, toggleMenu }: MenuMobileProps) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="abs fixed inset-0 z-50 bg-white lg:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8">
            <ul className="">
              {NavLinks.map(({ name, path }, key) => {
                const isActive = pathName === path;
                return (
                  <li
                    key={key}
                    className={clsx(
                      "flex h-_66 items-center justify-center px-_30",
                      isActive ? "underline underline-offset-2" : "",
                    )}
                    onClick={toggleMenu}
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
          </div>
          <motion.div
            className="absolute left-5 top-5 z-50"
            whileTap={{ scale: 0.9 }}
          >
            <X size={24} onClick={toggleMenu} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
          <MenuBurger toggleMenu={toggleMenu} />
          <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
};
