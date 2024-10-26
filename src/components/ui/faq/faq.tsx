"use client";
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { Heading, Typography } from "@/components";
import { faqs } from "@/constants";
import clsx from "clsx";

function Disclo() {
  return (
    <div className="h-screen w-full pt-32">
      <div className="mx-auto w-full divide-y divide-white/5 rounded-xl bg-white/5">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {faqs.map(({ question, answer, id }) => (
            <div key={id} className="h-full">
              <Disclosure>
                {({ open }) => (
                  <div className="rounded-lg border-2 border-gray-700 bg-white p-4 md:p-6">
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
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-gray-700 bg-primary-300">
                        <ChevronDownIcon
                          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                            open ? "rotate-180 transform" : ""
                          }`}
                        />
                      </div>
                    </DisclosureButton>

                    <DisclosurePanel className="mt-4 text-sm text-gray-600">
                      <Typography variant="p" paragraphSize="sm">
                        {answer}
                      </Typography>
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Faq = () => {
  return (
    <section className="mb-_150 px-4 lg:px-_50">
      <div className="m-auto max-w-_1590">
        <Heading
          bntText="Solutions For The Doubts"
          title="Frequently Asked Questions"
          description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
        />
        <Disclo />
      </div>
    </section>
  );
};
