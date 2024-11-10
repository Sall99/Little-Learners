import React from "react";

import "./index.css";
import { Heading, Typography } from "@/components";

export function TuitionFees() {
  return (
    <section className="tuition-fees mb-10 px-4 font-outfit lg:mb-_150 lg:mt-_60 lg:px-_50 2xl:mb-_200">
      <div className="m-auto max-w-_1590">
        <Heading
          bntText="Process"
          title="Admission Process"
          description="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
        />
        <div className="lg-box-shadow rounded-lg border-2 border-gray-700 bg-white p-_30 xl:p-_50 2xl:p-_60">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-orange-50">
                <th className="p-4">Program</th>
                <th className="p-4">Age Group</th>
                <th className="p-4">Annual Tuition</th>
                <th className="p-4">Registration Fee</th>
                <th className="p-4">Activity Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">Nursery</td>
                <td className="p-4">2 - 3 Years</td>
                <td className="p-4">$1,686</td>
                <td className="p-4">$162</td>
                <td className="p-4">$12</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Pre - Kindergartens</td>
                <td className="p-4">3 - 4 Years</td>
                <td className="p-4">$2,686</td>
                <td className="p-4">$220</td>
                <td className="p-4">$16</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Kindergarten</td>
                <td className="p-4">4 - 5 Years</td>
                <td className="p-4">$3,686</td>
                <td className="p-4">$340</td>
                <td className="p-4">$20</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lg-box-shadow mt-10 rounded-lg border-2 border-gray-700 bg-white p-_30 xl:mt-_60 xl:p-_50 2xl:mt-20 2xl:p-_60">
          <div className="mb-_30 rounded-xl border-2 border-gray-700 bg-orange-100 p-4 font-semibold">
            <Typography variant="h2" headingSize="sm">
              Additional Services
            </Typography>
          </div>
          <table className="table-2 w-full text-left">
            <tbody>
              <tr className="border-t">
                <td className="p-4">Before and After-School Care</td>
                <td className="p-4">$120 / per month</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Language Immersion Program</td>
                <td className="p-4">$60 / per semester</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Transportation (optional)</td>
                <td className="p-4">$80 / per month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
