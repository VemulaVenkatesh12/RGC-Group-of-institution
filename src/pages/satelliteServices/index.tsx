import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import EnquiryForm from "../../widgets/EnquiryForm";
import ContactBanner from "../../widgets/ContactBanner";
import "../satelliteServices/satelliteServices.css";
import IFrameBanner from "../../widgets/iFrameBanner";
import {
  getSatelliteData,
  SatelliteResponseData,
} from "../../services/satelliteService";
import { getFullImageUrl } from "../../services/actualPath";

const SatelliteServices: React.FC = () => {
  const [satelliteData, setSatelliteData] =
    useState<SatelliteResponseData | null>(null);
  const fetchSatelliteServicesData = () => {
    getSatelliteData()
      .then((response) => {
        const count = response.data;
        setSatelliteData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchSatelliteServicesData();
  }, []);

  return (
    <>
      <Banner
        bannerText={satelliteData?.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label: satelliteData?.banner_campus_life_text || "",
            to: satelliteData?.banner_campus_life_link || "",
          },
          {
            label: satelliteData?.banner_healthcare_text || "",
            to: satelliteData?.banner_healthcare_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(satelliteData?.banner_image.formats.large.url) || ""
        }
      />
      <div className="pt-3 pb-3 satellite-services-bg">
        <div className="container mt-5 d-flex mb-4">
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-md-4 mb-5 align-self-center ps-0 pe-0">
              <div className="col-lg-9 col-sm-12 col-md-9">
                <h5 className="fw-bold">
                  {satelliteData?.Satellite_Clinics.title}
                </h5>
                <h3 className="fw-bold">
                  {satelliteData?.Satellite_Clinics.subtitle}
                </h3>
                <p className="text-gray p-font-size-14">
                  {satelliteData?.Satellite_Clinics.Description}
                </p>
              </div>
              <div className="col-lg-3"></div>
            </div>
            <div className="col-lg-5 col-sm-12 col-md-8">
              <img
                src={
                  getFullImageUrl(
                    satelliteData?.Satellite_Clinics.image.formats.large.url
                  ) || ""
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

export default SatelliteServices;
