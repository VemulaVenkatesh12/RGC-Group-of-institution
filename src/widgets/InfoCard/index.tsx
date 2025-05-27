import React from "react";
import "../InfoCard/infocard.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import CustomButton from "../CustomButton";

export interface InfoCardProps {
  text: string;
  description?: string;
  greenText?: string;
  courseImage?: string;
  needApply: boolean;
  description2?: string;
  needLink?: boolean;
  needViewDetails?: boolean;
  needApplyNavigateTo?: string;
  needLinkNavigateTo?: string;
  minHeight?: string; // New prop for minimum height
}

const InfoCard: React.FC<InfoCardProps> = ({
  text,
  description = "",
  description2 = "",
  greenText = "",
  needApply = false,
  courseImage = "",
  needLink = false,
  needViewDetails = false,
  needApplyNavigateTo = "",
  needLinkNavigateTo = "",
  minHeight = "auto", // Default to auto
}) => {
  return (
    <div>
      <div 
        className="card infocard m-3"
        style={{
          minHeight: minHeight,
          display: "flex",
          flexDirection: "column",
          height: minHeight !== "auto" ? minHeight : "auto"
        }}
      >
        <div className="p-2">
          <img
            src={courseImage}
            className="card-img-top img-fluid"
            alt="course-image"
          />
        </div>
        <div 
          className="card-body"
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between"
          }}
        >
          <div>
            {greenText && (
              <p className="info-sm-box p-1 p-font-size-12 rounded-1">
                {greenText}
              </p>
            )}
            <Typography
              sx={{
                color: "#0D0D25",
                fontSize: "24px",
                fontWeight: "var(--font-weight-600)",
              }}
              component="h4"
            >
              {text}
            </Typography>
            {description && (
              <p className="card-text p-font-size-14">{description}</p>
            )}
            {description2 && (
              <p className="card-text p-font-size-14">
                <span className="course-duration-text fw-bold p-font-size-14">
                  Course Duration:{" "}
                </span>
                {description2}
              </p>
            )}
          </div>
          
          <div className="mt-auto">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex flex-wrap">
                {needApply && (
                  <CustomButton
                    path={needApplyNavigateTo}
                    btnClassName="btn info-card-button ps-3 pe-3 mt-3 me-3"
                    label="APPLY NOW"
                  />
                )}
                {needViewDetails && (
                  <CustomButton
                    path={needLinkNavigateTo}
                    btnClassName="btn info-card-button ps-3 pe-3 mt-3 info-view-details-btn"
                    label="VIEW DETAILS"
                  />
                )}
              </div>

              {needLink && (
                <Link
                  to={needLinkNavigateTo}
                  className="mt-4 p-font-size-14 text-decoration-none read-more-link"
                >
                  View Details{" "}
                  <ArrowForwardIcon
                    sx={{
                      color: "var(--color-deep-red)",
                      fontSize: "var(--font-size-16)",
                    }}
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;