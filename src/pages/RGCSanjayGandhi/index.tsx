import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import ContactBanner from "../../widgets/ContactBanner";
import EnquiryForm from "../../widgets/EnquiryForm";
import ValueVision from "../../widgets/ValueVision";
import { Typography } from "@mui/material";
import HomeAutoSlider from "../../widgets/HomeAutoSlider";
import IFrameBanner from "../../widgets/iFrameBanner";
import OurCourseTabs from "../../widgets/OurCourseTabs";
import CustomButton from "../../widgets/CustomButton";
import { VisionMissionData } from "../../services/visionMision";
import { NoticeBoardData } from "../../services/commonNoticeBoard";
import {
  getSanjayGandhiInsiData,
  SanjayGandhiInsiResponseData,
} from "../../services/sanjayGandhiInsitute";
import {
  fetchNoticeBoardData,
  fetchVisionMissionData,
} from "../../utils/utilityFunctionServices";
import { getFullImageUrl } from "../../services/actualPath";

const RGCSanjayGandhi: React.FC = () => {
  const [sanjayGandhiInsiData, setSanjayGandhiInsiData] =
    useState<SanjayGandhiInsiResponseData | null>(null);
  const [visionData, setVisionData] = useState<VisionMissionData | null>(null);
  const [infoData, setInfoData] = useState<NoticeBoardData | null>(null);

  const fetchSanjayGandhiInsiData = () => {
    getSanjayGandhiInsiData()
      .then((response) => {
        const data = response.data;
        setSanjayGandhiInsiData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchSanjayGandhiInsiData();
    fetchVisionMissionData(setVisionData);
    fetchNoticeBoardData(setInfoData);
  }, []);

  // Transform API course data to match OurCourseTabs expected format
  const courseData =
    sanjayGandhiInsiData?.our_courses?.course_type?.map((courseType) => ({
      category: courseType.title,
      courses:
        courseType.departments?.map((dept) => ({
          text: dept.course_name,
          greenText: dept.UG_PG,
          description: dept.course_details,
          description2: dept.ourse_duration,
          courseImage: dept.image?.url || "",
          needApply: true,
          needApplyLink: dept.apply_now_link,
          needLink: true,
          needViewDetails: false,
          needViewDetailsLink: dept.view_details_link,
        })) || [],
    })) || [];

  return (
    <>
      <Banner
        bannerImageClassName="rgc-institution-banner"
        bannerText={sanjayGandhiInsiData?.banner_title}
        breadCrumbsList={[
          {
            label: sanjayGandhiInsiData?.our_Institutions_text || "",
            to: sanjayGandhiInsiData?.Our_Institutions_link || "",
          },
          {
            label: sanjayGandhiInsiData?.banner_dental_college_text || "",
            to: sanjayGandhiInsiData?.banner_dental_college_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(
            sanjayGandhiInsiData?.banner_image?.formats?.large?.url
          ) || ""
        }
      />

      <div className="row mt-5">
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
          <div>
            <img
              src={
                getFullImageUrl(
                  sanjayGandhiInsiData?.About_the_Institution?.image?.formats
                    ?.large?.url
                ) || ""
              }
              className="img-fluid"
              alt={
                sanjayGandhiInsiData?.About_the_Institution?.image
                  ?.alternativeText
              }
            />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-start text-start p-3 p-md-5">
            <Typography
              sx={{
                color: "var(--color-pure-black)",
                fontSize: "var(--font-size-32)",
                fontWeight: "var(--font-weight-600)",
              }}
              variant="h2"
              component="h2"
            >
              {sanjayGandhiInsiData?.About_the_Institution?.title}
            </Typography>
            <p className="light-gray-p p-font-size-14">
              {sanjayGandhiInsiData?.About_the_Institution?.Description}
            </p>
            <CustomButton
              path={
                sanjayGandhiInsiData?.About_the_Institution?.visit_link || ""
              }
              btnClassName="btn ps-5 pe-5 rounded-1 mt-3 text-white red-btn text-decoration-none"
              label={sanjayGandhiInsiData?.About_the_Institution?.visit_text}
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
          {infoData?.notice_board?.title || "Notice Board"}
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
          {infoData?.notice_board?.subtitle || "Latest Updates"}
        </Typography>
      </div>

      <div
        style={{ backgroundColor: "var( --color-neutral-gray)" }}
        className="mb-5"
      >
        <HomeAutoSlider list={infoData?.notice_board?.list || []} />
      </div>

      <OurCourseTabs courseCategories={courseData} bgClass={false} />

      <div className="mt-5">
        <ValueVision
          title={visionData?.values_vision?.subtitle || "Our Vision"}
          smallText={visionData?.values_vision?.title || "Vision & Mission"}
          image={getFullImageUrl(visionData?.values_vision?.image?.url) || ""}
          description1={visionData?.values_vision?.content ?? ""}
        />
        <EnquiryForm />
        <IFrameBanner requiredFooterBorder={false} />
        <ContactBanner />
      </div>
    </>
  );
};

export default RGCSanjayGandhi;
