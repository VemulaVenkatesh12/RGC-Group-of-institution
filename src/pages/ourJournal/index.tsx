import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import "./ourJournal.css";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import {
  getOurJournal,
  OurJournalResponseData,
} from "../../services/ourJounal";
import { getFullImageUrl } from "../../services/actualPath";
const OurJournal: React.FC = () => {
  const [ourJournalData, setourJournalData] =
    useState<OurJournalResponseData | null>(null);
  const fetchOurJournalData = () => {
    getOurJournal()
      .then((response) => {
        const count = response.data;
        setourJournalData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchOurJournalData();
  }, []);
  return (
    <>
      <Banner
        bannerText={ourJournalData?.banner_title}
        bannerImageClassName="rgc-sanjay-gandhi-institution-banner"
        breadCrumbsList={[
          {
            label: ourJournalData?.banner_Academics_Admission_text || "",
            to: ourJournalData?.banner_Academics_Admission_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(ourJournalData?.banner_image.formats.large.url) || ""
        }
      />
      <div className="main-content"></div>
      <div>
        <IFrameBanner requiredFooterBorder={true} />
      </div>
      <div>
        <ContactBanner />
      </div>
    </>
  );
};

export default OurJournal;
