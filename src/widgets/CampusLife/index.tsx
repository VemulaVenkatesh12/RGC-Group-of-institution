import React from "react";
import "./campuslife.css";
import CampusLifeCard from "./campusLifeCard";
import CustomButton from "../CustomButton";
import { CampusLifes } from "../../services/About_Courses_landing_page";
import { getFullImageUrl } from "../../services/actualPath";
interface ICampusLifeProps {
  campusLife : CampusLifes | undefined
}
const CampusLife: React.FC<ICampusLifeProps> = ({ campusLife
}) => { 

  if (!campusLife) {
    return ;
  }
  return (
    <>
      <div className="campus-bg p-5">
        <div className="container p-0">
          <div className="row mb-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h5 className="campus-primary-text mb-0">{campusLife?.title}</h5>
              <h2 className="campus-secondary-text">{campusLife?.subtitle}</h2>
              <p className="campus-description text-break">
                {" "}
                {campusLife?.Description.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 my-auto">
              <div className="d-flex flex-wrap justify-content-between">
                <CustomButton
                  path={campusLife?.Acadamics_link}
                  btnClassName="btn campus-btn-1 rounded-1 py-2 ms-auto me-4 text-nowrap my-md-0 my-2"
                  label={campusLife?.acadamics_text}
                />
                <CustomButton
                  path={campusLife?.campus_life_link}
                  btnClassName="btn campus-btn-2 rounded-1 py-2"
                  label={campusLife?.campus_life_text}
                />
              </div>
            </div>
          </div>
          <div className="row">
            {campusLife.details?.map((detail) => (
              <div key={detail.id} className="col-lg-3 col-md-3 col-sm-12">
                <CampusLifeCard 
                  topic={detail.name} 
                  image={getFullImageUrl(detail.image.formats.large.url) || ""} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


export default CampusLife;