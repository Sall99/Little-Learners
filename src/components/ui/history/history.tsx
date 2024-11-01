import React from "react";

import { Heading, TimelineItem } from "@/components";
import { historyTimelineData } from "@/constants";
import Image from "next/image";

export const History = () => {
  return (
    <section className="layout awards-recognitions">
      <div className="m-auto max-w-_1590">
        <Heading
          bntText="Our Progressive Journey"
          title="Our History"
          description="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
        />

        <div className="lg-box-shadow space-y-0 rounded-xl border-2 border-gray-700 bg-white p-_30 lg:p-_100 lg:pl-_177 2xl:p-_150 2xl:pl-_243">
          <div className="relative">
            {historyTimelineData.map(({ year, title, description }, index) => (
              <TimelineItem
                key={index}
                year={year}
                title={title}
                description={description}
              />
            ))}
            <div className="absolute -left-[77px] top-[65px] z-10 hidden xl:block">
              <div className="relative h-[695px] w-4">
                <Image
                  src="/assets/img/vertical-horizontal.png"
                  fill
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
