import React, { useEffect, useState } from "react";
import HomeCarousal from "../../widgets/HomePageCarousal";
import "../home/home.css";
import HomeSection2 from "./homesection2";
import KnowMoreVideo from "../../widgets/KnowMoreVideo";
import { Typography } from "@mui/material";
import ContactBanner from "../../widgets/ContactBanner";
import EnquiryForm from "../../widgets/EnquiryForm";
import ValueVision from "../../widgets/ValueVision";
import HomeAutoSlider from "../../widgets/HomeAutoSlider";
import Testimonials from "../../widgets/Testimonials";
import CampusLife from "../../widgets/CampusLife";
import OurCourse from "../../widgets/OurCourse";
import IFrameBanner from "../../widgets/iFrameBanner";
import NewsNEventsHome from "../../widgets/NewsNEvents";
import { VisionMissionData } from "../../services/visionMision";
import {
  Block,
  getCourseLandingPage,
  LandingData,
} from "../../services/About_Courses_landing_page";
import { TourResPonseData } from "../../services/takeATour";
import {
  fetchNoticeBoardData,
  fetchTourData,
  fetchVisionMissionData,
} from "../../utils/utilityFunctionServices";
import { NoticeBoardData } from "../../services/commonNoticeBoard";
import { getFullImageUrl } from "../../services/actualPath";
const Home: React.FC = () => {
  const [landingdata, setLandingData] = useState<LandingData | null>(null);
  const [blockData, setblockData] = useState<Block[] | null>(null);
  const [playButtonUrl, setPlayButtonUrl] = useState<string>("");
  const [infoData, setInfoData] = useState<NoticeBoardData | null>(null);
  const [visionData, setVisionData] = useState<VisionMissionData | null>(null);
  const [tourData, setTourData] = useState<TourResPonseData | null>(null);
  const fetchLandingData = () => {
    getCourseLandingPage()
      .then((response) => {
        const count = response.data;
        setLandingData(count);
        setblockData(count.block);
      })
      .catch((error) => {
        console.error("Error fetching landing page data:", error);
      });
  };

  useEffect(() => {
    fetchLandingData();
    fetchNoticeBoardData(setInfoData);
    fetchVisionMissionData(setVisionData);
    fetchTourData(setTourData, setPlayButtonUrl);
  }, []);

  const backgroundImage = getFullImageUrl(blockData?.[0]?.image1?.formats?.large?.url) || "";

  const motionCardImages: string[] =
    blockData?.[0]?.images
      ?.map((img) => getFullImageUrl(img?.formats?.large?.url) || "")
      .filter(Boolean) || [];

  const homeRibbonData =
    blockData?.[0]?.data?.map((item) => ({
      primaryText: item.title,
      secondaryText: item.subtitle,
      description: item.Description,
    })) || [];

  return (
    <div>
      <HomeCarousal
        backgroundImage={backgroundImage}
        motionCardImages={motionCardImages}
        homeRibbonData={homeRibbonData}
        heroicData={landingdata?.block?.[0] ?? ({} as Block)}
      />

      <div>
        <HomeSection2 landingData={landingdata} />
      </div>
      <div>
        <KnowMoreVideo
          imagePath={playButtonUrl || ""}
          text={tourData?.take_a_tour?.title || "undefined"}
          description={tourData?.take_a_tour?.Description || "Undefined"}
          videoUrl={getFullImageUrl(tourData?.take_a_tour.video.url) || ""}
        />
      </div>
      <div>
       <OurCourse 
        title={landingdata?.AboutCourseslandingpage.title}
        subtitle={landingdata?.AboutCourseslandingpage.subtitle}
        />
      </div>
      <div className="text-center mt-5">
        <Typography
          sx={{
            color: "var(--color-deep-red)",
            fontSize: "var(--font-size-18)",
            fontWeight: "var(--font-weight-600)",
          }}
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
          component="h2"
        >
          {infoData?.notice_board.subtitle}
        </Typography>
      </div>
      <div className="mb-5 home-auto-slider-bg">
        <HomeAutoSlider list={infoData?.notice_board?.list ?? []} />
      </div>
      <div>
        <ValueVision
          title={visionData?.values_vision.subtitle}
          smallText={visionData?.values_vision.title}
          image={getFullImageUrl(visionData?.values_vision.image.url) || ""}
          description1={visionData?.values_vision?.content ?? ""}
        />
      </div>
      <div className="mt-5 mb-5">
        <Testimonials
          testimonialsData={
            landingdata?.testimonials?.testimonials_details || []
          }
          title={landingdata?.testimonials?.title}
          subtitle={landingdata?.testimonials?.subtitle}
        />
      </div>
      <div className="mt-5 mb-5 ">
        <CampusLife campusLife={landingdata?.campus_life} />
      </div>
      <div className="mt-5 mb-5 container p-0">
        <NewsNEventsHome newsDetails={landingdata?.news_events} />
      </div>
      <EnquiryForm />
      <IFrameBanner requiredFooterBorder={false} />
      <ContactBanner />
    </div>
  );
};

export default Home;
