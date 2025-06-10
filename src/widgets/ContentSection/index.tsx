import React, { CSSProperties } from "react";
import CustomButton from "../CustomButton";

export interface IContentSectionProps {
  primaryHeader?: string;
  secondaryHeader?: string;
  description: string;
  navigateTo?: string;
  imageStyle?: CSSProperties;
  btnLabel?: string;
}

const ContentSection: React.FC<IContentSectionProps> = ({
  primaryHeader,
  secondaryHeader = "",
  description,
  navigateTo = "",
  btnLabel = "",
}) => {
  return (
    <div className="mt-md-0 mt-4 p-md-2 p-2">
      <h6 className="fw-bold">{primaryHeader}</h6>
      <h3 className="fw-bold">{secondaryHeader}</h3>
      <p className="p-font-size-14">{description}</p>

      {btnLabel && (
        <CustomButton
          label={btnLabel}
          path={navigateTo}
          btnClassName="btn-md p-2 px-4 rounded-1 mt-3 text-white red-btn"
        />
      )}
    </div>
  );
};

export default ContentSection;
