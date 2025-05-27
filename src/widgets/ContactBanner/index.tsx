import React, { useEffect, useState } from "react";
import locationIcon from "../../assets/locationIcon.webp";
import mobileIcon from "../../assets/mobileIcon.webp";
import "../ContactBanner/contactBanner.css";
import {
  contactBannerData,
  getContactBanner,
} from "../../services/contactBanner";
const ContactBanner: React.FC = () => {
  const [contactData, setContactData] = useState<contactBannerData | null>(
    null
  );
  const fetchContactData = () => {
    getContactBanner()
      .then((response) => {
        const count = response.data;
        setContactData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchContactData();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 text-center p-4 text-white bg-yellow">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <img
                className="image-fluid"
                src={locationIcon}
                width="60px"
                height="60px"
              />
              <h4 className="mt-1 fw-bold">
                {contactData?.campus_location.title}
              </h4>
              <p className="p-font-size-16 text-center pe-3">
                {contactData?.campus_location.Description}
              </p>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center p-4 text-white bg-green">
          <img
            className="image-fluid"
            src={mobileIcon}
            width="60px"
            height="60px"
          />
          <h4 className="mt-1 fw-bold ">{contactData?.contact.title}</h4>
          <p className="mb-0  p-font-size-16">
            <span className="fw-bold">{contactData?.contact.ph_no_text}</span>{" "}
            {contactData?.contact.mobile_number}
          </p>
          <p className=" p-font-size-16">
            <span className="fw-bold">{contactData?.contact.email_text} </span>
            <a
              href="mailto: admissions@srgcds.ac.in"
              className="text-decoration-underline text-white"
            >
              {contactData?.contact.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
