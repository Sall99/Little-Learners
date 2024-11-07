import React from "react";

import { Heading, Typography } from "@/components";
import { admissionProcess } from "@/constants";
import Image from "next/image";

interface CardProps {
  step: number;
  title: string;
  description: string;
}

const Card = ({ step, title, description }: CardProps) => {
  console.log(step);
  return (
    <div className="2xl:h-_322 lg-box-shadow relative m-auto mt-44 h-_200 rounded-xl border-2 border-gray-700 p-_30 xl:h-64 xl:w-_400 xl:p-10 2xl:w-_498 2xl:p-_50">
      <div className="absolute -top-[65%] left-1/2 -translate-x-1/2 transform sm:left-12 xl:-top-[50%] 2xl:-top-[40%]">
        <div className="relative">
          {step !== 1 && (
            <div className="absolute -top-[63%] left-1/2 -translate-x-1/2 transform sm:hidden">
              <div className="relative h-12 w-_10">
                <Image
                  src="/assets/img/admission-line-2.png"
                  alt="Shape"
                  fill
                />
              </div>
            </div>
          )}

          <div className="lg-box-shadow flex h-_72 w-24 items-center justify-center rounded-xl border-2 border-gray-700">
            <Typography
              variant="h2"
              headingSize="md"
              className="font-raleway font-semibold"
            >
              0{step}
            </Typography>
          </div>
          <div className="absolute left-1/2 top-[86%] -translate-x-1/2 transform">
            <div className="relative h-16 w-24">
              <Image src="/assets/img/admission-line-1.png" alt="Shape" fill />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Typography variant="h2" headingSize="md" className="font-semibold">
          {title}
        </Typography>

        <Typography variant="p" paragraphSize="sm">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export const AdmissionsProcess = () => {
  return (
    <section className="mb-10 px-4 lg:mb-_150 lg:mt-_60 lg:px-_50 2xl:mb-_200">
      <div className="m-auto max-w-_1590">
        <Heading
          bntText="Process"
          title="Admission Process"
          description="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
        />
        <div className="grid grid-cols-1 justify-center sm:grid-cols-2 sm:gap-_30 xl:grid-cols-3 xl:gap-10 2xl:gap-_50">
          {admissionProcess.map(({ step, title, description }) => (
            <Card
              key={step}
              step={step}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
