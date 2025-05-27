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
import {
  getRGCinsitutionsData,
  RGCinsitutionsResponseData,
} from "../../services/RGCInstituteofTechnology";
import {
  fetchNoticeBoardData,
  fetchVisionMissionData,
} from "../../utils/utilityFunctionServices";
import { NoticeBoardData } from "../../services/commonNoticeBoard";
import { VisionMissionData } from "../../services/visionMision";
import { getFullImageUrl } from "../../services/actualPath";

const RGCInstituteOfTechnology: React.FC = () => {
  const [RGCinsitutionsData, setRGCinsitutionsData] =
    useState<RGCinsitutionsResponseData | null>(null);
  const [infoData, setInfoData] = useState<NoticeBoardData | null>(null);
  const [visionData, setVisionData] = useState<VisionMissionData | null>(null);

  const fetchRGCinsitutionsData = () => {
    getRGCinsitutionsData()
      .then((response) => {
        const count = response.data;
        setRGCinsitutionsData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchRGCinsitutionsData();
    fetchNoticeBoardData(setInfoData);
    fetchVisionMissionData(setVisionData);
  }, []);

  const getCourseData = () => {
    if (!RGCinsitutionsData?.our_courses?.course_type) {
      return [];
    }

    return RGCinsitutionsData.our_courses.course_type.map((courseType) => ({
      category: courseType.title,
      courses: courseType.departments.map((department) => ({
        text: department.course_name,
        greenText: department.UG_PG,
        description: department.Description,
        description2: department.duration,
        courseImage: getFullImageUrl(department.image?.url) || "",
        needApply: true,
        needApplyLink: department.apply_now_link,
        needLink: true,
        needViewDetails: false,
        needViewDetailsLink: department.view_details_link,
      })),
    }));
  };

  const courseData = getCourseData();
  return (
    <>
      <Banner
        bannerImageClassName="rgc-institution-banner"
        bannerText={RGCinsitutionsData?.banner_title || ""}
        breadCrumbsList={[
          {
            label: RGCinsitutionsData?.banner_our_Institutions_text || "",
            to: RGCinsitutionsData?.banner_Our_Institutions_link || "",
          },
          {
            label: RGCinsitutionsData?.banner_dental_college_text || "",
            to: RGCinsitutionsData?.banner_dental_college_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(RGCinsitutionsData?.banner_image.formats.large.url) ||
          ""
        }
      />
      <div className="row mt-5">
        <div className="col-lg-6 col-md-6 col-sm-6 p-0 ">
          <div>
            <img
              src={
                getFullImageUrl(
                  RGCinsitutionsData?.About_the_RGIT.image.formats.large.url
                ) || ""
              }
              className="img-fluid"
              alt="rgc-institute"
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
              {RGCinsitutionsData?.About_the_RGIT.title}
            </Typography>
            <p className="light-gray-p p-font-size-14">
              {RGCinsitutionsData?.About_the_RGIT.Description}
            </p>
            <CustomButton
              path={RGCinsitutionsData?.About_the_RGIT.visit_link}
              label={RGCinsitutionsData?.About_the_RGIT.visit_text}
              btnClassName="btn ps-5 pe-5 rounded-1 mt-3 text-white red-btn text-decoration-none"
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
      <OurCourseTabs courseCategories={courseData} bgClass={false} />
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

export default RGCInstituteOfTechnology;
