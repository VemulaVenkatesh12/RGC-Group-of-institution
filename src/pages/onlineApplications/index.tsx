import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import EnquiryForm from "../../widgets/EnquiryForm";
import "../onlineApplications/onlineApplications.css";
import TitleAndMeta from "../../widgets/TitleAndMeta";
import {
  getOnlineApplicationData,
  OnlineApplicationFormResponseData,
} from "../../services/onlineApplicationForm";
import { getFullImageUrl } from "../../services/actualPath";

const OnlineApplications: React.FC = () => {
  const [onlineApplicationData, setOnlineApplicationData] =
    useState<OnlineApplicationFormResponseData | null>(null);
  const fetchOnlineApplicationData = () => {
    getOnlineApplicationData()
      .then((response) => {
        const count = response.data;
        setOnlineApplicationData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchOnlineApplicationData();
  }, []);

  return (
    <>
      <Banner
        bannerText={onlineApplicationData?.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label: onlineApplicationData?.banner_Course_Details_text || "",
            to: onlineApplicationData?.banner_Course_Details_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(
            onlineApplicationData?.banner_image.formats.large.url
          ) || ""
        }
      />

      <TitleAndMeta
        primaryHeader={onlineApplicationData?.Online_Applications.title}
        description={
          onlineApplicationData?.Online_Applications.Description || ""
        }
        visitLink={onlineApplicationData?.Online_Applications.link}
        visitText={onlineApplicationData?.Online_Applications.link_text}
      />
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

export default OnlineApplications;
