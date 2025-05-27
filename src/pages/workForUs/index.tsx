import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import EnquiryForm from "../../widgets/EnquiryForm";
import ContactBanner from "../../widgets/ContactBanner";
import IFrameBanner from "../../widgets/iFrameBanner";
import TitleAndMeta from "../../widgets/TitleAndMeta";
import {
  getWorkForUSResponseData,
  WorkForUSResponseData,
} from "../../services/workForUs";
import { getFullImageUrl } from "../../services/actualPath";
const WorkForUs: React.FC = () => {
  const [WorkForData, setWorkForData] = useState<WorkForUSResponseData | null>(
    null
  );

  const fetchWorkForData = () => {
    getWorkForUSResponseData()
      .then((response) => {
        const count = response.data;
        setWorkForData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchWorkForData();
  }, []);

  return (
    <>
      <Banner
        bannerText={WorkForData?.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label: WorkForData?.banner_Course_Details_text || "",
            to: WorkForData?.banner_Course_Details_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(WorkForData?.banner_image.formats.large.url) || ""
        }
      />

      <TitleAndMeta
        primaryHeader={WorkForData?.work_for_us.title}
        secondaryHeader={WorkForData?.work_for_us.subtitle}
        description={WorkForData?.work_for_us.Description || ""}
      />

      <div className="container mt-5">
        <img
          className="img-fluid"
          src={
            getFullImageUrl(
              WorkForData?.work_for_us.image.formats.thumbnail.url
            ) || ""
          }
          alt="banner-image"
        />
      </div>
      <div className="mt-5">
        <EnquiryForm />
        <IFrameBanner requiredFooterBorder={false} />
        <ContactBanner />
      </div>
    </>
  );
};

export default WorkForUs;
