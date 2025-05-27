import React, { useState, useEffect } from "react";
import Banner from "../../widgets/Banner";
import "../management/management.css";
import EnquiryForm from "../../widgets/EnquiryForm";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import {
  getManagementData,
  ManagementData,
} from "../../services/managementData";
import { getFullImageUrl } from "../../services/actualPath";

const Management: React.FC = () => {
  const [managementData, setmanagementData] = useState<ManagementData | null>(
    null
  );
  const fetchManagementData = () => {
    getManagementData()
      .then((response) => {
        const count = response.data;
        setmanagementData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchManagementData();
  }, []);
  return (
    <>
      <Banner
        bannerText={managementData?.banner_title}
        bannerImageClassName="rgc-sanjay-gandhi-institution-banner"
        bannerImageUrl={
          getFullImageUrl(managementData?.banner_image.formats.large?.url) || ""
        }
        breadCrumbsList={[
          {
            label: managementData?.banner_about_us_text || "",
            to: managementData?.banner_about_us_link || "",
          },
        ]}
      />
      <div className="management-bg pt-3 pb-3">
        <div className="container ps-0 mt-5">
          <div className="row">
            <div className="col-lg-5 col-md-3 col-sm-12 position-relative">
              <img
                src={
                  getFullImageUrl(
                    managementData?.Director.image.formats.large?.url
                  ) || ""
                }
                alt="chairman-image"
                className="img-fluid"
              />
              <div className="card px-2 py-2 rounded-0 management-img-card bg-white position-absolute">
                <div className="d-flex gap-4 align-items-start">
                  <div className="p-2 rounded-2">
                    <p className="fw-bold p-font-size-16">
                      {managementData?.Director.name}
                    </p>
                    <p className="p-font-size-14">
                      {managementData?.Director.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-9 col-sm-12 p-5 pt-2">
              <h2 className="fw-bold">{managementData?.Director.title}</h2>
              <div className=" d-inline-block  mt-4 mb-3">
                <h5 className="fw-bold">{managementData?.Director.name}</h5>
                <p className="p-font-size-14">
                  {managementData?.Director.date}
                </p>
              </div>
              <p className="p-font-size-14">
                {managementData?.Director.Description}
              </p>

              {/* First Education/Experience Section */}
              <div className="bg-white d-flex align-items-center gap-3 mt-4">
                <img
                  src={
                    getFullImageUrl(
                      managementData?.Education_Experience?.[0]?.logo?.url
                    ) || ""
                  }
                  alt="education-icon"
                  className="img-fluid custom-img"
                />
                <h4 className="fw-bold">
                  {managementData?.Education_Experience?.[0]?.title}
                </h4>
              </div>
              <ul className="list-unstyled">
                {managementData?.Education_Experience?.[0]?.details?.map(
                  (detail, index) => (
                    <li key={index} className="mt-2">
                      {detail.name}
                    </li>
                  )
                )}
              </ul>

              {/* Second Education/Experience Section */}
              <div className="bg-white d-flex align-items-center gap-3 mt-4">
                <img
                  src={
                    getFullImageUrl(
                      managementData?.Education_Experience?.[1]?.logo?.url
                    ) || ""
                  }
                  alt="poetry-image"
                  className="img-fluid custom-img"
                />
                <h4 className="fw-bold">
                  {managementData?.Education_Experience?.[1]?.title}
                </h4>
              </div>
              <ul className="list-unstyled">
                {managementData?.Education_Experience?.[1]?.details?.map(
                  (detail, index) => (
                    <li key={index} className="mt-2">
                      {detail.name}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <EnquiryForm />
      </div>
      <div>
        <IFrameBanner requiredFooterBorder={false} />
      </div>
      <div>
        <ContactBanner />
      </div>
    </>
  );
};

export default Management;
