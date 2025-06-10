import React, { CSSProperties, ReactNode } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./infoImageSection.css";
import ContentSection from "../ContentSection";

export interface IInfoImageSectionProps {
  primaryHeader?: string;
  secondaryHeader?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  backgroundColor?: string;
  card?: ReactNode;
  imageStyle?: CSSProperties;
  navigateTo?: string;
  btnLabel?: string;
}

const InfoImageSection: React.FC<IInfoImageSectionProps> = ({
  primaryHeader = "",
  secondaryHeader = "",
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  backgroundColor = "",
  card = undefined,
  imageStyle = {},
  navigateTo = "",
  btnLabel = "",
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div className="position-relative pt-md-3 pb-md-5" style={{ backgroundColor }}>
      <Container className="mt-3 p-0">

          {primaryHeader && (
    <h6 className="px-2 ">{primaryHeader}</h6>
  )}
        <Row
          className={`align-items-center flex-column-reverse flex-lg-row ${
            isImageLeft ? "" : "flex-lg-row-reverse"
          }`}
        >
          {/* Text Section */}
          <Col xs={12} lg={6} className={`px-1`}>
            <ContentSection
              secondaryHeader={secondaryHeader}
              description={description}
              navigateTo={navigateTo}
              btnLabel={btnLabel}
            />
          </Col>

          {/* Image Section */}
          <Col xs={12} lg={6} style={imageStyle} className="text-center mb-4">
    
            <Image
              src={imageSrc}
              alt={imageAlt}
              fluid
              className={`w-100 ${card ? "p-5" : ""}`}
            />
            {card && (
              <div className="position-absolute top-50 start-50 translate-middle">
                {card}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoImageSection;
