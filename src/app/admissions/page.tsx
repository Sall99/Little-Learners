import React from "react";

import { AdmissionsProcess, Overview } from "@/components";

const AdmissionsPage = () => {
  return (
    <>
      <Overview
        buttonText="Admissions"
        title={"Join Our Family of Young Learners"}
        description={
          "At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
        }
      />
      <AdmissionsProcess />
    </>
  );
};

export default AdmissionsPage;
