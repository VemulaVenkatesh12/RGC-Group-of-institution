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
  getRGCKamalaCollageData,
  RGCKamalaCollageResponseData,
} from "../../services/rgcKamalaCollage";
import { NoticeBoardData } from "../../services/commonNoticeBoard";
import {
  fetchNoticeBoardData,
  fetchVisionMissionData,
} from "../../utils/utilityFunctionServices";
import { VisionMissionData } from "../../services/visionMision";
import { getFullImageUrl } from "../../services/actualPath";

const RGCKamalaCollege: React.FC = () => {
  const [RGCKamalaCollageData, setRGCKamalaCollageData] =
    useState<RGCKamalaCollageResponseData | null>(null);
  const [visionData, setVisionData] = useState<VisionMissionData | null>(null);
  const [infoData, setInfoData] = useState<NoticeBoardData | null>(null);

  const fetchSatelliteServicesData = () => {
    getRGCKamalaCollageData()
      .then((response) => {
        const count = response.data;
        setRGCKamalaCollageData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchSatelliteServicesData();
    fetchVisionMissionData(setVisionData);
    fetchNoticeBoardData(setInfoData);
  }, []);

  const getCourseData = () => {
    if (
      !RGCKamalaCollageData?.our_courses ||
      RGCKamalaCollageData.our_courses.length === 0
    ) {
      // Fallback to static data if API data is not available
      return [];
    }

    // Transform API data to match expected format
    return RGCKamalaCollageData.our_courses.map((courseSection) => ({
      category: courseSection.course_type[0]?.title,
      courses: courseSection.course_type.flatMap((courseType) =>
        courseType.departments.map((department) => ({
          text: department.course_name,
          greenText: department.UG_PG,
          description: department.course_details,
          description2: department.course_duration,
          courseImage:
            getFullImageUrl(department.image?.formats.large.url) || "",
          needApply: true,
          needApplyLink: department.apply_now_link,
          needLink: true,
          needViewDetails: false,
          needViewDetailsLink: department.view_details_link,
        }))
      ),
    }));
  };

  return (
    <>
      <Banner
        bannerText={RGCKamalaCollageData?.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label: RGCKamalaCollageData?.our_Institutions_text || "",
            to: RGCKamalaCollageData?.Our_Institutions_link || "",
          },
          {
            label: RGCKamalaCollageData?.dental_college_text || "",
            to: RGCKamalaCollageData?.dental_college_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(
            RGCKamalaCollageData?.banner_image.formats.large.url
          ) || ""
        }
      />
      <div className="row mt-5">
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
          <div>
            <img
              src={
                getFullImageUrl(
                  RGCKamalaCollageData?.about_the_college.image.formats.large
                    .url
                ) || ""
              }
              className="img-fluid"
              alt="rgc-kamala"
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
              {RGCKamalaCollageData?.about_the_college?.title}
            </Typography>
            <p className="light-gray-p p-font-size-14">
              {RGCKamalaCollageData?.about_the_college?.Description}
            </p>
            <CustomButton
              path={RGCKamalaCollageData?.about_the_college?.visit_link || ""}
              label={RGCKamalaCollageData?.about_the_college?.visit_text}
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
            color: "var(--color-light-black)",
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
      <OurCourseTabs courseCategories={getCourseData()} bgClass={false} />
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

export default RGCKamalaCollege;
