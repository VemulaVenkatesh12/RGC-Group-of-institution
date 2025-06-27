import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import "./motionCard.css";
import CustomButton from "../../CustomButton";
import { HeroicDataResponseData } from "../../../services/ribbonHeroicData";

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
  heroicData: HeroicDataResponseData;
}

const MotionCard: React.FC<MotionCardProps> = ({
  motionCardImages,
  heroicData,
}) => {
  const [showText, setShowText] = useState(false);
  const [showFirstDiv, setShowFirstDiv] = useState(false);
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
      setShowFirstDiv(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showFirstDiv) {
      const secondDivTimer = setTimeout(() => {
        setShowSecondDiv(true);
      }, 2000);

      return () => clearTimeout(secondDivTimer);
    }
  }, [showFirstDiv]);

  const motionCardsConfig = [
    { direction: "left" as const, alt: "moving-card-3", imageIndex: 0 },
    { direction: "top" as const, alt: "moving-card-2", imageIndex: 1 },
    { direction: "right" as const, alt: "moving-card-1", imageIndex: 2 },
  ];

  const renderMotionCards = () => {
    return motionCardsConfig.map((card, index) => (
      <MovingCard
        key={index}
        direction={card.direction}
        position={{ x: 0, y: 0 }}
      >
        <img
          src={motionCardImages[card.imageIndex] || ""}
          alt={card.alt}
          className="img-fluid"
        />
      </MovingCard>
    ));
  };


  return (
    <>
      {/* Small devices (Mobile only) */}
      <div className="position-relative overflow-hidden motion-card-container d-block d-md-none">
        <div className="d-flex justify-content-center align-items-center">
          {renderMotionCards()}
        </div>

        {showText && (
          <>
            <motion.div
              className="back-blur position-absolute"
              style={{ top: 0, left: 0, zIndex: 1, }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <div
              className="container-fluid position-absolute"
              style={{
                top: "23%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                color: "var(--color-white)",
              }}
            >
              <div className="row justify-content-center align-items-center">
                <motion.div
                  className="col-12"
                  initial={{ opacity: 0, y: 50 }}
                  animate={showFirstDiv ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <div className="text-center px-2">
                    <Typography
                      sx={{
                        color: "var(--color-white)",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                      component="h6"
                      className="mb-1"
                    >
                      <SchoolOutlinedIcon
                        sx={{
                          color: "var(--color-white)",
                          marginRight: "6px",
                        }}
                      />
                      {heroicData?.education_meets_quality?.title ?? ""}
                    </Typography>
                    <h6
                      className="text-white"
                      style={{
                        fontSize: "16px", 
                        fontWeight: "bold",
                        lineHeight: "1.3",
                        marginBottom: "90px",
                      }}
                    >
                      {heroicData?.education_meets_quality?.Description ?? ""}
                    </h6>
                    <div className="d-flex flex-column gap-2 mt-5 align-items-center">
                      <CustomButton
                        path={heroicData?.view_our_program_link}
                        btnClassName="btn btn-sm py-1 px-2 btn-custom-red"
                        label={heroicData?.view_our_program_text ?? ""}

                      />
                      <CustomButton
                        path={heroicData?.online_application_form_link}
                        btnClassName="btn btn-sm btn-outline-light py-1 px-2 btn-custom-red"
                        label={heroicData?.online_application_form_text ?? ""}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Medium to Large devices */}
      <div className="position-relative overflow-hidden motion-card-container d-none d-md-block d-xl-none">
        <div className="d-flex justify-content-center align-items-center w-100">
          {renderMotionCards()}
        </div>

        {showText && (
          <>
            <motion.div
              className="back-blur position-absolute"
              style={{ top: 0, left: 0, zIndex: 1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div
              className="container-fluid position-absolute"
              style={{
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                color: "var(--color-white)",
              }}
            >
              <div className="row justify-content-center align-items-center">
                <motion.div
                  className="col-12"
                  initial={{ opacity: 0, y: 50 }}
                  animate={showFirstDiv ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <div className="text-center">
                    <Typography
                      sx={{
                        color: "var(--color-white)",
                        fontSize: "var(--font-size-14)",
                        fontWeight: "var(--font-weight-600)",
                      }}
                      component="h5"
                      className="mb-3"
                    >
                      <SchoolOutlinedIcon sx={{ color: "var(--color-white)", marginRight: "10px" }} />
                      {heroicData?.education_meets_quality?.title ?? ""}
                    </Typography>
                    <h3 className="text-white primary-animation-text"
                      style={{
                        marginBottom: "140px",
                      }}>
                      {heroicData?.education_meets_quality?.Description ?? ""}
                    </h3>
                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
                      <CustomButton
                        path={heroicData?.view_our_program_link}
                        btnClassName="btn btn-read-more rounded-1 py-2 px-4"
                        label={heroicData?.view_our_program_text ?? ""}
                      />
                      <CustomButton
                        path={heroicData?.online_application_form_link}
                        btnClassName="btn btn-outline-light btn-read-more rounded-1 py-2 px-4"
                        label={heroicData?.online_application_form_text ?? ""}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Extra-Large Devices */}
      <div className="position-relative overflow-hidden motion-card-container d-none d-xl-flex">
        <div className="d-flex justify-content-center align-items-center w-100">
          {renderMotionCards()}
        </div>

        {showText && (
          <>
            <motion.div
              className="back-blur position-absolute w-100 h-100"
              style={{ top: 0, left: 0, zIndex: 1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div
              className="container-fluid position-absolute"
              style={{
                top: "65%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                color: "var(--color-white)",
              }}
            >
              <div className="row justify-content-center align-items-center">
                <motion.div
                  className="col-xl-7 col-lg-8"
                  initial={{ opacity: 0, x: -50 }}
                  animate={showFirstDiv ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <Typography
                    sx={{
                      color: "var(--color-white)",
                      fontSize: "var(--font-size-14)",
                      fontWeight: "var(--font-weight-600)",
                    }}
                    component="h5"
                    className="mb-3"
                  >
                    <SchoolOutlinedIcon sx={{ color: "var(--color-white)", marginRight: "10px" }} />
                    {heroicData?.education_meets_quality?.title ?? ""}
                  </Typography>
                  <h2 className="text-white primary-animation-text mb-4">
                    {heroicData?.education_meets_quality?.Description ?? ""}
                  </h2>
                  <CustomButton
                    path={heroicData?.view_our_program_link}
                    btnClassName="btn btn-read-more rounded-1 py-2 px-4 mt-3"
                    label={heroicData?.view_our_program_text ?? ""}
                  />
                </motion.div>

                <motion.div
                  className="col-xl-3 col-lg-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={showSecondDiv ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 40,
                    damping: 12,
                  }}
                >
                  <div className="p-4 bg-opacity-75 rounded-3">
                    <CustomButton
                      path={heroicData?.online_application_form_link}
                      btnClassName="btn btn-read-more rounded-1 px-4 py-2 mb-3 w-100"
                      label={heroicData?.online_application_form_text ?? ""}
                    />

                    <h5 className="mt-3 mb-2 text-white fw-bold">
                      {heroicData?.application_form?.title ?? ""}
                    </h5>
                    <p className="text-white-50 small mb-3">
                      {heroicData?.application_form?.Description ?? ""}
                    </p>

                    <hr className="border-white-50 my-3" />

                    <h5 className="mt-3 mb-2 text-white fw-bold">
                      {heroicData?.online_application_form?.title ?? ""}
                    </h5>
                    <p className="text-white-50 small mb-0">
                      {heroicData?.online_application_form?.Description ?? ""}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MotionCard;
