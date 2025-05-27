import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../HomeAutoSlider/homeautoslider.css";

import Slider from "../Slider";
import InfoSlide from "./InfoSlide";
import {NoticeItem } from "../../services/commonNoticeBoard";


const sliderProps = {
  withControls: false,
  infinite: true,
  speed: 4000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoPlaySpeed: 100,
  autoPlay: true,
};
const HomeAutoSlider: React.FC<{ list: NoticeItem[] }> = ({ list }) => {
  return (
    <div className="slider-container p-5">
      <Slider
        withControls={sliderProps.withControls}
        infinite={sliderProps.infinite}
        speed={sliderProps.speed}
        slidesToShow={sliderProps.slidesToShow}
        slidesToScroll={sliderProps.slidesToScroll}
        autoplaySpeed={sliderProps.autoPlaySpeed}
        autoplay={sliderProps.autoPlay}
        slidesList={list.map((data: NoticeItem) => (
          <InfoSlide
            title={data.title}
            Description={data.Description}
            Read_More_link={data.Read_More_link}
            id={data.id}
            Read_More_text={data.Read_More_text}
          />
        ))}
      />
    </div>
  );
};

export default HomeAutoSlider;
