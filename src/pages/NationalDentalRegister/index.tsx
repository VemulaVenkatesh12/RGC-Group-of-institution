import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import "./nationaDentalRegister.css";
import CustomButton from "../../widgets/CustomButton";
import { EnquFormRespData, getEnquForm } from "../../services/enquForm";
import { getFullImageUrl } from "../../services/actualPath";
const NationalDentalRegister: React.FC = () => {
  const [formValueData, setFormValueData] = useState<EnquFormRespData | null>(
    null
  );
  const fetchEnqFormData = () => {
    getEnquForm()
      .then((response) => {
        const count = response.data;
        setFormValueData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchEnqFormData();
  }, []);
  console.log(formValueData, "formValueData");
  return (
    <>
      <Banner
        bannerText={formValueData?.banner_title}
        bannerImageClassName="rgc-medical-banner"
        breadCrumbsList={[
          {
            label: formValueData?.banner_Academics_Admission_text || "",
            to: formValueData?.banner_Academics_Admission_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(formValueData?.banner_image.formats.large.url) || ""
        }
      />
      <div className="container col-lg-6 col-sm-12 col-md-6 my-5 ">
        <div className="mt-5">
          <h5 className="fw-bold primary-text text-center">
            {formValueData?.enquiry_form.title}
          </h5>
          <h3 className="fw-bold text-center">
            {formValueData?.enquiry_form.subtitle}
          </h3>
          <p className="p-font-size-14 description-text text-center pt-4">
            {formValueData?.enquiry_form.Description}
          </p>
          <div>
            <div className="mt-3">
              <input
                type="text"
                className="form-control  rounded-0 p-3 enquiry-form-input"
                placeholder={formValueData?.enquiry_form.first_name}
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="form-control  rounded-0 p-3 enquiry-form-input"
                placeholder={formValueData?.enquiry_form.address}
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="form-control  rounded-0 p-3 enquiry-form-input"
                placeholder={formValueData?.enquiry_form.dob}
              />
            </div>
            <div className="mt-3">
              <input
                type="email"
                className="form-control  rounded-0 p-3 enquiry-form-input"
                placeholder={formValueData?.enquiry_form.email}
              />
            </div>
            <div className="mt-3">
              <input
                type="tel"
                className="form-control rounded-0 p-3 enquiry-form-input"
                placeholder={formValueData?.enquiry_form.ph_no}
              />
            </div>
            <div className="mt-3">
              <select
                className="form-select rounded-0 p-3 enquiry-form-input course-option"
                aria-label="Default select example"
              >
                <option selected>
                  {formValueData?.enquiry_form.select_courses}
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mt-3">
              <textarea
                rows={4}
                className="form-control p-2 rounded-0 p-3 enquiry-form-textarea"
                placeholder={formValueData?.enquiry_form.Your_query}
              />
            </div>
            <div className="mt-3 text-center">
              <CustomButton
                btnClassName="btn btn-md red-btn  text-white"
                label={formValueData?.enquiry_form.send_text}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <IFrameBanner requiredFooterBorder={true} />
      </div>
      <div>
        <ContactBanner />
      </div>
    </>
  );
};

export default NationalDentalRegister;
