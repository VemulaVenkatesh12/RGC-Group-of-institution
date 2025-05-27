import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import ContactBanner from "../../widgets/ContactBanner";
import EnquiryForm from "../../widgets/EnquiryForm";

import ValueVision from "../../widgets/ValueVision";
import { Typography } from "@mui/material";
import HomeAutoSlider from "../../widgets/HomeAutoSlider";
import InfoCard from "../../widgets/InfoCard";
import IFrameBanner from "../../widgets/iFrameBanner";
import CustomButton from "../../widgets/CustomButton";
import {
  getRGCDentalGroupData,
  RGCDentalGroupResponseData,
} from "../../services/RGCDentalGroup";
import { NoticeBoardData } from "../../services/commonNoticeBoard";
import { VisionMissionData } from "../../services/visionMision";
import {
  fetchNoticeBoardData,
  fetchVisionMissionData,
} from "../../utils/utilityFunctionServices";
import { getFullImageUrl } from "../../services/actualPath";

const RGCDentalGroup: React.FC = () => {
  const [RGCDentalGroupData, setRGCDentalGroupData] =
    useState<RGCDentalGroupResponseData | null>(null);
  const [infoData, setInfoData] = useState<NoticeBoardData | null>(null);
  const [visionData, setVisionData] = useState<VisionMissionData | null>(null);

  const fetchRGCDentalGroupData = () => {
    getRGCDentalGroupData()
      .then((response) => {
        const count = response.data;
        setRGCDentalGroupData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchRGCDentalGroupData();
    fetchNoticeBoardData(setInfoData);
    fetchVisionMissionData(setVisionData);
  }, []);

  if (!RGCDentalGroupData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Banner
        bannerText={RGCDentalGroupData.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label: RGCDentalGroupData?.our_Institutions_text || "",
            to: RGCDentalGroupData?.Our_Institutions_link || "",
          },
          {
            label: RGCDentalGroupData?.dental_college_text || "",
            to: RGCDentalGroupData?.dental_college_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(RGCDentalGroupData.banner_image.formats.large.url) ||
          ""
        }
      />
      <div className="row mt-5">
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
          <div>
            <img
              src={
                getFullImageUrl(
                  RGCDentalGroupData.About_the_Institution.image.url
                ) || ""
              }
              className="img-fluid"
              alt="rgc-dental"
            />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-start text-start p-3 p-md-5 ">
            <Typography
              sx={{
                color: "var(--color-pure-black)",
                fontSize: "var(--font-size-32)",
                fontWeight: "var(--font-weight-600)",
              }}
              variant="h3"
              component="h3"
            >
              {RGCDentalGroupData.About_the_Institution.title}
            </Typography>
            <p className="light-gray-p p-font-size-14 mt-2">
              {RGCDentalGroupData.About_the_Institution.Description}
            </p>
            <CustomButton
              path={RGCDentalGroupData.About_the_Institution.visit_link}
              label={RGCDentalGroupData.About_the_Institution.visit_text}
              btnClassName="btn ps-5 pe-5 rounded-1 mt-3 text-white red-btn text-decoration-underline"
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
          variant="h5"
          component="h5"
        >
          {infoData?.notice_board.title}
        </Typography>
        <Typography
          sx={{
            color: " var(--color-light-black)",
            fontSize: "var(--font-size-48)",
            fontWeight: "var(--font-weight-600)",
          }}
          variant="h2"
          component="h2"
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
      <div className="text-start mt-5 container">
        <Typography
          sx={{
            color: "var(--color-deep-red)",
            fontSize: "var(--font-size-18)",
            fontWeight: "var(--font-weight-600)",
          }}
          variant="h5"
          component="h5"
        >
          {RGCDentalGroupData.our_courses.title}
        </Typography>
        <Typography
          sx={{
            color: " var(--color-light-black)",
            fontSize: "var(--font-size-48)",
            fontWeight: "var(--font-weight-600)",
            mt: 1,
          }}
          variant="h2"
          component="h2"
        >
          {RGCDentalGroupData.our_courses.subtitle}
        </Typography>
        <div className="row mt-3">
          {RGCDentalGroupData.our_courses.courses.map((course) => (
            <div key={course.id} className="col-lg-6 col-md-6 col-sm-12">
              <InfoCard
                text={course.course_name}
                greenText={course.UG_PG}
                description={course.course_details}
                description2={course.course_duration}
                courseImage={
                  getFullImageUrl(course.image.formats.large.url) || ""
                }
                needApply={true}
                needApplyNavigateTo={course.apply_now_link}
                needLink={false}
                needViewDetails={false}
                needLinkNavigateTo={course.View_Details_link}
              />
            </div>
          ))}
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

export default RGCDentalGroup;
