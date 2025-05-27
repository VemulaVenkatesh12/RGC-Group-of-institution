import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import ContactBanner from "../../widgets/ContactBanner";
import IFrameBanner from "../../widgets/iFrameBanner";
import { getResearchData, ResearchResData } from "../../services/researchGrant";
import { getFullImageUrl } from "../../services/actualPath";

const ResearchAndGrants: React.FC = () => {
  const [researchData, setResearchData] = useState<ResearchResData | null>(
    null
  );

  const fetchResearchData = () => {
    getResearchData()
      .then((response) => {
        const data = response.data;
        setResearchData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchResearchData();
  }, []);

  return (
    <>
      <Banner
        bannerText={researchData?.banner_title}
        bannerImageClassName="rgc-sanjay-gandhi-institution-banner"
        breadCrumbsList={[
          {
            label: researchData?.banner_academics_Admission_text || "",
            to: researchData?.banner_academics_Admission_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(researchData?.banner_image.formats.large.url) || ""
        }
      />

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-11">
            <p className="fw-bold mt-3 p-font-size-16 text-justify lh-lg">
              {researchData?.text}
            </p>

            <div className="mt-4">
              {/* First set of research points */}
              <ul className="ps-4">
                {[researchData?.point_1, researchData?.point_2]
                  .filter(Boolean)
                  .map((point, index) => (
                    <li key={`first-set-${index}`} className="mb-3">
                      <p className="pdf-link p-font-size-16 mb-0 text-justify lh-lg">
                        {point}
                      </p>
                    </li>
                  ))}
              </ul>

              {/* Additional text content */}
              {researchData?.text_1 && (
                <div className="my-4 p-3 bg-light rounded">
                  <p className="pdf-link p-font-size-16 mb-0 text-justify lh-lg fw-medium">
                    {researchData.text_1}
                  </p>
                </div>
              )}

              {/* Second set of research points */}
              <ul className="ps-4">
                {[researchData?.point_3].filter(Boolean).map((point, index) => (
                  <li key={`second-set-${index}`} className="mb-3">
                    <p className="pdf-link p-font-size-16 mb-0 text-justify lh-lg">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Final point as paragraph */}
              {researchData?.point_4 && (
                <div className="mt-4 p-3 bg-light  rounded">
                  <h6 className="fw-bold mb-2">Research Topic:</h6>
                  <p className="pdf-link p-font-size-16 mb-0 text-justify lh-lg">
                    {researchData.point_4}
                  </p>
                </div>
              )}
            </div>
          </div>
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

export default ResearchAndGrants;
