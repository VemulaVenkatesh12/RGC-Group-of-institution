import { getFullImageUrl } from "../services/actualPath";
import { getNoticeBoardPage, NoticeBoardData } from "../services/commonNoticeBoard";
import { getOurCoursesLandingPageData, OurCoursesLandingPageResponseData } from "../services/commonOurCourses";
import { getTourData, TourResPonseData } from "../services/takeATour";
import { getVisionMission, VisionMissionData } from "../services/visionMision";

export const fetchNoticeBoardData = async (
  setter: (data: NoticeBoardData) => void
): Promise<void> => {
  try {
    const response = await getNoticeBoardPage();
    setter(response.data);
  } catch (error) {
    console.error("Failed to fetch notice board data:", error);
  }
};

export const fetchVisionMissionData = async (
    setter: (data: VisionMissionData) => void
 ): Promise<void> => {

  try {
    const response = await getVisionMission();
    const data = response.data;
    setter(data)

  } catch (error) {
    console.error('Error fetching vision data:', error);
    throw error;
  }
};


export const fetchTourData = async (
  setter: (data: TourResPonseData) => void,
  setPlayButtonUrl: (url: string) => void

): Promise<void> => {
  try {
    const response = await getTourData();
    const data = response.data;
    
    // Set the main data
    setter(data);
    
    // Process play button URL
    if (data.take_a_tour?.video_symbol_image?.url) {
      const fullImageUrl = getFullImageUrl(data.take_a_tour.video_symbol_image.url);
      setPlayButtonUrl(fullImageUrl || "undefined");
      console.log("Play button URL:", fullImageUrl);
    }
    
  } catch (error) {
    console.error('Error fetching tour data:', error);
    throw error;
  }
};

export const fetchOurCoursesData = async (
    setter: (data: OurCoursesLandingPageResponseData) => void
 ): Promise<void> => {

  try {
    const response = await getOurCoursesLandingPageData();
    const data = response.data;
    setter(data)

  } catch (error) {
    console.error('Error fetching vision data:', error);
    throw error;
  }
};