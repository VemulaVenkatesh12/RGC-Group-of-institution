import React from "react";

export interface IImageContentCardProps {
  logo: string;
  title: string;
  description: string;
  backgroundColor?: string;
}
const ImageContentCard: React.FC<IImageContentCardProps> = ({
  logo,
  title,
  description,
  backgroundColor = "",
}) => {
  return (
    <>
      <div className="card rounded-0  p-3" style={{ backgroundColor }}>
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-5 ">
            <img src={logo} alt="logo" className="img-fluid w-75" />
          </div>
          <div className="col-lg-6">
            <div className="d-inline-block ">
              <h2 className="fw-bold">{title}</h2>
              <p className="p-font-size-14">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageContentCard;
