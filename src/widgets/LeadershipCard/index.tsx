import React from "react";
import { Typography } from "@mui/material";
import "./leadershipCard.css";
import CustomButton from "../CustomButton";
interface LeadershipProps {
  title: string;
  description: string;
  cardImg: string;
}

const LeadershipCard: React.FC<LeadershipProps> = ({
  title,
  description,
  cardImg,
}) => {
  return (
    <div>
      <div className="card  leadership-card rounded-bottom-0 p-0">
        <img src={cardImg} alt="placement-image" className="img-fluid " />
        <CustomButton
          path="/management"
          btnClassName="btn btn-md text-white mt-2 leadership-btn  p-2 px-4 fw-bold"
          label="VIEW DETAILS"
        />
        <div className="card-body leadership-card-body  rounded-bottom-1 p-3 pt-1 ">
          <Typography
            mt={3}
            sx={{
              fontSize: "var(--font-size-18)",
              fontWeight: "var(--font-weight-600)",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "var(--font-size-14)",
            }}
          >
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LeadershipCard;
