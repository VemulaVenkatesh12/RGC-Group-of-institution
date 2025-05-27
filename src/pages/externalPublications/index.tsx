import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import {
  ExternalPublicationResponseData,
  getExternalPublicationData,
} from "../../services/externalPublications";
import { getFullImageUrl } from "../../services/actualPath";

const ExternalPublications: React.FC = () => {
  const [externalPublicationData, setExternalPublicationData] =
    useState<ExternalPublicationResponseData | null>(null);

  const fetchExternalPublicationData = () => {
    getExternalPublicationData()
      .then((response) => {
        const data = response.data;
        setExternalPublicationData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchExternalPublicationData();
  }, []);

 
  return (
    <>
      <Banner
        bannerText={
          externalPublicationData?.banner_title || "External Publications"
        }
        bannerImageClassName="rgc-sanjay-gandhi-institution-banner"
        breadCrumbsList={[
          {
            label:
              externalPublicationData?.banner_Academics_Admission_text || "",
            to: externalPublicationData?.banner_Academics_Admission_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(
            externalPublicationData?.banner_image.formats.large.url
          ) || ""
        }
      />
      <div className="container my-5">
        {externalPublicationData &&
        externalPublicationData.publications &&
        externalPublicationData.publications.length > 0 ? (
          externalPublicationData.publications.map((publication, idx) => (
            <a
              href={getFullImageUrl(publication.pdf_file.url) || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex gap-2 mt-5 align-items-center text-decoration-none"
              key={`${publication.id}-${idx}`}
              style={{ cursor: "pointer" }}
            >
              <img
                src={getFullImageUrl(publication.pdf_image.url) || ""}
                alt="pdf-logo"
                className="pdf-icon img-fluid"
              />
              <p className="pdf-link p-font-size-16 mb-0">{publication.name}</p>
            </a>
          ))
        ) : (
          <div className="text-center py-5">
            <p className="text-muted">
              No publications available at the moment.
            </p>
          </div>
        )}
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

export default ExternalPublications;