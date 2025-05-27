import React, { useEffect, useRef, useState } from "react";
import Banner from "../../widgets/Banner";
import { GoArrowUpRight } from "react-icons/go";
import "./campusLife.css";
import KnowMoreVideo from "../../widgets/KnowMoreVideo";
import EnquiryForm from "../../widgets/EnquiryForm";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import InfoCard from "../../widgets/InfoCard";
import TitleAndMeta from "../../widgets/TitleAndMeta";
import { Link } from "react-router-dom";
import InfoImageSection from "../../widgets/InfoImageSection";
import {
  CampusLifeResponseData,
  getCampusLifeData,
} from "../../services/campusLife";
import { fetchTourData } from "../../utils/utilityFunctionServices";
import { TourResPonseData } from "../../services/takeATour";
import { getFullImageUrl } from "../../services/actualPath";

const CampusLife: React.FC = () => {
  const [campusLifeData, setcampusLifeData] =
    useState<CampusLifeResponseData | null>(null);
  const [playButtonUrl, setPlayButtonUrl] = useState<string>("");
  const [tourData, setTourData] = useState<TourResPonseData | null>(null);

  const fetchCampusLifeData = async () => {
    try {
      const response = await getCampusLifeData();
      setcampusLifeData(response.data);
    } catch (error) {
      console.error("Error fetching campus life data:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchCampusLifeData();
    fetchTourData(setTourData, setPlayButtonUrl);
  }, []);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to determine image position for InfoImageSection
  const getImagePosition = (index: number): "left" | undefined => {
    return index % 2 === 1 ? "left" : undefined;
  };

  // Function to determine background color for InfoImageSection
  const getBackgroundColor = (index: number): string | undefined => {
    return index % 2 === 0 ? "var(--color-off-white-gray)" : undefined;
  };

  return (
    <>
      <Banner
        bannerText={campusLifeData?.banner_title}
        bannerImageClassName="rgc-student-scholarship-banner"
        breadCrumbsList={[
          {
            label: campusLifeData?.banner_campus_life_text || "",
            to: campusLifeData?.banner_campus_life_link || "#",
          },
        ]}
        bannerImageUrl={getFullImageUrl(campusLifeData?.banner_image.formats.large.url) || ""}
      />

      <TitleAndMeta
        primaryHeader={campusLifeData?.campus_facilities?.title}
        secondaryHeader={campusLifeData?.campus_facilities?.subtitle}
        description={campusLifeData?.campus_facilities?.Description || ""}
      />

      <div className="container p-0">
        <div className="row mt-5 mb-5">
          {campusLifeData?.campus_facilities?.facilities?.length ? (
            campusLifeData.campus_facilities.facilities
              .slice(0, 3)
              .map((facility) => (
                <div key={facility.id} className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card rounded-bottom-0">
                    <img
                      src={getFullImageUrl(facility?.image?.formats?.large?.url) || ""}
                      alt={facility.facilities_name}
                      className="img-fluid"
                    />
                    <div className="card-body campus-facilities-card-body rounded-bottom-1">
                      <h5 className="fw-bold text-white mb-0">
                        {facility.facilities_name}
                      </h5>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <p>No facilities available.</p>
          )}
        </div>
      </div>

      <div className="container pt-5 mb-5 px-0">
        <div className="row">
          {campusLifeData?.tour_gallery?.slice(0, 2).map((item, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-sm-12">
              <div
                className={`card p-4 rounded-0 bg-white border-1 border-dark mb-4 ${
                  index === 0 ? "campus-tour-card" : "gallery-card"
                }`}
              >
                <div className="d-flex gap-4 align-items-center">
                  <div>
                    <h3 className="fw-bold">{item.title}</h3>
                    <p className="p-font-size-14">{item.subtitle}</p>
                  </div>
                  <div className="ms-auto">
                    <div className="p-2 arrow-icon-bg align-items-center">
                      {index === 0 ? (
                        <GoArrowUpRight
                          onClick={handleScroll}
                          size={24}
                          className="arrow-icon arrow-icon-color"
                        />
                      ) : (
                        <Link to="/gallery">
                          <GoArrowUpRight
                            size={24}
                            className="arrow-icon arrow-icon-color"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Image Sections from API */}
      {campusLifeData?.block?.map((block, index) => (
        <InfoImageSection
          key={block.id}
          primaryHeader={block.title}
          secondaryHeader={block.subtitle}
          description={block.Description}
          imageSrc={getFullImageUrl(block.image?.url) || ""}
          imageAlt={block.subtitle || "campus life"}
          backgroundColor={getBackgroundColor(index)}
          imagePosition={getImagePosition(index)}
          navigateTo={block.Reach_US_link || block.Reach_Us_link}
          btnLabel={block.Reach_US_text || block.Reach_Us_text}
        />
      ))}

      <div ref={sectionRef}>
        <KnowMoreVideo
          imagePath={playButtonUrl || ""}
          text={tourData?.take_a_tour?.title || "undefined"}
          description={tourData?.take_a_tour?.Description || "Undefined"}
          videoUrl={getFullImageUrl(tourData?.take_a_tour.video.url) || ""}
        />
      </div>

      <div className="container mt-5 pb-3 position-relative">
        <h5 className="fw-bold">
          {campusLifeData?.Sports_Recreation?.title || "RGC Group"}
        </h5>
        <h3 className="fw-bold">
          {campusLifeData?.Sports_Recreation?.subtitle ||
            "Sports And Recreations"}
        </h3>
        <p className="p-font-size-14">
          {campusLifeData?.Sports_Recreation?.Description}
        </p>

        <img
          src={
            getFullImageUrl(campusLifeData?.Sports_Recreation.sports_meet?.[0].image.formats
              .large.url) || ""
          }
          alt="sports-ground"
          className="img-fluid mt-4 ground-image"
        />
        <div className="card px-4 py-4 rounded-0 sports-img-card bg-white position-absolute">
          <div className="d-flex gap-4 align-items-start">
            <div className="p-2 rounded-2">
              <h4 className="fw-bold">
                {campusLifeData?.Sports_Recreation?.image_title}
              </h4>
              <p className="p-font-size-14">
                {campusLifeData?.Sports_Recreation?.image_description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5 px-0">
        <div className="row">
          {Array.isArray(campusLifeData?.Sports_Recreation?.sports_meet) &&
            campusLifeData.Sports_Recreation.sports_meet
              .slice(0, 2)
              .map((sport) => (
                <div key={sport.id} className="col-lg-6 col-md-6 col-sm-12">
                  <InfoCard
                    text={sport.name}
                    description={sport.Description}
                    courseImage={getFullImageUrl(sport.image?.url) || ""}
                    needApply={false}
                    needLink={false}
                  />
                </div>
              ))}

          {(!Array.isArray(campusLifeData?.Sports_Recreation?.sports_meet) ||
            campusLifeData.Sports_Recreation.sports_meet.length === 0) && (
            <div className="col-12">
              <p>No sports persons available</p>
            </div>
          )}
        </div>
      </div>

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

export default CampusLife;
