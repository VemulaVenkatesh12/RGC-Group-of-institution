import React from "react";
import { Link } from "react-router-dom";
interface ITitleAndMetaProps {
  primaryHeader?: string;
  secondaryHeader?: string;
  description: string;
  visitLink?: string;
  visitText?: string;
}

const TitleAndMeta: React.FC<ITitleAndMetaProps> = ({
  primaryHeader = "",
  secondaryHeader = "",
  description,
  visitLink = "",
  visitText = "",
}) => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className=" col-md-4 col-lg-4  col-sm-12  ps-0">
            <h3 className="fw-bold">{primaryHeader}</h3>
            <h5 className="fw-bold">{secondaryHeader}</h5>
          </div>
          <div className="col-md-8 col-lg-8 col-sm-12 ps-0">
            <p className="p-color p-font-size-14">{description}</p>
            {visitLink && (
              <>
                <p className="p-color p-font-size-14 mt-3">
                  {visitText}{" "}
                  <span className="d-block d-sm-inline">
                    <Link
                      className="fw-bold online-app-link text-break"
                      target="_blank"
                      to={visitLink}
                    >
                      {visitLink}
                    </Link>
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleAndMeta;
