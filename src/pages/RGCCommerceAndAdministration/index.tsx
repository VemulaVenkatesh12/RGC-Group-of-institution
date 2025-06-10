import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import ContactBanner from "../../widgets/ContactBanner";
import EnquiryForm from "../../widgets/EnquiryForm";
import ValueVision from "../../widgets/ValueVision";
import { Typography } from "@mui/material";
import HomeAutoSlider from "../../widgets/HomeAutoSlider";
import IFrameBanner from "../../widgets/iFrameBanner";
import OurCourseTabs from "../../widgets/OurCourseTabs";
import "./RGCCommerceAndAdministration.css";
import ContentSection from "../../widgets/ContentSection";
import CustomButton from "../../widgets/CustomButton";
import {
  getVisvesvarayaInstituteData,
  VisvesvarayaInstituteResponseData,
} from "../../services/Sir M. Visvesvaraya Institute of Commerce & Administration";
import { VisionMissionData } from "../../services/visionMision";
import { NoticeBoardData } from "../../services/commonNoticeBoard";
import {
  fetchNoticeBoardData,
  fetchVisionMissionData,
} from "../../utils/utilityFunctionServices";
import { getFullImageUrl } from "../../services/actualPath";

const RGCCommerceAndAdministration: React.FC = () => {
  const [VisvesvarayaInstituteData, setVisvesvarayaInstituteData] =
    useState<VisvesvarayaInstituteResponseData | null>(null);
  const [visionData, setVisionData] = useState<VisionMissionData | null>(null);
  const [infoData, setInfoData] = useState<NoticeBoardData | null>(null);

  const fetchVisvesvarayaInstituteDataData = () => {
    getVisvesvarayaInstituteData()
      .then((response) => {
        const data = response.data;
        setVisvesvarayaInstituteData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchVisvesvarayaInstituteDataData();
    fetchVisionMissionData(setVisionData);
    fetchNoticeBoardData(setInfoData);
  }, []);

  // Get About College block data
  const aboutCollegeBlock = VisvesvarayaInstituteData?.block?.find(
    (block) => block.__component === "visvevaraya-institute.about-the-college"
  );

  // Get Affiliated University block data
  const affiliatedBlock = VisvesvarayaInstituteData?.block?.find(
    (block) =>
      block.__component ===
      "visvevaraya-institute.affiliated-to-bengaluru-central-university"
  );

  // Transform course data from API to match existing structure
  const courseData =
    VisvesvarayaInstituteData?.our_courses?.course_type?.map((courseType) => ({
      category: courseType.title,
      courses:
        courseType.departments?.map((dept) => ({
          text: dept.course_name,
          greenText: dept.UG_PG,
          description: dept.course_details,
          description2: dept.ourse_duration,
          courseImage: getFullImageUrl(dept.image?.url) || "",
          needApply: true,
          needApplyLink: dept.apply_now_link,
          needLink: false,
          needViewDetails: false,
          needViewDetailsLink: dept.view_details_link,
        })) || [],
    })) || [];

  // Card data for government recognition
  const cardData = {
    logo: getFullImageUrl(affiliatedBlock?.logo?.url) || "",
    description: affiliatedBlock?.logo_description,
    backgroundColor: "var(--color-light-pink-beige)",
  };

  if (!VisvesvarayaInstituteData) {
    return "Failed to load data. Please try again later.";
  }

  return (
    <>
      <Banner
        bannerText={VisvesvarayaInstituteData.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label:
              VisvesvarayaInstituteData?.banner_our_Institutions_text || "",
            to: VisvesvarayaInstituteData?.banner_Our_Institutions_link || "",
          },
          {
            label: VisvesvarayaInstituteData?.banner_dental_college_text || "",
            to: VisvesvarayaInstituteData?.banner_dental_college_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(
            VisvesvarayaInstituteData.banner_image.formats.large.url
          ) || ""
        }
      />

      <div className="row mt-5">
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
          <div>
            <img
              src={getFullImageUrl(aboutCollegeBlock?.image?.url) || ""}
              className="img-fluid"
              alt={aboutCollegeBlock?.image?.alternativeText}
            />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-start text-start p-3 p-md-5">
            <Typography
              sx={{
                color: "var(--color-pure-black)",
                fontSize: "var(--font-size-48)",
                fontWeight: "var(--font-weight-600)",
              }}
            >
              {aboutCollegeBlock?.title || "About the College"}
            </Typography>
            <p className="light-gray-p p-font-size-14">
              {aboutCollegeBlock?.Description || ""}
            </p>
            <CustomButton
              path={aboutCollegeBlock?.visit_link || ""}
              btnClassName="btn ps-5 pe-5 rounded-1 mt-3 text-white red-btn text-decoration-none"
              label={aboutCollegeBlock?.visit_text || "VISIT"}
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <Typography
          sx={{
            color: "var(--color-deep-red)",
            fontSize: "var(--font-size-18)",
            fontWeight: "var(--font-weight-600)",
          }}
        >
          {infoData?.notice_board.title}
        </Typography>
        <Typography
          sx={{
            color: "var(--color-light-black)",
            fontSize: "var(--font-size-48)",
            fontWeight: "var(--font-weight-600)",
          }}
        >
          {infoData?.notice_board.subtitle}
        </Typography>
      </div>

      <div
        style={{ backgroundColor: "var( --color-neutral-gray)" }}
        className="mb-5"
      >
        <HomeAutoSlider list={infoData?.notice_board.list || []} />
      </div>

      <div className="mb-5">
        <OurCourseTabs courseCategories={courseData} bgClass={false} />
      </div>

      <div className="pt-3 pb-3 our-history-bg">
        <div className="container mt-5 d-flex mb-4">
          <div className="row ps-0">
            <div className="col-lg-7 col-sm-12 col-md-7 align-self-center">
              <div className="col-lg-8 col-sm-12 col-md-7">
                <ContentSection
                  primaryHeader={affiliatedBlock?.title || "RGC Group"}
                  secondaryHeader={
                    affiliatedBlock?.subtitle ||
                    "Affiliated to Bengaluru Central University"
                  }
                  description={affiliatedBlock?.Description || ""}
                />
              </div>
              <div className="col-lg-3"></div>
            </div>
            <div className="col-lg-5 col-sm-12 col-md-5 position-relative">
              <img
                src={getFullImageUrl(affiliatedBlock?.image?.url) || ""}
                className="img-fluid"
                alt={
                  affiliatedBlock?.image?.alternativeText || "affiliation-image"
                }
              />
              <div
                className="card position-absolute top-50 translate-middle-y rounded-0 d-flex p-4 card-img custom-card"
                style={{ backgroundColor: cardData.backgroundColor }}
              >
                <div className="row">
                  <div className="col-4 col-sm-4 col-lg-4">
                    <img
                      src={cardData.logo}
                      alt="institution-logo"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-8 mt-4">
                    <div className="d-inline-block">
                      <p className="p-font-size-14">{cardData.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <ValueVision
          title={visionData?.values_vision.subtitle}
          smallText={visionData?.values_vision.title}
          image={getFullImageUrl(visionData?.values_vision.image.url) || ""}
          description1={visionData?.values_vision?.content ?? ""}
        />

        <EnquiryForm />

        <IFrameBanner requiredFooterBorder={false} />
        <ContactBanner />
      </div>
    </>
  );
};

export default RGCCommerceAndAdministration;
