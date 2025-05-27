import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import {
  getmandatoryDisclosuresData,
  MandatoryDisclosuresResponseData,
} from "../../services/mandatoryDisclosures";
import { getFullImageUrl } from "../../services/actualPath";

const MandatoryDisclosures: React.FC = () => {
  const [mandatoryDisclosuresData, setmandatoryDisclosuresData] =
    useState<MandatoryDisclosuresResponseData | null>(null);

  const fetchmandatoryDisclosuresData = () => {
    getmandatoryDisclosuresData()
      .then((response) => {
        const count = response.data;
        setmandatoryDisclosuresData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchmandatoryDisclosuresData();
  }, []);

  // Function to chunk array into groups of 3 for rows
  const chunkArray = (array: any[], size: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  // Split PDFs into rows of 3
  const pdfRows = chunkArray(mandatoryDisclosuresData?.pdfs || [], 3);

  return (
    <>
      <Banner
        bannerText={mandatoryDisclosuresData?.banner_title}
        bannerImageClassName="rgc-sanjay-gandhi-institution-banner"
        breadCrumbsList={[
          {
            label: mandatoryDisclosuresData?.banner_about_us_text || "",
            to: mandatoryDisclosuresData?.banner_about_us_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(
            mandatoryDisclosuresData?.images?.banner_image?.formats?.large?.url
          ) || ""
        }
      />
      <div>
        <div className="container p-0 py-5">
          {pdfRows.map((row, rowIndex) => (
            <div key={rowIndex} className={`row ${rowIndex > 0 ? "mt-5" : ""}`}>
              {row.map((pdf) => (
                <div
                  key={pdf.id}
                  className="col-lg-4 col-md-4 col-sm-12 mb-sm-4"
                >
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src={
                        getFullImageUrl(
                          mandatoryDisclosuresData?.images?.pdf_image?.url
                        ) || ""
                      }
                      alt="pdf-logo"
                      className="pdf-icon"
                    />
                    <a
                      href={getFullImageUrl(pdf.pdf_file?.url) || "#"}
                      className="text-decoration-none pdf-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pdf.text}
                    </a>
                  </div>
                </div>
              ))}
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

export default MandatoryDisclosures;
