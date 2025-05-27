import React, { useEffect, useState } from "react";
import EnquiryForm from "../../widgets/EnquiryForm";
import ContactBanner from "../../widgets/ContactBanner";
import "./courseDetailPage.css";
import IFrameBanner from "../../widgets/iFrameBanner";
import Banner from "../../widgets/Banner";
import InfoImageSection from "../../widgets/InfoImageSection";
import Tabs from "../../widgets/Tabs";
import { CourseDeatilsResponseData, getCourseDeatilsData } from "../../services/courseDeatils";
import { getFullImageUrl } from "../../services/actualPath";
const CourseDetailPage: React.FC = () => {
  const [courseDeatilsData, setCourseDeatilsData] =
      useState<CourseDeatilsResponseData | null>(null);

    const fetchCourseDeatilsData = () => {
      getCourseDeatilsData()
        .then((response) => {
          const count = response.data;
          setCourseDeatilsData(count);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      fetchCourseDeatilsData();
    }, []);

  const getCourseInfo = () => {
    if (!courseDeatilsData?.course) return null;
    
    return courseDeatilsData.course.find(
      (item) => item.__component === "course-detail-page.bachelor-of-dental-surgery"
    );
  };
  const getTabItems = () => {
    if (!courseDeatilsData?.course) return [];
    
    const modulesComponent = courseDeatilsData.course.find(
      (item) => item.__component === "course-detail-page.modules"
    );
    
    if (!modulesComponent?.modules_details) return [];

    return modulesComponent.modules_details.map((module) => ({
      label: module.title,
      key: module.title,
      content: (
        <p className="course-tab-text p-font-size-14">
          {module.Description}
        </p>
      ),
    }));
  };

  const tabItems = getTabItems();
  const courseInfo = getCourseInfo();

  return (
    <>
      <Banner
        bannerText={courseDeatilsData?.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label: courseDeatilsData?.banner_Course_Details_text || "",
            to: courseDeatilsData?.banner_Course_Details_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(courseDeatilsData?.banner_image?.formats?.large?.url) || ""
        }
      />
      <div className="pb-md-5 course-detail-bg">
        <InfoImageSection
          secondaryHeader={courseInfo?.title}
          description={
            courseInfo?.Description ||
            "Course details not available"
          }
          imageSrc={getFullImageUrl(courseInfo?.image?.url) || ""}
          imageAlt={courseInfo?.image?.alternativeText || "course-image"}
          imagePosition="left"
          navigateTo={courseInfo?.Enquiry_Form_link || "/national-dental-register"}
          btnLabel={courseInfo?.Enquiry_Form_text || "ENQUIRY FORM"}
        />
        {tabItems.length > 0 && (
          <Tabs tabItems={tabItems} btnStyle="course-details-tab-btn" />
        )}
      </div>

      <EnquiryForm
      />
      <IFrameBanner requiredFooterBorder={false} />
      <ContactBanner />
    </>
  );
};
export default CourseDetailPage;
