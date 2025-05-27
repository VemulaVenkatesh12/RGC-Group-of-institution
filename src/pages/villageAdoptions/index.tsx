import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import EnquiryForm from "../../widgets/EnquiryForm";
import ContactBanner from "../../widgets/ContactBanner";
import IFrameBanner from "../../widgets/iFrameBanner";
import "./villageAdoptions.css";
import {
  getVillageAdopotionData,
  VillageAdoptionsResponseData,
} from "../../services/healthCarevVllageAdpotion";
import { getFullImageUrl } from "../../services/actualPath";

const VillageAdoptions: React.FC = () => {
  const [villageAdopotionData, setvillageAdopotionData] =
    useState<VillageAdoptionsResponseData | null>(null);
  const fetchVillageAdopotionData = () => {
    getVillageAdopotionData()
      .then((response) => {
        const count = response.data;
        setvillageAdopotionData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchVillageAdopotionData();
  }, []);
  return (
    <>
      <Banner
        bannerText={villageAdopotionData?.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label: villageAdopotionData?.banner_Campus_facilities_text || "",
            to: villageAdopotionData?.banner_Campus_facilities_link || "",
          },
          {
            label: villageAdopotionData?.banner_gallery_text || "",
            to: villageAdopotionData?.banner_gallery_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(
            villageAdopotionData?.banner_image.formats.large.url
          ) || ""
        }
      />
      <div className="pt-3 pb-3 village-adoptions-bg">
        <div className="container mt-5 d-flex mb-4">
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-md-4 mb-5 align-self-center   ps-0 pe-0">
              <div className="col-lg-9 col-sm-12 col-md-9">
                <h5 className="fw-bold">
                  {villageAdopotionData?.Village_Adoptions.title}
                </h5>
                <h3 className="fw-bold">
                  {villageAdopotionData?.Village_Adoptions.subtitle}
                </h3>
                <p className="p-color p-font-size-14">
                  {villageAdopotionData?.Village_Adoptions.Description}
                </p>
              </div>
              <div className="col-lg-3"></div>
            </div>
            <div className="col-lg-5 col-sm-12 col-md-8">
              <img
                src={
                  getFullImageUrl(
                    villageAdopotionData?.Village_Adoptions.image.formats.large
                      .url
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

export default VillageAdoptions;
