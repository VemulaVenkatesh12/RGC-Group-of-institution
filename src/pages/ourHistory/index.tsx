import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import collegeImg from "../../assets/college-img-2.webp";
import EnquiryForm from "../../widgets/EnquiryForm";
import ContactBanner from "../../widgets/ContactBanner";
import "../ourHistory/ourHistory.css";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContentSection from "../../widgets/ContentSection";
import {
  getOurHistoryData,
  OurHistoryResponseData,
} from "../../services/ourHistory";
import { getFullImageUrl } from "../../services/actualPath";
const OurHistory: React.FC = () => {
  const [ourHistoryData, setourHistoryData] =
    useState<OurHistoryResponseData | null>(null);
  const fetchOurHistoryData = () => {
    getOurHistoryData()
      .then((response) => {
        const count = response.data;
        setourHistoryData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchOurHistoryData();
  }, []);

  const cardData = {
    backgroundColor: " var(--color-light-pink-beige)",
  };

  return (
    <>
      <Banner
        bannerText={ourHistoryData?.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label: ourHistoryData?.banner_Our_History_text || "",
            to: ourHistoryData?.banner_Our_History_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(ourHistoryData?.banner_image.formats.large.url) || ""
        }
      />

      <div className="pt-3 pb-3 our-history-bg">
        <div className="container mt-5 d-flex mb-4">
          <div className="row ps-0">
            <div className="col-lg-7 col-sm-12 col-md-7  align-self-center ">
              <div className="col-lg-8 col-sm-12 col-md-7">
                <ContentSection
                  primaryHeader={ourHistoryData?.our_history.title}
                  secondaryHeader={ourHistoryData?.our_history.subtitle}
                  description={ourHistoryData?.our_history.Description || ""}
                />
              </div>
              <div className="col-lg-3"></div>
            </div>
            <div className="col-lg-5 col-sm-12 col-md-5 position-relative">
              <img src={collegeImg} className="img-fluid" alt="college-image" />
              <div
                className="card position-absolute top-50  translate-middle-y rounded-0 d-flex p-4 card-img  custom-card "
                style={{ backgroundColor: cardData.backgroundColor }}
              >
                <div className="row">
                  <div className="col-lg-4">
                    <img
                      src={
                        getFullImageUrl(
                          ourHistoryData?.our_history.logo.formats.thumbnail.url
                        ) || ""
                      }
                      alt="rgc-logo"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-8 mt-4">
                    <div className="d-inline-block">
                      <h3 className="fw-bold">
                        {ourHistoryData?.our_history.logo_title}
                      </h3>
                      <p className="p-font-size-14">
                        {ourHistoryData?.our_history.logo_subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
export default OurHistory;
