import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import ContactBanner from "../../widgets/ContactBanner";
import "../informationalPack/informationalPack.css";
import IFrameBanner from "../../widgets/iFrameBanner";
import TitleAndMeta from "../../widgets/TitleAndMeta";
import {
  getInformationalPackData,
  InformationalPackResponseData,
} from "../../services/informationalPack";
import { getFullImageUrl } from "../../services/actualPath";

const InformationalPack: React.FC = () => {
  const [informationalPackData, setinformationalPackData] =
    useState<InformationalPackResponseData | null>(null);
  const fetchInformationalPackResponseData = () => {
    getInformationalPackData()
      .then((response) => {
        const count = response.data;
        setinformationalPackData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchInformationalPackResponseData();
  }, []);
  return (
    <>
      <Banner
        bannerText={informationalPackData?.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label: informationalPackData?.banner_Course_Details_text || "",
            to: informationalPackData?.banner_Course_Details_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(
            informationalPackData?.banner_image.formats.large.url
          ) || ""
        }
      />

      <TitleAndMeta
        primaryHeader={informationalPackData?.informational_pack.title}
        secondaryHeader={informationalPackData?.informational_pack.subtitle}
        description={
          informationalPackData?.informational_pack.Description || "undefined"
        }
      />
      <div className="container mb-5 ">
        <div>
          <p className="fw-bold deep-red">
            {
              informationalPackData?.informational_pack
                .For_Indian_Students_title
            }
          </p>
          <p className="pdf-link">
            {
              informationalPackData?.informational_pack
                .For_Indian_Students_description
            }
          </p>
          <p className="fw-bold mt-2 pdf-link">
            {
              informationalPackData?.informational_pack
                .For_Indian_Students_contact_text
            }{" "}
            {
              informationalPackData?.informational_pack
                .For_Indian_Students_ph_no1
            }{" "}
            ,{" "}
            {
              informationalPackData?.informational_pack
                .For_Indian_Students_ph_no2
            }
          </p>
        </div>
        <div className="mt-1">
          <p className="fw-bold deep-red">
            {informationalPackData?.informational_pack.Foreign_Students_text}
          </p>
          <p className="pdf-link">
            {
              informationalPackData?.informational_pack
                .Foreign_Students_description
            }
          </p>
          <p className="fw-bold pdf-link">
            {
              informationalPackData?.informational_pack
                .Foreign_Students_contact_text
            }{" "}
            {informationalPackData?.informational_pack.Foreign_Students_ph_no}
          </p>
        </div>
        <div className="mt-1">
          <p className="fw-bold deep-red">
            {informationalPackData?.informational_pack.For_Parents_text}
          </p>
          <p className="pdf-link">
            {informationalPackData?.informational_pack.For_Parents_description}
          </p>
        </div>
      </div>
      <div>
        <IFrameBanner requiredFooterBorder={true} />
      </div>
      <div>
        <ContactBanner />
      </div>
    </>
  );
};

export default InformationalPack;
