import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../homeautoslider.css";
import { NoticeItem } from "../../../services/commonNoticeBoard";
const InfoSlide: React.FC<NoticeItem> = ({ title, Description, Read_More_link }) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="slider-body p-4">
          <h5 className="home-slider-title">{title}</h5>
          <p className="home-slider-text">{Description}</p>
          <div className="text-end d-flex justify-content-end">
            <Link
              to={Read_More_link}
              color="inherit"
              className="p-font-size-14 text-decoration-none auto-slider-read-more"
            >
              Read More{" "}
              <ArrowForwardIcon
                sx={{
                  color: "var(--color-deep-red)",
                  fontSize: "var(--font-size-16)",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSlide;
