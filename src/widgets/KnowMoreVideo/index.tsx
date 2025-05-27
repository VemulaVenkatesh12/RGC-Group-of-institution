import React, { useState } from "react";
import "../KnowMoreVideo/knowmore.css";
import { Typography, Modal, Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface IKnowMoreVideoProps {
  imagePath: string;
  text: string;
  description: string;
  videoUrl?: string; // Add video URL prop
}

const KnowMoreVideo: React.FC<IKnowMoreVideoProps> = ({
  imagePath,
  text,
  description,
  videoUrl,
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayButtonClick = () => {
    if (videoUrl) {
      setIsVideoOpen(true);
    }
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    height: '68vh', 
    bgcolor: 'rgba(0, 0, 0, 0.9)',
    boxShadow: 24,
    p: 0,
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      <div className="infobg">
        <div className="d-flex flex-column align-items-center">
          <img
            src={imagePath}
            className="img-fluid playbtn"
            alt="play-button"
            onClick={handlePlayButtonClick}
            style={{ cursor: videoUrl ? 'pointer' : 'default' }}
          />

          <Typography
            sx={{
              color: "var(--color-white)",
              fontWeight: "var(--font-weight-600)",
            }}
            component="h2"
          >
            {text}
          </Typography>
          <div className="w-75">
            <p className="text-white">{description}</p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        open={isVideoOpen}
        onClose={handleCloseVideo}
        aria-labelledby="video-modal"
        aria-describedby="video-player-modal"
      >
        <Box sx={modalStyle}>
          {/* Close button */}
          <IconButton
            onClick={handleCloseVideo}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          
          
          {videoUrl && (
            <div className="container-fluid h-100 d-flex align-items-center justify-content-center p-0">
              <div className="row w-100 h-100 g-0">
                <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6 mx-auto d-flex align-items-center">
                  <video
                    className="w-100"
                    controls
                    autoPlay
                    style={{
                      maxHeight: '60vh',
                      objectFit: 'contain',
                    }}
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default KnowMoreVideo;