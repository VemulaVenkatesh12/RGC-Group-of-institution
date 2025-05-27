import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import "./healthCare.css";
import KnowMoreVideo from "../../widgets/KnowMoreVideo";
import EnquiryForm from "../../widgets/EnquiryForm";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import TitleAndMeta from "../../widgets/TitleAndMeta";
import InfoImageSection from "../../widgets/InfoImageSection";
import ContentSection from "../../widgets/ContentSection";
import CustomButton from "../../widgets/CustomButton";
import {
  getHealthcareData,
  HealthcareResponseData,
} from "../../services/healthcare";
import { fetchTourData } from "../../utils/utilityFunctionServices";
import { TourResPonseData } from "../../services/takeATour";
import { getFullImageUrl } from "../../services/actualPath";

const HealthCare: React.FC = () => {
  const [healthcareData, setHealthcareData] =
    useState<HealthcareResponseData | null>(null);
  const [tourData, setTourData] = useState<TourResPonseData | null>(null);
  const [playButtonUrl, setPlayButtonUrl] = useState<string>("");

  const fetchHealthcareData = async () => {
    try {
      const response = await getHealthcareData();
      setHealthcareData(response.data);
    } catch (error) {
      console.error("Error fetching healthcare data:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchHealthcareData();
    fetchTourData(setTourData, setPlayButtonUrl);
  }, []);

  const findBlockByComponent = (componentType: string) => {
    return healthcareData?.block?.find(
      (block) => block.__component === componentType
    );
  };

  const defaultCardData = {
    backgroundColor: "var(--color-light-pink-beige)",
  };

  // SVG arrow icon component
  const ArrowIcon = () => (
    <svg
      className="double-arrow-icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 16C9.71667 16 9.47917 15.9042 9.2875 15.7125C9.09583 15.5208 9 15.2833 9 15V7H1C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H10C10.2833 5 10.5208 5.09583 10.7125 5.2875C10.9042 5.47917 11 5.71667 11 6V15C11 15.2833 10.9042 15.5208 10.7125 15.7125C10.5208 15.9042 10.2833 16 10 16ZM15 11C14.7167 11 14.4792 10.9042 14.2875 10.7125C14.0958 10.5208 14 10.2833 14 10V2H6C5.71667 2 5.47917 1.90417 5.2875 1.7125C5.09583 1.52083 5 1.28333 5 1C5 0.716667 5.09583 0.479167 5.2875 0.2875C5.47917 0.0958333 5.71667 0 6 0H15C15.2833 0 15.5208 0.0958333 15.7125 0.2875C15.9042 0.479167 16 0.716667 16 1V10C16 10.2833 15.9042 15.5208 15.7125 10.7125C15.5208 10.9042 15.2833 11 15 11Z"
        fill="#333333"
      />
    </svg>
  );

  const HealthcareCard = ({ course }: { course: any }) => (
    <div className="col-lg-4 col-md-4 col-sm-12">
      <div className="card health-card rounded-bottom-0 mt-3">
        <img
          src={getFullImageUrl(course.image.formats.large.url) || ""}
          alt={`${course.name}-image`}
          className="img-fluid"
        />
        <CustomButton
          path={course.Know_More_link}
          btnClassName="btn btn-md text-white mt-2 hc-know-more-btn p-2 px-4"
          label={course.Know_More_text}
        />
        <div className="card-body d-flex justify-content-between health-care-card-body rounded-bottom-0 p-4">
          <h5 className="fw-bold mb-0">{course.name}</h5>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );

  const GallerySection = () => {
    const galleryBlock = findBlockByComponent("healthcare.view-our-gallery");

    return (
      <div className="col-lg-4 col-md-4 col-sm-12 my-auto p-5">
        <h3 className="fw-bold">{galleryBlock?.title || "View Our Gallery"}</h3>
        <p className="p-font-size-14">
          {galleryBlock?.Description ||
            "RGC Group aim to achieve the status of an international university with high standard of education and research."}
        </p>
        <CustomButton
          path={galleryBlock?.View_NOW_link || "/gallery"}
          btnClassName="btn btn-md text-white mt-2 red-btn px-4"
          label={galleryBlock?.View_NOW_text || "VIEW NOW"}
        />
      </div>
    );
  };

  const renderHealthcareCourses = () => {
    const courses = healthcareData?.about_the_healthcare?.courses || [];
    if (courses.length === 0) return null;

    const firstThreeCourses = courses.slice(0, 3);
    const remainingCourses = courses.slice(3);

    return (
      <div className="container ps-md-0 ps-2">
        {/* First row - 3 cards */}
        {firstThreeCourses.length > 0 && (
          <div className="row mt-5 mb-5">
            {firstThreeCourses.map((course) => (
              <HealthcareCard key={course.id} course={course} />
            ))}
          </div>
        )}

        {/* Second row - remaining cards + gallery */}
        {remainingCourses.length > 0 && (
          <div className="row mt-5 mt-3 mb-5 ps-0">
            {remainingCourses.map((course) => (
              <HealthcareCard key={course.id} course={course} />
            ))}
            <GallerySection />
          </div>
        )}
      </div>
    );
  };

  // Healthcare vision section component
  const HealthcareVisionSection = () => {
    const visionBlock = findBlockByComponent("healthcare.healthcare-vision");

    return (
      <div className="pt-3 pb-3 our-history-bg">
        <div className="container mt-5 d-flex mb-4">
          <div className="row ps-0">
            <div className="col-lg-7 col-sm-12 col-md-7 align-self-center">
              <div className="col-lg-8 col-sm-12 col-md-7">
                <ContentSection
                  primaryHeader={visionBlock?.title || "RGC Group"}
                  secondaryHeader={visionBlock?.subtitle || "Healthcare Vision"}
                  description={visionBlock?.Description || ""}
                  navigateTo={
                    visionBlock?.apply_now_link || "/national-dental-register"
                  }
                  btnLabel={visionBlock?.Apply_Now_text || "APPLY NOW"}
                />
              </div>
            </div>

            <div className="col-lg-5 col-sm-12 col-md-5 position-relative">
              <img
                src={
                  getFullImageUrl(visionBlock?.image?.formats?.large?.url) || ""
                }
                className="img-fluid"
                alt="operation-image"
              />
              <div
                className="card position-absolute top-50 translate-middle-y rounded-0 d-flex p-4 pt-2 card-img custom-card"
                style={{ backgroundColor: defaultCardData.backgroundColor }}
              >
                <div className="row">
                  <div className="col-lg-4">
                    <img
                      src={getFullImageUrl(visionBlock?.logo?.url) || ""}
                      alt="rgc-logo"
                      className="img-fluid mt-3"
                    />
                  </div>
                  <div className="col-lg-8 mt-4">
                    <div className="d-inline-block">
                      <h3 className="fw-bold">{visionBlock?.logo_title}</h3>
                      <p className="p-font-size-14">
                        {visionBlock?.logo_subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Info section component (replaces Lorem ipsum with dynamic content)
  const InfoSection = () => {
    const infoBlock = findBlockByComponent("healthcare.info-section");

    return (
      <div className="pt-3 pb-3">
        <InfoImageSection
          primaryHeader={infoBlock?.title || "RGC Group"}
          secondaryHeader={infoBlock?.subtitle || "Our Vision"}
          description={infoBlock?.Description || ""}
          imageSrc={
            getFullImageUrl(infoBlock?.image?.formats?.large?.url) || ""
          }
          imageAlt="campus-info-img"
          imagePosition="left"
          navigateTo={infoBlock?.apply_now_link || "/national-dental-register"}
          btnLabel={infoBlock?.Apply_Now_text || "APPLY NOW"}
        />
      </div>
    );
  };

  return (
    <>
      <Banner
        bannerText={healthcareData?.banner_title}
        bannerImageClassName="rgc-medical-banner"
        breadCrumbsList={[
          {
            label: healthcareData?.banner_campus_life_text || "",
            to: healthcareData?.banner_campus_life_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(healthcareData?.banner_image.formats.large.url) || ""
        }
      />

      <TitleAndMeta
        primaryHeader={healthcareData?.about_the_healthcare?.title}
        secondaryHeader={healthcareData?.about_the_healthcare?.subtitle}
        description={healthcareData?.about_the_healthcare?.Description || ""}
      />

      {renderHealthcareCourses()}

      <HealthcareVisionSection />

      <KnowMoreVideo
        imagePath={playButtonUrl || ""}
        text={tourData?.take_a_tour?.title || "undefined"}
        description={tourData?.take_a_tour?.Description || "Undefined"}
      />

      <InfoSection />

      <EnquiryForm />

      <IFrameBanner requiredFooterBorder={false} />

      <ContactBanner />
    </>
  );
};

export default HealthCare;
