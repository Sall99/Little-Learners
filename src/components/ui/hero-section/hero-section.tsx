"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { Typography } from "@/components";
import { HeroStats } from "@/constants";

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const statsContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const statItemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.section
      className="mb-10 px-4 lg:mb-_150 lg:px-_50 2xl:mb-_200"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="m-auto flex max-w-_1590 flex-col gap-10 lg:gap-_50 xl:flex-row 2xl:gap-_60">
        <motion.div className="flex-1" variants={imageVariants}>
          <div className="relative mx-auto aspect-square w-full max-w-2xl md:aspect-[15/16] 2xl:aspect-[15/16]">
            <Image
              src="/assets/img/hero-section.png"
              alt="sphere"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 33vw"
              priority
            />
          </div>
        </motion.div>

        <div className="m-auto flex flex-1 flex-col justify-center md:w-_615 xl:w-full">
          <motion.div variants={itemVariants}>
            <Typography
              variant="p"
              className="text-gray-700 underline underline-offset-8"
            >
              Welcome to Little Learners Academy
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="h2" font="secondary" className="font-bold">
              Where Young Minds Blossom and
              <motion.span
                className="text-primary-800"
                animate={{
                  scale: [1, 1.02, 1],
                  transition: { duration: 2, repeat: Infinity },
                }}
              >
                {" Dreams Take Flight."}
              </motion.span>
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="p" className="mt-5 text-gray-700">
              Our kinder garden school provides a nurturing and stimulating
              environment, fostering a love for learning that lasts a lifetime.
              Join us as we embark on an exciting educational journey together!
            </Typography>
          </motion.div>

          <div className="relative">
            <motion.div
              className="mt-_60 rounded-lg border-2 border-gray-700 bg-primary-300 px-10 py-6 2xl:p-_50"
              variants={statsContainerVariants}
            >
              <ul className="flex flex-col items-center gap-5 xl:flex-row">
                {HeroStats.map(({ title, number }, key) => (
                  <motion.li
                    key={key}
                    className="w-full border-b-2 border-gray-700 text-center"
                    variants={statItemVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Typography variant="h2" className="font-bold">
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 + key * 0.2 }}
                      >
                        +{number}
                      </motion.span>
                    </Typography>
                    <Typography variant="p" paragraphSize="sm">
                      {title}
                    </Typography>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
