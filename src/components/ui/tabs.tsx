import React, { Fragment } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { ImgContainer } from "./gallery";

interface TabsProps {
  categories: {
    name: string;
    content: {
      images: string[];
      title: string;
      description: string;
    };
  }[];
}

export function Tabs({ categories }: TabsProps) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full">
        <TabGroup>
          <TabList className="flex w-full items-center gap-4 overflow-x-auto whitespace-nowrap lg:justify-center">
            <Tab as={Fragment} key="All">
              {({ selected }) => (
                <button
                  className={clsx(
                    "w-28 rounded-md border-2 border-gray-700 px-4 py-2",
                    selected && "bg-primary-400",
                  )}
                >
                  All
                </button>
              )}
            </Tab>
            {categories.map(({ name }) => (
              <Tab as={Fragment} key={name}>
                {({ selected }) => (
                  <button
                    className={clsx(
                      "rounded-md border-2 border-gray-700 px-4 py-2",
                      selected && "bg-primary-400",
                    )}
                  >
                    {name}
                  </button>
                )}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            <TabPanel key="All" className="rounded-xl bg-white/5 p-3">
              <div>
                {categories.map(({ name, content }) => (
                  <ImgContainer key={name} content={content} />
                ))}
              </div>
            </TabPanel>
            {categories.map(({ name, content }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                <ImgContainer content={content} />
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
