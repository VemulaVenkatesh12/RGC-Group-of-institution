import React from "react";

interface DepartmentCardProps {
  title: string;
  description: string;
  image: string;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ title, description, image }) => {
  return (
    <div className="col-16 col-lg-15">
      <div className="row g-3 align-items-start">
        {/* Left: Scrollable Content */}
        <div className="col-lg-8 col-md-12">
          <div
            style={{
              height: "490px",
              overflowY: "auto",
              paddingRight: "15px", // spacing between text and image
               scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none"
            }}
            className="hide-scrollbar"
          >
            <h5 className="fw-bold mb-3">{title}</h5>
  
            {/* Description */}
            <p style={{ lineHeight: "1.6", fontSize: "1rem", textAlign: "justify" }}>
              {description}
            </p>
          </div>
        </div>
  
        {/* Right: Image */}
        <div className="col-lg-4 col-md-12 text-center pe-lg-0">
          <img
            src={image}
            alt={title}
            className="img-fluid rounded"
            style={{
              height: "490px",
              objectFit: "cover",
              width: "100%",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;
