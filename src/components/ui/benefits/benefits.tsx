"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Heading, Typography } from "@/components";
import { benefitsFeatures } from "@/constants";

interface CardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const Card = ({ title, description, icon, index }: CardProps) => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        delay: index * 0.2,
        bounce: 0.4,
      },
    },
  };

  const iconVariants = {
    offscreen: {
      scale: 0,
      rotate: -180,
    },
    onscreen: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        delay: index * 0.2 + 0.3,
        bounce: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="lg-box-shadow relative h-_243 rounded-xl border-2 border-gray-700 bg-white px-_30 pt-_50 lg:px-10 lg:pt-_60 2xl:h-_306 2xl:w-_504 2xl:border-b-8 2xl:border-r-8 2xl:px-_50 2xl:pt-20"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        className="absolute -top-8 flex h-14 w-14 items-center justify-center rounded-md border-2 border-gray-700 bg-primary-500 2xl:-top-11 2xl:h-_74 2xl:w-_74"
        variants={iconVariants}
      >
        <div className="relative h-6 w-6 2xl:h-_34 2xl:w-_34">
          <Image src={`/assets/img/${icon}`} alt={title} fill />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
      >
        <Typography
          variant="h2"
          headingSize="md"
          className="mb-4 font-bold 2xl:mb-5"
        >
          {title}
        </Typography>
        <Typography variant="p" paragraphSize="sm">
          {description}
        </Typography>
      </motion.div>
    </motion.div>
  );
};

export const Benefits = () => {
  const headingVariants = {
    offscreen: {
      opacity: 0,
      y: 30,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="mb-10 px-4 lg:mb-_150 lg:mt-_60 lg:px-_50 2xl:mb-_200">
      <div className="m-auto max-w-_1590">
        <motion.div
          variants={headingVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Heading
            bntText="Children Deserve Bright Future"
            title="Our Benefits"
            description="With a dedicated team of experienced educators, state-of-the-art
            facilities, and a comprehensive curriculum, we aim to lay a strong
            foundation for your child s future."
          />
        </motion.div>
        <motion.div>
          <ul className="grid grid-cols-1 gap-10 gap-y-_76 lg:grid-cols-2 min-[1350px]:grid-cols-3">
            {benefitsFeatures.map(({ title, description, icon }, key) => (
              <li key={key}>
                <Card
                  title={title}
                  description={description}
                  icon={icon}
                  index={key}
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
