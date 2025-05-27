import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";

import "../medicalCollege/medicalCollege.css";
import PatientConsultBanner from "../../widgets/PatientConsultBanner";
import EnquiryForm from "../../widgets/EnquiryForm";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import InfoImageSection from "../../widgets/InfoImageSection";
import {
  getMedicalCollage,
  MedicalCollageResponseData,
  Block,
  Department,
} from "../../services/medicalCollage";
import { getFullImageUrl } from "../../services/actualPath";
const MedicalCollege: React.FC = () => {
  const [medicalCollageData, setMedicalCollageData] =
    useState<MedicalCollageResponseData | null>(null);
  const [blockData, setBlockData] = useState<Block[] | null>(null);
  const [departmentData, setDepartmentData] = useState<Department[] | null>(
    null
  );

  const fetchMedicalCollageData = () => {
    getMedicalCollage()
      .then((response) => {
        const data = response.data;
        setMedicalCollageData(data);
        setBlockData(data.block);

        const departmentBlock = data.block.find((block: Block) =>
          Array.isArray(block.departments)
        );
        setDepartmentData(departmentBlock?.departments || []);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchMedicalCollageData();
  }, [departmentData]);

  // Get the timings block (third block in the array)
  const timingsBlock = blockData?.[2];
  const chunkArray = (array: any[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Get facilities data and chunk into rows of 5
  const facilities =
    medicalCollageData?.facilities_avaliable?.[0]?.Facilities || [];
  const facilitiesRows = chunkArray(facilities, 5);

  return (
    <>
      <Banner
        bannerText={medicalCollageData?.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label: medicalCollageData?.banner_healthcare_text || "",
            to: medicalCollageData?.banner_healthcare_link || "",
          },
          {
            label: medicalCollageData?.banner_healthcare_text || "",
            to: medicalCollageData?.banner_healthcare_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(medicalCollageData?.banner_image.formats.large.url) ||
          ""
        }
      />
      <div className="pt-3 pb-4 medical-college-bg">
        <InfoImageSection
          primaryHeader={blockData?.[0].title}
          secondaryHeader={blockData?.[0].subtitle}
          description={blockData?.[0].Description || "undefined"}
          imageSrc={
            getFullImageUrl(blockData?.[0].image.formats.large.url) || ""
          }
          imageAlt="medical-hospital"
          imagePosition="right"
        />
      </div>

      <div className="container mt-4 p-3">
        <div className="row">
          <div className=" col-md-6 col-lg-6  col-sm-12  ps-0">
            <h4 className="fw-bold mb-4">
              {blockData?.[1].title || "undefined"}
            </h4>
            <img
              src={
                getFullImageUrl(blockData?.[1].image.formats.large.url) || ""
              }
              alt="medical-hospital"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <ul className="list-unstyled p-5">
              {departmentData?.map((department, index) => (
                <li key={index} className={index === 0 ? "" : "mt-4"}>
                  <h5 className="medical-dept">{department.name}</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-2 pb-3 medical-college-bg">
        <div className="container mt-5 p-3 mb-5">
          <h3 className="fw-bold mb-4">
            {medicalCollageData?.facilities_avaliable?.[0]?.title}
          </h3>

          {/* Dynamic facilities rendering */}
          {facilitiesRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`d-md-flex gap-5 ${rowIndex > 0 ? "mt-5" : ""}`}
            >
              {row.map((facility) => (
                <div
                  key={facility.id}
                  className={rowIndex === 0 ? "mb-sm-4 mb-md-0" : ""}
                >
                  <img
                    src={
                      getFullImageUrl(facility.image?.formats?.medium?.url) ||
                      ""
                    }
                    alt={facility.name || `facilities-image-${facility.id}`}
                    className="img-fluid"
                  />
                  <h5 className="facilities">{facility.name}</h5>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {timingsBlock && (
        <PatientConsultBanner
          title={timingsBlock.title}
          subtitle={timingsBlock.subtitle}
          weekDays={timingsBlock.week_days}
          weekDaysTimings={timingsBlock.week_days_timings}
          weekEnds={timingsBlock.week_ends}
          weekEndTimings={timingsBlock.week_end_timings}
          title1={timingsBlock.title1}
          contactNumbers={timingsBlock.contact_numbers}
          image={getFullImageUrl(timingsBlock.image.formats.large.url) || ""}
        />
      )}
      <div className="mt-5">
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

export default MedicalCollege;
