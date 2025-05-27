import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import EnquiryForm from "../../widgets/EnquiryForm";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import "./communityServices.css";
import {
  getHealthCareCommunityServiceData,
  HealthCareCommunityServiceResponseData,
} from "../../services/healthCareCommunityService";
import { getFullImageUrl } from "../../services/actualPath";

const CommunityServices: React.FC = () => {
  const [healthCareCommunityServiceData, sethealthCareCommunityServiceData] =
    useState<HealthCareCommunityServiceResponseData | null>(null);
  const fetchNoticeBoardResonsePage = () => {
    getHealthCareCommunityServiceData()
      .then((response) => {
        const count = response.data;
        sethealthCareCommunityServiceData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchNoticeBoardResonsePage();
  }, []);

  return (
    <>
      <Banner
        bannerText={healthCareCommunityServiceData?.banner_title}
        bannerImageClassName="rgc-institution-banner"
        bannerLink={healthCareCommunityServiceData?.banner_campus_life_text}
        breadCrumbsList={[
          {
            label: healthCareCommunityServiceData?.banner_campus_life_text || "",
            to: healthCareCommunityServiceData?.banner_campus_life_link || ""
          },
          {
            label: healthCareCommunityServiceData?.banner_healthcare_text || "",
            to: healthCareCommunityServiceData?.banner_healthcare_link || ""
          }
        ]}
        bannerImageUrl={
          getFullImageUrl(healthCareCommunityServiceData?.banner_image.formats.large.url) || ""
        }
      />
      <div className="pt-3 pb-3 community-services-bg">
        <div className="container mt-5 d-flex mb-4">
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-md-4 mb-5 align-self-center ps-0 pe-0">
              <div className="col-lg-8 col-sm-12 col-md-8">
                <h5 className="fw-bold">
                  {healthCareCommunityServiceData?.Community_Services.title}
                </h5>
                <h3 className="fw-bold">
                  {healthCareCommunityServiceData?.Community_Services.subtitle}
                </h3>
                <p className="p-color p-font-size-14">
                  {
                    healthCareCommunityServiceData?.Community_Services
                      .Description
                  }
                </p>
              </div>
              <div className="col-lg-4"></div>
            </div>
            <div className="col-lg-5 col-sm-12 col-md-8">
              <img
                src={
                  getFullImageUrl(healthCareCommunityServiceData?.Community_Services.image
                    .formats.large.url) || ""
                }
                className="img-fluid w-100"
                alt="college-image"
              />
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

export default CommunityServices;
