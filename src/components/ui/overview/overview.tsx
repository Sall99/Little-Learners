import React from "react";

import { Button, Typography } from "@/components";
import Image from "next/image";
import { contactData } from "@/constants";

interface OverviewProps {
  title: string;
  description?: string;
  buttonText?: string;
  contact?: boolean;
}

interface ContactCardProps {
  title: string;
  icon: string;
}

const ContactCard = ({ title, icon }: ContactCardProps) => {
  return (
    <div className="2xl:w-_370 flex items-center gap-2 rounded-xl border-2 border-gray-700 p-4 2xl:p-6">
      <div className="flex h-10 w-10 items-center justify-center">
        <div className="relative h-6 w-6">
          <Image src={`/assets/img/${icon}`} alt={title} fill />
        </div>
      </div>
      <Typography variant="p" paragraphSize="sm" className="font-semibold">
        {title}
      </Typography>
    </div>
  );
};

export const Overview = ({
  title,
  description,
  buttonText = "Overview",
  contact = false,
}: OverviewProps) => {
  return (
    <section className="layout">
      <div className="lg-box-shadow relative m-auto max-w-_1819 rounded-xl border-2 border-gray-700 p-_50 px-_30 md:px-20 lg:py-40 2xl:px-_120 2xl:py-_150">
        <div className="absolute left-0 top-0">
          <div className="relative h-_100 w-_100 lg:h-_137 lg:w-_137 2xl:h-_200 2xl:w-_200">
            <Image src={`/assets/img/abstract-design.png`} alt={title} fill />
          </div>
        </div>
        <div className="flex flex-col gap-5 text-center md:gap-_50 lg:flex-row lg:text-start">
          <div className="flex-1">
            <Button size="sm">{buttonText}</Button>
            <Typography variant="h2" headingSize="lg" className="font-medium">
              {title}
            </Typography>
          </div>
          <div className="lg:w-_535 2xl:w-_765">
            {contact ? (
              <div>
                <Typography variant="p" headingSize="sm">
                  {description}
                </Typography>
                <div className="mt-_50 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {contactData.map(({ title, icon }, key) => (
                    <ContactCard key={key} title={title} icon={icon} />
                  ))}
                </div>
              </div>
            ) : (
              <Typography variant="p" headingSize="lg">
                {description}
              </Typography>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
