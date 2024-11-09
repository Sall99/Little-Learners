"use client";
import React, { useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";

import { Button, Heading, Input } from "@/components";
import { footerSocialNetworkLinks } from "@/constants";
import { contactFormSchema } from "@/constants/yup.schema";

type InputType = "text" | "email" | "tel" | "number";

interface Option {
  value: string;
  label: string;
}

interface FormValues {
  parentName: string;
  emailAddress: string;
  phoneNumber: string;
  studentName: string;
  studentAge?: number | null;
  programOfInterest: string;
  message?: string;
}

const formFields: Array<{
  name: string;
  label: string;
  placeholder: string;
  type: InputType;
  variant: "input" | "select" | "textarea";
  options?: Option[];
}> = [
  {
    name: "parentName",
    label: "Parent Name",
    placeholder: "Enter Parent Name",
    type: "text",
    variant: "input",
  },
  {
    name: "emailAddress",
    label: "Email Address",
    placeholder: "Enter Email Address",
    type: "email",
    variant: "input",
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    placeholder: "Enter Phone Number",
    type: "tel",
    variant: "input",
  },
  {
    name: "studentName",
    label: "Student Name",
    placeholder: "Enter Student Name",
    type: "text",
    variant: "input",
  },
  {
    name: "studentAge",
    label: "Student Age",
    placeholder: "Enter Student Age",
    type: "number",
    variant: "input",
  },
  {
    name: "programOfInterest",
    label: "Program of Interest",
    placeholder: "Select Program",
    type: "text",
    variant: "select",
    options: [
      { value: "", label: "Select Program" },
      { value: "program1", label: "Program 1" },
      { value: "program2", label: "Program 2" },
    ],
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Enter your Message (optional)",
    type: "text",
    variant: "textarea",
  },
];

const SocialLinks = () => {
  return (
    <div className="absolute left-1/2 top-[0%] flex -translate-x-1/2 -translate-y-1/2 transform gap-_14">
      {footerSocialNetworkLinks.map(({ name, icon }, key) => (
        <div
          key={key}
          className="flex h-_60 min-w-_100 items-center justify-center rounded-lg border-2 border-gray-700 bg-primary-400 2xl:h-_72 2xl:w-_154"
        >
          <div className="relative h-4 w-4 2xl:h-6 2xl:w-6">
            <Image src={`/assets/img/${icon}`} alt={name} fill />
          </div>
        </div>
      ))}
    </div>
  );
};

export function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = useCallback(async (data) => {
    console.log(data);
  }, []);

  return (
    <section className="mb-10 px-4 lg:mb-_150 lg:mt-_60 lg:px-_50 2xl:mb-_200">
      <div className="m-auto max-w-_1590">
        <Heading
          bntText="Contact Form"
          title="Student Information"
          description="If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"
        />

        <div className="lg-box-shadow relative rounded-xl border-2 border-gray-700 p-_30 py-20 md:p-_100 md:py-_120">
          <SocialLinks />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-_30 md:grid-cols-2 md:gap-_50">
              {formFields.map(
                ({ name, type, placeholder, variant, options }) => (
                  <div key={name} className="md:last:col-span-2">
                    <Input
                      name={name}
                      type={type}
                      variant={variant}
                      placeholder={placeholder}
                      register={register}
                      errors={errors}
                      options={options}
                    />
                  </div>
                ),
              )}
            </div>
            <Button variant="secondary" className="mt-5">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
