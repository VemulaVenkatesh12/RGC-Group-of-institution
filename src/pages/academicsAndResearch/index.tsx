import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import admissionImage1 from "../../assets/admission-img.webp";
import admissionImage2 from "../../assets/admission-img-2.webp";
import visionimg from "../../assets/value-vision.webp";
import ValueVision from "../../widgets/ValueVision";
import "./academicsAndResearch.css";
import EnquiryForm from "../../widgets/EnquiryForm";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import TitleAndMeta from "../../widgets/TitleAndMeta";
import InfoImageSection from "../../widgets/InfoImageSection";
import CustomButton from "../../widgets/CustomButton";
import {
  AcedmicAndReasearchResponseData,
  getAcedmicAndReasearchData,
  Block,
} from "../../services/acedmicReasearch";
import { getFullImageUrl } from "../../services/actualPath";

const AcademicsAndResearch: React.FC = () => {
  const [acedmicAndReasearchData, setacedmicAndReasearchData] =
    useState<AcedmicAndReasearchResponseData | null>(null);

  const fetchAcedmicAndReasearchDataData = () => {
    getAcedmicAndReasearchData()
      .then((response) => {
        const data = response.data;
        setacedmicAndReasearchData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAcedmicAndReasearchDataData();
  }, []);

  // Helper function to get block by component type
  const getBlockByComponent = (componentType: string): Block | undefined => {
    return acedmicAndReasearchData?.block?.find(
      (block) => block.__component === componentType
    );
  };

  // Get specific blocks
  const programsCoursesBlock = getBlockByComponent(
    "acadamics-research.programs-and-courses"
  );
  const admissionFormBlock = getBlockByComponent(
    "acadamics-research.admission-application-form"
  );
  const scholarshipsBlock = getBlockByComponent(
    "acadamics-research.scholarships"
  );
  const beyondEducationBlock = getBlockByComponent(
    "acadamics-research.beyond-educations"
  );

  return (
    <>
      <Banner
        bannerText={acedmicAndReasearchData?.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label:
              acedmicAndReasearchData?.banner_Academics_Admissions_text || "",
            to: acedmicAndReasearchData?.banner_Academics_Admissions_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(
            acedmicAndReasearchData?.banner_image.formats.large.url
          ) || ""
        }
      />

      {/* Programs & Courses Section */}
      {programsCoursesBlock && (
        <TitleAndMeta
          primaryHeader={programsCoursesBlock.title}
          secondaryHeader={programsCoursesBlock.subtitle || ""}
          description={programsCoursesBlock.Description}
        />
      )}

      {/* Values & Vision Section */}
      <div className="mt-5">
        <ValueVision
          title="Values & Vision"
          smallText="Academic"
          image={visionimg}
          description1={programsCoursesBlock?.Description.split("\n")[0] || ""}
          description2={programsCoursesBlock?.Description.split("\n")[1] || ""}
          description3="RGC Group believes in quality education for the better future of the society with advanced level of knowledge among the people and healthy living environment and development of technologies in all the fields. Through Quality education in any field of learning, we can build confidence and expertise our skills and capacity for the better future of the world."
        />
      </div>

      {/* Admission Process Section */}
      {acedmicAndReasearchData?.admission_process && (
        <div className="admission-process-bg pt-3 pb-3">
          <div className="container position-relative py-4">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h5 className="fw-bold">
                  {acedmicAndReasearchData.admission_process.title}
                </h5>
                <h3 className="fw-bold">
                  {acedmicAndReasearchData.admission_process.subtitle}
                </h3>
                <p className="p-font-size-14">
                  {acedmicAndReasearchData.admission_process.Description}
                </p>
                <div className="mt-4">
                  <img
                    src={admissionImage1}
                    alt="admission-image"
                    className="img-fluid admission-img-1"
                  />
                  <img
                    src={admissionImage2}
                    alt="admission-image"
                    className="img-fluid admission-img-2 position-absolute"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 align-self-center ps-5">
                {acedmicAndReasearchData.admission_process.admission_process_details?.map(
                  (detail, index) => (
                    <div
                      key={detail.id}
                      className={`card p-4 rounded-0 bg-white border-1 border-dark mb-4 ${
                        index === 0
                          ? "admission-card"
                          : index === 1
                          ? "acceptance-card"
                          : "course-register-card"
                      }`}
                    >
                      <div className="d-flex gap-4 align-items-center">
                        <div>
                          <h3 className="fw-bold">{detail.title}</h3>
                          <p className="p-font-size-14">{detail.Description}</p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Admission Application Form Section */}
      {admissionFormBlock && (
        <div>
          <div className="container mt-5 mb-5 admission-process-bg">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                {admissionFormBlock.image && (
                  <img
                    src={getFullImageUrl(admissionFormBlock.image.url) || ""}
                    alt={admissionFormBlock.image.alternativeText}
                    className="img-fluid"
                  />
                )}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="d-flex flex-column">
                    <h3 className="fw-bold">{admissionFormBlock.title}</h3>
                    <p className="p-font-size-14">
                      {admissionFormBlock.Description}
                    </p>

                    <div className="row">
                      <div className="col-lg-6 col-sm-12 col-md-12 px-0 ps-lg-0 mt-3">
                        <input
                          type="text"
                          className="form-control p-2 rounded-0 reach-us-input"
                          placeholder={admissionFormBlock.Full_Name}
                        />
                      </div>
                      <div className="col-lg-6 col-sm-12 col-md-12 px-0 pe-lg-0 mt-3">
                        <input
                          type="text"
                          className="form-control p-2 rounded-0 reach-us-input"
                          placeholder={admissionFormBlock.Contact_No}
                        />
                      </div>
                    </div>

                    <div className="mt-3">
                      <input
                        type="email"
                        className="form-control p-2 rounded-0 reach-us-input"
                        placeholder={admissionFormBlock.Email}
                      />
                    </div>

                    <div className="mt-3">
                      <select
                        className="form-select rounded-0 reach-us-input r-course-option"
                        aria-label="Default select example"
                      >
                        <option selected>
                          {admissionFormBlock.Select_Course || "Select Course"}
                        </option>
                        {admissionFormBlock.one && (
                          <option value="1">{admissionFormBlock.one}</option>
                        )}
                        {admissionFormBlock.two && (
                          <option value="2">{admissionFormBlock.two}</option>
                        )}
                        {admissionFormBlock.three && (
                          <option value="3">{admissionFormBlock.three}</option>
                        )}
                      </select>
                    </div>

                    <div className="mt-3">
                      <textarea
                        rows={3}
                        className="form-control rounded-0 reach-us-textarea"
                        placeholder={admissionFormBlock.Queries}
                      />
                    </div>

                    <CustomButton
                      path={admissionFormBlock.Send_Application_link || ""}
                      btnClassName="btn mt-4 reach-us-btn w-50"
                      label={admissionFormBlock.Send_Application_text}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scholarships Section */}
      {scholarshipsBlock && (
        <div className="scholarship-card-bg pt-2 pb-4">
          <InfoImageSection
            primaryHeader={scholarshipsBlock.title}
            secondaryHeader={scholarshipsBlock.subtitle || ""}
            description={scholarshipsBlock.Description}
            imageSrc={getFullImageUrl(scholarshipsBlock.image?.url) || ""}
            imageAlt={scholarshipsBlock.image?.alternativeText || ""}
            imagePosition="right"
            navigateTo={scholarshipsBlock.Know_More_link}
            btnLabel={scholarshipsBlock.Know_More_text}
          />
        </div>
      )}

      {/* Placements Section */}
      {acedmicAndReasearchData?.placements && (
        <div className="bg-white pt-2 pb-4">
          <div className="container mt-5 d-flex pb-2 p-0">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h3 className="fw-bold">
                  {acedmicAndReasearchData.placements.title}
                </h3>
                <p className="p-font-size-14">
                  {acedmicAndReasearchData.placements.Description}
                </p>
              </div>

              <div className="row mt-5 gap-5 mb-5">
                {acedmicAndReasearchData.placements.placed_students?.map(
                  (student) => (
                    <div
                      key={student.id}
                      className="col-lg-2 col-md-2 col-sm-12"
                    >
                      <div className="card placement-card rounded-bottom-0">
                        <img
                          src={getFullImageUrl(student.image?.url) || ""}
                          alt={student.image?.alternativeText}
                          className="img-fluid"
                        />
                        <div className="card-body placement-card-body p-2 rounded-bottom-1 gap-2">
                          <h5 className="fw-bold text-white mb-0">
                            {student.name}
                          </h5>
                          <p className="text-white p-0 p-font-size-12">
                            {student.Description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="text-center">
            <CustomButton
              path={acedmicAndReasearchData.placements.view_more_link || ""}
              btnClassName="btn btn-md placement-btn text-white"
              label={acedmicAndReasearchData.placements.VIEW_MORE_text}
            />
          </div>
        </div>
      )}

      {/* Beyond Education Section */}
      {beyondEducationBlock && (
        <div className="bg-white pt-2 pb-4">
          <InfoImageSection
            primaryHeader={beyondEducationBlock.title}
            secondaryHeader={beyondEducationBlock.subtitle || ""}
            description={beyondEducationBlock.Description}
            imageSrc={getFullImageUrl(beyondEducationBlock.image?.url) || ""}
            imageAlt={beyondEducationBlock.image?.alternativeText || ""}
            imagePosition="left"
          />
        </div>
      )}

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

export default AcademicsAndResearch;
