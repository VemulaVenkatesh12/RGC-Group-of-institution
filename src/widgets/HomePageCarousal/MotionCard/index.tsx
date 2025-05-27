import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import "./motionCard.css";
import CustomButton from "../../CustomButton";
import { Block } from "../../../services/About_Courses_landing_page";
import { getFullImageUrl } from "../../../services/actualPath";

interface CardProps {
  direction: "left" | "right" | "top";
  children: React.ReactNode;
  position: { x: number; y: number };
}

const MovingCard: React.FC<CardProps> = ({ direction, children, position }) => {
  let initialX = 0;
  let initialY = 0;

  if (direction === "left") {
    initialX = -1000;
  } else if (direction === "right") {
    initialX = 1000;
  } else if (direction === "top") {
    initialY = -1000;
  }

  return (
    <motion.div
      initial={{ x: initialX, y: initialY }}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 30,
        damping: 10,
        mass: 1.5,
        delay: 1.5,
      }}
    >
      {children}
    </motion.div>
  );
};

interface MotionCardProps {
  motionCardImages: string[];
  heroicData : Block
}

const MotionCard: React.FC<MotionCardProps> = ({ motionCardImages, heroicData }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="position-relative overflow-hidden motion-card-container d-none d-lg-block d-sm-none">
      <div className="d-flex justify-content-center align-items-center w-100">
        <MovingCard direction="left" position={{ x: 0, y: 0 }}>
          <img src={getFullImageUrl(motionCardImages[0]) || undefined} alt="moving-card-3" className="img-fluid" />
        </MovingCard>
        <MovingCard direction="top" position={{ x: 0, y: 0 }}>
          <img src={getFullImageUrl(motionCardImages[1]) || undefined} alt="moving-card-2" className="img-fluid" />
        </MovingCard>
        <MovingCard direction="right" position={{ x: 0, y: 0 }}>
          <img src={getFullImageUrl(motionCardImages[2]) || undefined} alt="moving-card-1" className="img-fluid" />
        </MovingCard>
      </div>
      {showText && (
        <>
          <motion.div
            className="back-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          />

          <div
            className="row container position-absolute motion-card-text-container"
            style={{
              top: "65%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              color: "var(--color-white)",
            }}
          >
            <div className="col-8 ps-0 ">
              <Typography
                sx={{
                  color: "var(--color-white)",
                  fontSize: "var(-font-size-14)",
                  fontWeight: "var(--font-weight-600)",
                }}
                component="h5"
              >
                <SchoolOutlinedIcon
                  sx={{
                    color: "var(--color-white)",
                    marginRight: "10px",
                  }}
                />
                {heroicData.education_meets_quality.title}
              </Typography>
              <h2 className="text-white primary-animation-text">
                {heroicData.education_meets_quality.Description}
              </h2>
              <CustomButton
                path={heroicData.view_our_program_link}
                btnClassName="btn btn-read-more rounded-1 py-2  px-4 mt-3"
                label={heroicData.view_our_program_text}
              />
            </div>
            <div className="col-4 mt-5">
              <CustomButton
                path={heroicData.online_application_form_link}
                btnClassName="btn btn-read-more rounded-1 px-4 py-2 mb-3"
                label={heroicData.online_application_form_text}
              />

              <h5 className="mt-2 animation-text">{heroicData.application_form.title}</h5>
              <p className="p-font-size-14 ">
                {heroicData.application_form.Description}
              </p>
              <div>
                <div className="hr-wrapper">
                  <hr />
                </div>
              </div>

              <h5 className="mt-3 animation-text">{heroicData.online_application_form.title}</h5>
              <p className="p-font-size-14">{heroicData.online_application_form.Description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MotionCard;
