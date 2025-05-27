import React from "react";
import MotionCard from "./MotionCard";
import HomeRibbonBanner from "../HomeRibbon";
import "../HomePageCarousal/homeCarousal.css";
import { Block } from "../../services/About_Courses_landing_page";

interface ContentBlock {
  backgroundImage: string;
  motionCardImages: string[];
  homeRibbonData: {
    primaryText: string;
    secondaryText: string;
    description: string;
  }[];
  heroicData: Block;
}

const HomeCarousal: React.FC<ContentBlock> = ({
  homeRibbonData,
  backgroundImage,
  motionCardImages,
  heroicData,
}) => {
  return (
    <>
      <div className="carousel-container position-relative">
        <div id="carouselExampleFade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="motionCard-bg"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                }}
              >
                <MotionCard
                  motionCardImages={motionCardImages}
                  heroicData={heroicData}
                />
              </div>
            </div>
          </div>
        </div>
        <HomeRibbonBanner data={homeRibbonData} />
      </div>
    </>
  );
};

export default HomeCarousal;
