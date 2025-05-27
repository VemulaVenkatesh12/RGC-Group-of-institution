import Slider from "../../../widgets/Slider";
import "../../../widgets/Testimonials/testimonials.css";
import { Typography } from "@mui/material";
import CourseSlide from "./courseSlide";
import CustomButton from "../../../widgets/CustomButton";
import { useEffect, useState } from "react";
import { LandingData } from "../../../services/About_Courses_landing_page";
import { getFullImageUrl } from "../../../services/actualPath";

export interface ICourseData {
  courseImage: string | null;
  title: string;
  cardPrimaryText: string;
  cardSecondaryText: string;
  Know_More_text: string;
  Know_More_link: string;
}

interface HomeSection2Props {
  landingData: LandingData | null;
}

const HomeSection2: React.FC<HomeSection2Props> = ({ landingData }) => {
  const [courseSlideData, setCourseSlideData] = useState<ICourseData[]>([]);

  useEffect(() => {
    if (
      landingData?.about_us?.image_details &&
      landingData.about_us.image_details.length > 0
    ) {
      const transformedData = landingData.about_us.image_details.map(
        (detail) => ({
          courseImage: getFullImageUrl(
            detail.image.formats.large.url || undefined
          ),
          title: detail.title,
          cardPrimaryText: detail.subtitle,
          cardSecondaryText: detail.Description,
          Know_More_text: detail.Know_More_text,
          Know_More_link: detail.Know_More_link,
        })
      );
      setCourseSlideData(transformedData);
    }
  }, [landingData]);

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 p-0">
            <div className="position-relative">
              <Slider
                withControls={true}
                infinite={true}
                arrows={false}
                slidesToShow={1}
                speed={1600}
                slidesToScroll={1}
                autoplay={true}
                fade={true}
                position="slider-controls2 position-absolute d-flex justify-content-end"
                sliderPadding="slider-padding"
                slidesList={courseSlideData.map(
                  (item: ICourseData, idx: number) => (
                    <CourseSlide
                      key={idx}
                      courseImage={item.courseImage}
                      title={item.title}
                      cardPrimaryText={item.cardPrimaryText}
                      cardSecondaryText={item.cardSecondaryText}
                      Know_More_text={item.Know_More_text}
                      Know_More_link={item.Know_More_link}
                    />
                  )
                )}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 aboutBg">
            <div className="d-flex align-items-center justify-content-center h-100">
              <div className="d-flex flex-column p-5">
                <Typography
                  sx={{
                    color: "var(--color-dark-black)",
                    fontSize: "var(--font-size-18)",
                    fontWeight: "var(--font-weight-600)",
                  }}
                  variant="h5"
                  component="h5"
                >
                  {landingData?.about_us.title}
                </Typography>
                <Typography
                  sx={{
                    color: "var(--color-dark-black)",
                    fontSize: "var(--font-size-18)",
                    fontWeight: "var(--font-weight-600)",
                  }}
                  variant="h2"
                  component="h2"
                >
                  {landingData?.about_us.subtitle}
                </Typography>
                <Typography
                  sx={{
                    color: "var(--color-grayish-purple)",
                    fontSize: "var(--font-size-14)",
                    mt: 2,
                  }}
                  component="p"
                >
                  {landingData?.about_us.Description_text1}
                </Typography>
                <div>
                  <CustomButton
                    path={landingData?.about_us.Read_More_link}
                    btnClassName="btn red-btn text-white  mt-4 px-4 py-2"
                    label={landingData?.about_us.Read_More_text}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection2;
