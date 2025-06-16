import React from "react";
import "./deptcard.css"

interface Section {
  title: string | null;
  description: string;
}

interface DepartmentCardProps {
  title: string;
  sections: Section[];
  images: string[];
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ title, sections, images }) => {
  return (
    <div className="col-16 col-lg-15" style={{ padding: "50px 100px" }}>
      <div className="row g-3 align-items-start">
        {/* Left: Scrollable Content */}
        <div className="col-lg-8 col-md-12">
          <div
            style={{
              height: "490px",
              overflowY: "auto",
              paddingRight: "15px",

            }}
            className="hide-scrollbar"
          >
            {sections.map((section, index) => (
              <div key={index} className="mb-4">
                {section.title && (
                  <h6 className="fw-bold mb-2">{section.title}</h6>
                )}

                <div style={{ lineHeight: "1.7", fontSize: "1rem", textAlign: "justify" }}>
                  {renderFormattedText(section.description)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: First Image */}
        <div className="col-lg-4 col-md-12 text-center pe-lg-0">
          {images.length > 0 && (
            <img
              src={images[0]}
              alt={title}
              className="img-fluid rounded"
              style={{
                height: "490px",
                objectFit: "cover",
                width: "100%",
                borderRadius: "4px",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Helper to render paragraph, line breaks, and bullets
function renderFormattedText(text: string): React.ReactNode[] {
  const lines = text.split(/\n{1,2}/); // Split by \n or \n\n

  return lines.map((line, idx) => {
    const trimmed = line.trim();

    // Handle bullet points starting with - or •
    if (/^[-•]\s+/.test(trimmed)) {
      return (
        <ul className="section-bullets" key={`ul-${idx}`}>
          <li style={{ fontSize: "1.1rem", marginBottom: "5px" }}>
            {trimmed.replace(/^[-•]\s+/, "")}
          </li>
        </ul>
      );
    }

    // If empty, render as a double line break
    if (trimmed === "") {
      return (
        <React.Fragment key={`br-${idx}`}>
          <br />
          <br />
        </React.Fragment>
      );
    }

    // Normal paragraph
    return (
      <p key={`p-${idx}`} style={{ marginBottom: "10px" }}>
        {trimmed}
      </p>
    );
  });
}

export default DepartmentCard;
