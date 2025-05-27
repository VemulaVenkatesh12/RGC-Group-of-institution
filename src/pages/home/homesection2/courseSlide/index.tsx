import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ICourseData } from "..";

const CourseSlide: React.FC<ICourseData> = ({
  courseImage,
  title,
  cardPrimaryText,
  cardSecondaryText,
  Know_More_text,
  Know_More_link
}) => {
  return (
    <div className="d-flex align-items-center">
      <div className="carousel-slide">
        <div className="position-relative h-auto w-100">
          <img
            src={courseImage || undefined}
            className="img-fluid w-100 h-auto"
            alt="home-carousel-image-1"
          />
          <h3 className="fw-bold text-white caro-card-title position-absolute">
            {title}
          </h3>
          <div className="carousel-card-para position-absolute">
            <div className="card border-0 rounded-0">
              <div className="card-body">
                <p className="card-heading-title">{cardPrimaryText}</p>
                <Typography
                  sx={{
                    color: "var(--color-dark-gray)",
                    fontSize: "var(--font-size-12)",
                  }}
                >
                  {cardSecondaryText}
                </Typography>
                <Link
                  to={Know_More_link}
                  color="inherit"
                  className="mt-4 text-decoration-none p-font-size-12 pdf-link"
                  style={{
                    fontFamily: "var(--font-family-poppins) !important",
                  }}
                >
                  {Know_More_text}{" "}
                  <ArrowForwardIcon
                    sx={{
                      color: "var(--color-deep-red)",
                      fontSize: "var(--font-size-12)",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSlide;
