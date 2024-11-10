"use client";

import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import clsx from "clsx";

import { Heading, Typography } from "@/components";
import { faqs } from "@/constants";

function Disclo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="mx-auto w-full divide-y divide-white/5 rounded-xl bg-white/5">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {faqs.map(({ question, answer, id }) => (
            <motion.div key={id} className="h-full" variants={itemVariants}>
              <Disclosure>
                {({ open }) => (
                  <motion.div
                    className="rounded-lg border-2 border-gray-700 bg-white p-4 md:p-6"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DisclosureButton
                      className={clsx(
                        "flex w-full justify-between pb-5 text-left",
                        open ? "border-b-2 border-gray-700" : "",
                      )}
                    >
                      <Typography
                        variant="h2"
                        headingSize="sm"
                        className="w-_268 sm:w-full"
                      >
                        {question}
                      </Typography>
                      <motion.div
                        className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-gray-700 bg-primary-300"
                        whileHover={{
                          backgroundColor: "rgb(var(--primary-400))",
                          transition: { duration: 0.2 },
                        }}
                      >
                        <motion.div
                          animate={{ rotate: open ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                        </motion.div>
                      </motion.div>
                    </DisclosureButton>

                    <DisclosurePanel
                      as={motion.div}
                      initial={false}
                      animate={
                        open
                          ? { opacity: 1, height: "auto" }
                          : { opacity: 0, height: 0 }
                      }
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        className="mt-4 text-sm text-gray-600"
                      >
                        <Typography variant="p" paragraphSize="sm">
                          {answer}
                        </Typography>
                      </motion.div>
                    </DisclosurePanel>
                  </motion.div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export const Faq = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="mb-10 px-4 lg:mb-_150 lg:px-_50 2xl:mb-_200">
      <div className="m-auto max-w-_1590">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <Heading
            bntText="Solutions For The Doubts"
            title="Frequently Asked Questions"
            description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
          />
        </motion.div>
        <Disclo />
      </div>
    </section>
  );
};
