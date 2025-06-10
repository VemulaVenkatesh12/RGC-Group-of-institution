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
  heroicData: Block;
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
    <div className="position-relative overflow-hidden motion-card-container d-block">
      {/* Image Container */}
      <div className="d-flex justify-content-center align-items-center w-100 motion-images-wrapper">
        <MovingCard direction="left" position={{ x: 0, y: 0 }}>
          <img 
            src={getFullImageUrl(motionCardImages[0]) || undefined} 
            alt="moving-card-3" 
            className="img-fluid motion-card-image" 
          />
        </MovingCard>
        <MovingCard direction="top" position={{ x: 0, y: 0 }}>
          <img 
            src={getFullImageUrl(motionCardImages[1]) || undefined} 
            alt="moving-card-2" 
            className="img-fluid motion-card-image" 
          />
        </MovingCard>
        <MovingCard direction="right" position={{ x: 0, y: 0 }}>
          <img 
            src={getFullImageUrl(motionCardImages[2]) || undefined} 
            alt="moving-card-1" 
            className="img-fluid motion-card-image" 
          />
        </MovingCard>
      </div>

      {/* Text Overlay */}
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

          <motion.div
            className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center motion-text-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            style={{
              top: 0,
              left: 0,
              zIndex: 2,
            }}
          >
            <div className="container-fluid px-3 px-md-4">
              <div className="row justify-content-center">
                <div className="col-12">
                  {/* Main Title Section */}
                  <div className="text-center text-md-start mb-4 mb-md-0">
                    <Typography
                      component="div"
                      className="d-flex align-items-center justify-content-center justify-content-md-start mb-3"
                      sx={{
                        color: "var(--color-white)",
                        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        fontWeight: "var(--font-weight-600)",
                      }}
                    >
                      <SchoolOutlinedIcon
                        sx={{
                          color: "var(--color-white)",
                          marginRight: "8px",
                          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" }
                        }}
                      />
                      {heroicData.education_meets_quality.title}
                    </Typography>
                    
                    <h1 
                      className="text-white mb-4 motion-main-title"
                      style={{
                        fontSize: "clamp(1.5rem, 5vw, 3.5rem)",
                        fontWeight: "bold",
                        lineHeight: "1.1",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
                      }}
                    >
                      {heroicData.education_meets_quality.Description}
                    </h1>
                  </div>

                  {/* Mobile Layout */}
                  <div className="d-block d-md-none">
                    {/* Primary Button - Mobile */}
                    <div className="text-center mb-1">
                      <CustomButton
                        path={heroicData.view_our_program_link}
                        btnClassName="btn btn-read-more rounded-1 py-2 px-4 motion-primary-btn-mobile"
                        label={heroicData.view_our_program_text}
                      />
                    </div>

                    {/* Secondary Button - Mobile */}
                    <div className="text-center mb-1">
                      <CustomButton
                        path={heroicData.online_application_form_link}
                        btnClassName="btn btn-read-more rounded-1 px-3 py-2 motion-secondary-btn-mobile"
                        label={heroicData.online_application_form_text}
                      />
                    </div>
                    
                    {/* Info Content - Mobile */}
                    <div className="motion-mobile-content">
                      <div className="text-center mb-3">
                        <h6 
                          className="text-white mb-2"
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "600"
                          }}
                        >
                          {heroicData.application_form.title}
                        </h6>
                        <p 
                          className="text-white-50 mb-3"
                          style={{
                            fontSize: "0.75rem",
                            lineHeight: "1.3"
                          }}
                        >
                          {heroicData.application_form.Description}
                        </p>
                      </div>

                      <hr className="text-white-50 my-2" style={{width: "60%", margin: "0 auto"}} />

                      <div className="text-center">
                        <h6 
                          className="text-white mb-2"
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "600"
                          }}
                        >
                          {heroicData.online_application_form.title}
                        </h6>
                        <p 
                          className="text-white-50"
                          style={{
                            fontSize: "0.75rem",
                            lineHeight: "1.3"
                          }}
                        >
                          {heroicData.online_application_form.Description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="d-none d-md-block">
                    <div className="row g-3 align-items-start">
                      {/* Primary Button */}
                      <div className="col-md-6 col-lg-4">
                        <CustomButton
                          path={heroicData.view_our_program_link}
                          btnClassName="btn btn-read-more rounded-1 py-3 px-4 motion-primary-btn"
                          label={heroicData.view_our_program_text}
                        />
                      </div>

                      {/* Secondary Content */}
                      <div className="col-md-6 col-lg-8">
                        <div className="row g-3">
                          {/* Application Form Button */}
                          <div className="col-12 col-lg-6">
                            <CustomButton
                              path={heroicData.online_application_form_link}
                              btnClassName="btn btn-read-more rounded-1 px-4 py-2 mb-3 w-100 motion-secondary-btn"
                              label={heroicData.online_application_form_text}
                            />
                            
                            <div className="motion-info-section">
                              <h5 
                                className="text-white mb-2"
                                style={{
                                  fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                                  fontWeight: "600"
                                }}
                              >
                                {heroicData.application_form.title}
                              </h5>
                              <p 
                                className="text-white-50 mb-3"
                                style={{
                                  fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
                                  lineHeight: "1.4"
                                }}
                              >
                                {heroicData.application_form.Description}
                              </p>
                            </div>
                          </div>

                          {/* Online Application Info */}
                          <div className="col-12 col-lg-6">
                            <div className="motion-info-section">
                              <hr className="text-white-50 mb-3" />
                              <h5 
                                className="text-white mb-2"
                                style={{
                                  fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                                  fontWeight: "600"
                                }}
                              >
                                {heroicData.online_application_form.title}
                              </h5>
                              <p 
                                className="text-white-50"
                                style={{
                                  fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
                                  lineHeight: "1.4"
                                }}
                              >
                                {heroicData.online_application_form.Description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default MotionCard;