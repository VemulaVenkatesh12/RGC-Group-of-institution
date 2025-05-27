import React, { useRef, ReactNode } from "react";
import SlickSlider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./slider.css";
import { Button } from "react-bootstrap";

interface ISliderProps {
  withControls?: boolean;
  settings?: any;
  position?: string;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  slidesToScroll?: number;
  slidesList: ReactNode;
  arrows?: boolean;
  initailSlide?: number;
  sliderPadding?: string;
  fade?: boolean;
}

const Slider: React.FC<ISliderProps> = ({
  withControls = false,
  position = "",
  infinite = true,
  speed = 500,
  slidesToShow = 1,
  autoplay = false,
  autoplaySpeed = 3000,
  slidesToScroll = 1,
  slidesList,
  arrows = false,
  sliderPadding = "",
  fade = false,
}) => {
  const sliderRef = useRef<SlickSlider | null>(null);

  const defaultSettings = {
    arrows,
    dots: false,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    autoplay,
    autoplaySpeed,
    fade,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className={`slider-wrapper position-relative ${sliderPadding}`}>
      <SlickSlider {...defaultSettings} ref={sliderRef}>
        {slidesList}
      </SlickSlider>

      {withControls &&
        (position ? (
          <div className={`${position}`}>
            <Button
              className="btn btn-light me-2 border-0"
              onClick={handlePrev}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
            </Button>
            <Button className="btn btn-light border-0" onClick={handleNext}>
              <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
            </Button>
          </div>
        ) : (
          <>
            <Button
              className="p-2 slider-btn-bg rounded-2 slider-btn prev-arrow border-0"
              onClick={handlePrev}
            >
              <ArrowBackIosNewIcon
                className="slider-btn-color"
                sx={{ fontSize: 20 }}
              />
            </Button>
            <Button
              className="p-2 slider-btn-bg rounded-2 slider-btn next-arrow border-0"
              onClick={handleNext}
            >
              <ArrowForwardIosIcon
                className="slider-btn-color"
                sx={{ fontSize: 20 }}
              />
            </Button>
          </>
        ))}
    </div>
  );
};

export default Slider;
