import React from "react";
import "../PatientConsultBanner/parientConsultBanner.css";

interface IPatientTimingsProps {
  title?: string;
  subtitle?: string;
  weekDays?: string;
  weekDaysTimings?: string;
  weekEnds?: string;
  weekEndTimings?: string;
  title1?: string;
  contactNumbers?: string;
  image?: string
}

const PatientConsultBanner: React.FC<IPatientTimingsProps> = ({
  title,
  subtitle,
  weekDays,
  weekDaysTimings,
  weekEnds,
  weekEndTimings,
  title1,
  contactNumbers,
  image
}) => {
  return (
    <div className="consult-banner p-5 position-relative mb-5" style={
        image
          ? {
              backgroundImage: `url(${image})`,
            }
          : undefined
      }>
      <h3 className="text-white text-center fw-bold">
        {title}
      </h3>
      <p className="text-center text-white p-font-size-16">
       {subtitle}
      </p>
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-md-6">
            <div className="card px-4  py-4 rounded-2 postion-absolute bg-white mt-4">
              <div className="d-flex gap-4 align-items-start ">
                <div className="border-2 border-end">
                  <h4 className="fw-bold text-center me-3">
                    {weekDays}
                  </h4>
                  <p className="me-3 p-font-size-16">
                    {weekDaysTimings}
                  </p>
                </div>
                <div className="ms-2">
                  <h4 className="fw-bold text-center">{weekEnds}</h4>
                  <p className="p-font-size-16">{weekEndTimings}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-md-6">
            <div className="card px-4  py-4 rounded-2 postion-absolute bg-white mt-4">
              <div>
                <h4 className="fw-bold text-center me-3">
                  {title1}
                </h4>
                <p className="me-3 text-center p-font-size-16">
                  {contactNumbers}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientConsultBanner;
