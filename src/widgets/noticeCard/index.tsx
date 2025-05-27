import React from "react";
import "../InfoCard/infocard.css";
import { Typography } from "@mui/material";

export interface InfoCardProps {
  title: string;
  description: string;
  date: string;
  courseImage?: string;
}

const NoticeCard: React.FC<InfoCardProps> = ({
  title = "",
  description = "",
  date = "",
  courseImage = "",
}) => {
  return (
    <div>
      <div className="card border-0">
        <div className="p-2">
          <img
            src={courseImage}
            className="card-img-top img-fluid"
            alt="course-image"
          />
        </div>
        <div className="card-body">
          <Typography
            sx={{
              color: "#26262699",
              fontSize: "16px",
              fontWeight: "var(--font-weight-500)",
            }}
          >
            {date}
          </Typography>
          <Typography
            sx={{
              color: "#0D0D25",
              fontSize: "18px",
              fontWeight: "var(--font-weight-600)",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#696868",
              fontSize: "16px",
              fontWeight: "var(--font-weight-400)",
            }}
          >
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
