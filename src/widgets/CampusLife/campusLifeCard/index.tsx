import React from "react";
import { Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface CardLifeCardProps {
  image: string;
  topic: string;
}

const CampusLifeCard: React.FC<CardLifeCardProps> = ({ image, topic }) => {
  return (
    <>
      <div>
        <img src={image} className="img-fluid" alt="" />
        <div className="d-flex justify-content-start mt-3 align-items-center">
          <Typography
            sx={{
              fontSize: "var(--font-size-18)",
              color: "var(--color-white)",
              fontWeight: "var(--font-weight-600)",
            }}
            variant="h5"
            component="h5"
          >
            {topic}
          </Typography>
          <ArrowOutwardIcon sx={{ color: "var(--color-white)" }} />
        </div>
      </div>
    </>
  );
};

export default CampusLifeCard;
