import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import ContactBanner from "../../widgets/ContactBanner";
import "../ReachUs/reachus.css";
import CustomButton from "../../widgets/CustomButton";
import {
  getReachUsResponseData,
  ReachUsResponseData,
} from "../../services/reachUs";
import { getFullImageUrl } from "../../services/actualPath";

const ReachUs: React.FC = () => {
  const [reachUsData, setreachUsData] = useState<ReachUsResponseData | null>(
    null
  );

  const fetchReachUsResponseData = () => {
    getReachUsResponseData()
      .then((response) => {
        const data = response.data;
        setreachUsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchReachUsResponseData();
  }, []);
  return (
    <>
      <Banner
        bannerText={reachUsData?.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label: reachUsData?.banner_Course_Details_text || "",
            to: reachUsData?.banner_Course_Details_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(reachUsData?.banner_image.formats.large.url) || ""
        }
      />
      <div className="container mt-5">
        <div className="row  reach-us-bg p-4">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <iframe
              className="w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236665.10689888883!2d77.5934622!3d13.034278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17a2945e639f%3A0x2098c9ec97a67d82!2sRGC%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1679635593255!5m2!1sen!2sin"
            ></iframe>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex align-items-center justify-content-center h-100">
              <div className="d-flex flex-column">
                <h2
                  style={{
                    color: "#333333",
                    fontSize: "35px",
                    fontWeight: 600,
                  }}
                >
                  {reachUsData?.reach_us_title}
                </h2>
                <p style={{ color: "#808080" }}>
                  {reachUsData?.reach_us_description}
                </p>
                <div className="row">
                  <div className="col-lg-6 col-sm-12 col-md-12 px-0 ps-lg-0  mt-3">
                    <input
                      type="text"
                      className="form-control p-2 rounded-0 reach-us-input"
                      placeholder={reachUsData?.Full_Name}
                    />
                  </div>

                  <div className="col-lg-6 col-sm-12 col-md-12 px-0 pe-lg-0 mt-3">
                    <input
                      type="text"
                      className="form-control p-2 rounded-0 reach-us-input"
                      placeholder={reachUsData?.Contact_No}
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <input
                    type="email"
                    className="form-control p-2 rounded-0 reach-us-input"
                    placeholder={reachUsData?.Email}
                  />
                </div>

                <div className=" mt-3">
                  <textarea
                    rows={3}
                    className="form-control rounded-0 reach-us-textarea"
                    placeholder={reachUsData?.Queries}
                  />
                </div>

                <CustomButton
                  label={reachUsData?.Send_Application_text}
                  path={reachUsData?.Send_Application_link}
                  btnClassName="btn mt-4 reach-us-btn w-50 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <ContactBanner />
      </div>
    </>
  );
};

export default ReachUs;
