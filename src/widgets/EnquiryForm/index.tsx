import React, { useEffect, useState } from "react";

import "../../widgets/EnquiryForm/enquiryForm.css";
import CustomButton from "../CustomButton";
import Slider from "../Slider"; // Import your custom Slider component
import {
  EnquiryFormRespData,
  getEnquiryForm,
} from "../../services/enquiryForm";
import { getFullImageUrl } from "../../services/actualPath";
import EnquirySlide from "./EnquiryFormSlider";

const EnquiryForm: React.FC = () => {
  const [enquiryData, setEnquiryData] = useState<EnquiryFormRespData | null>(
    null
  );

  const fetchEnquiryData = () => {
    getEnquiryForm()
      .then((response) => {
        const count = response.data;
        setEnquiryData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchEnquiryData();
  }, []);

  return (
    <div className="col-12">
      <div className="row">
        <div className="col-md-6 col-lg-6 enquiryBg">
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="d-flex flex-column container p-5">
              <div className="row mt-3">
                <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                  <h2 className="enquiry-form-title">
                    {enquiryData?.enquiry_form?.title}
                  </h2>
                  <p className="enquiry-form-desc">
                    {enquiryData?.enquiry_form?.subtitle}
                  </p>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-12">
                  <input
                    type="text"
                    className="form-control p-2 enquiry-form-input"
                    placeholder={enquiryData?.enquiry_form.first_name}
                  />
                </div>

                <div className="col-lg-6 col-sm-12 col-md-12">
                  <input
                    type="text"
                    className="form-control p-2 enquiry-form-input"
                    placeholder={enquiryData?.enquiry_form.last_name}
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-lg-6 col-sm-12 col-md-12">
                  <input
                    type="email"
                    className="form-control p-2 enquiry-form-input"
                    placeholder={enquiryData?.enquiry_form.email_id}
                  />
                </div>

                <div className="col-lg-6 col-sm-12 col-md-12">
                  <input
                    type="tel"
                    className="form-control p-2 enquiry-form-input"
                    placeholder={enquiryData?.enquiry_form.phone}
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="mt-2">
                    <textarea
                      rows={3}
                      className="form-control border enquiry-form-textarea"
                      placeholder={enquiryData?.enquiry_form.enter_query}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <CustomButton
                    btnClassName="btn btn-md mt-4 text-white red-btn rounded-1"
                    label={enquiryData?.enquiry_form.send_text}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-6 p-0">
          <div className="position-relative h-100">
            {enquiryData?.enquiry_form.image_details && (
              <Slider
                withControls={true}
                infinite={true}
                arrows={false}
                slidesToShow={1}
                speed={1600}
                slidesToScroll={1}
                autoplay={true}
                fade={true}
                position="slider-controls2 position-absolute d-flex justify-content-end"
                sliderPadding="slider-padding"
                slidesList={enquiryData.enquiry_form.image_details.map(
                  (item, idx) => (
                    <EnquirySlide
                      key={idx}
                      image={
                        getFullImageUrl(item.image.formats.large.url) || ""
                      }
                      title={item.title}
                      subtitle={item.subtitle}
                    />
                  )
                )}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
