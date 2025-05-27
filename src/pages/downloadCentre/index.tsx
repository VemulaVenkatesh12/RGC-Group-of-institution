import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import { DownloadData, getDownloadCenter } from "../../services/downloadCenter";
import { getFullImageUrl } from "../../services/actualPath";
const DownloadCentre: React.FC = () => {
  const [downloadCenterData, setdownloadCenterData] =
    useState<DownloadData | null>(null);
  const fetchDownloadCenter = () => {
    getDownloadCenter()
      .then((response) => {
        const count = response.data;
        setdownloadCenterData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchDownloadCenter();
  }, []);

  return (
    <>
      <Banner
        bannerText={downloadCenterData?.Download_center.banner_title}
        bannerImageClassName="rgc-sanjay-gandhi-institution-banner"
        bannerImageUrl={getFullImageUrl(
          downloadCenterData?.Download_center.banner_image?.formats.large?.url) || ""
        }
        breadCrumbsList={[
          {
            label:
              downloadCenterData?.Download_center
                .banner_Academics_Admission_text || "",
            to:
              downloadCenterData?.Download_center
                .banner_Academics_Admission_link || "",
          },
        ]}
      />
      <div className="container p-0 py-5">
        <div className="row">
          {[0, 1, 2].map((index) => (
            <div className="col-lg-4 col-md-4 col-sm-12 mb-sm-4" key={index}>
              <div className="d-flex align-items-center mb-2">
                <img
                  src={
                    getFullImageUrl(
                      downloadCenterData?.Download_center?.pdf_image?.url
                    ) || ""
                  }
                  alt="pdf-logo"
                  className="pdf-icon"
                />
                <a
                  href={ getFullImageUrl(downloadCenterData?.pdfs?.[index]?.pdf_file?.url) || ""}
                  className="text-decoration-none pdf-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {downloadCenterData?.pdfs?.[index]?.text ||
                    "No PDF available"}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          {[3, 4, 5].map((index) => (
            <div className="col-lg-4 col-md-4 col-sm-12 mb-sm-4" key={index}>
              <div className="d-flex align-items-center mb-2">
                <img
                  src={
                    getFullImageUrl(
                      downloadCenterData?.Download_center?.pdf_image?.url
                    ) || ""
                  }
                  alt="pdf-logo"
                  className="pdf-icon"
                />
                <a
                  href={
                    getFullImageUrl(
                      downloadCenterData?.pdfs?.[index]?.pdf_file?.url
                    ) || ""
                  }
                  className="text-decoration-none pdf-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {downloadCenterData?.pdfs?.[index]?.text ||
                    "No PDF available"}
                </a>
              </div>
            </div>
          ))}
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
export default DownloadCentre;
