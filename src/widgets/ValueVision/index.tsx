import React from "react";
import "../ValueVision/valuevison.css";
import { Typography } from "@mui/material";
import InfoImageSection from "../InfoImageSection";

interface VisionProps {
  image?: string;
  title?: string;
  smallText?: string;
  description1?: string; 
  description2?: string;
  description3?: string;
  subHeading?: string;
}

const ValueVision: React.FC<VisionProps> = ({
  image,
  title,
  smallText,
  description1,
  description2,
  description3,
  subHeading,
}) => {
  const renderMainHeading = title ? title : subHeading;

  const getStringDescription = (): string => {
    return description1 || '';
  };

  const getFormattedDescription = () => {
    if (!description1) return '';
    
    return description1.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <>
      <div className="wrapper d-none d-xl-block">
        <div className="visionImage">
          <div className="image-container">
            <img src={image} className="img-fluid" alt="" />
            <div className="overlay-text">
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: "var(--font-weight-600)",
                }}
                variant="h5"
                component="h5"
              >
                {smallText}
              </Typography>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: title ? "48px" : "32px",
                  fontWeight: "var(--font-weight-600)",
                }}
              >
                {renderMainHeading}
              </Typography>
            </div>
          </div>

          <div className="vision-content p-5">
            <Typography
              sx={{
                color: "var(--color-white)",
                fontSize: title ? "48px" : "32px",
                fontWeight: "var(--font-weight-600)",
              }}
            >
              {renderMainHeading}
            </Typography>
            <br />
            <p className="p-font-size-14">{getFormattedDescription()}</p>
            <br />
            <p className="p-font-size-14">{description2}</p>
            <br />
            <p className="p-font-size-14">{description3}</p>
          </div>
        </div>
      </div>
      <div className="container d-block d-xl-none">
        <InfoImageSection
          primaryHeader={smallText}
          secondaryHeader={title}
          description={getStringDescription()}
          imagePosition="left"
          imageSrc={image || ""}
          imageAlt=""
        />
      </div>
    </>
  );
};

export default ValueVision;
