import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import ContactBanner from "../../widgets/ContactBanner";
import InfoCard from "../../widgets/InfoCard";
import IFrameBanner from "../../widgets/iFrameBanner";
import {
  getPublicationData,
  PublicationResponseData,
} from "../../services/publication";
import { getFullImageUrl } from "../../services/actualPath";

const Publications: React.FC = () => {
  const [publicationData, setourpublicationData] =
    useState<PublicationResponseData | null>(null);
  const fetchPublicationData = () => {
    getPublicationData()
      .then((response) => {
        const count = response.data;
        setourpublicationData(count);
        console.log("setourpublicationData", count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchPublicationData();
  }, []);

  if (!publicationData) {
    return;
  }

  return (
    <>
      <Banner
        bannerText={publicationData.banner_title}
        bannerImageClassName="rgc-sanjay-gandhi-institution-banner"
        bannerImageUrl={
          getFullImageUrl(publicationData.banner_image?.formats?.large?.url) ||
          ""
        }
        breadCrumbsList={[
          {
            label: publicationData?.banner_Academics_Admission_text || "",
            to: publicationData?.banner_Academics_Admission_link || "",
          },
        ]}
      />
      <div className="container mt-5 p-0">
        <div className="row">
          {publicationData.publication_details?.map((publication, index) => (
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              key={publication.id || index}
            >
              <InfoCard
                text={publication.name || ""}
                courseImage={
                  getFullImageUrl(publication.image?.formats?.large?.url) || ""
                }
                needApply={false}
                needViewDetails={false}
                needLink={true}
                needLinkNavigateTo={publication.view_details_link}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <IFrameBanner requiredFooterBorder={true} />
        <ContactBanner />
      </div>
    </>
  );
};

export default Publications;
