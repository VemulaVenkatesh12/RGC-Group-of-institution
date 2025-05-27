import React from "react";
import { Typography } from "@mui/material";

import "./homeRibbon.css";
export interface IHomeRibbonBannerProps {
  primaryText: string;
  secondaryText: string;
  description: string;
}

interface IHomeRibbonProps {
  data: IHomeRibbonBannerProps[];
}

const HomeRibbonBanner: React.FC<IHomeRibbonProps> = ({ data }) => {
  return (
    <>
      <div className="home-ribbon-banner ribbon d-none d-lg-block">
        <div className="container bg-white shadow p-4">
          <div className="row">
            {data.map((item: IHomeRibbonBannerProps, index: number) => (
              <div className="col-lg-4 col-md-4 col-sm-4" key={index}>
                <div className="d-flex justify-content-center align-items-center">
                  <Typography
                    sx={{
                      color: "var(--color-pure-black)",
                      fontSize: "var(--font-size-48)",
                      fontWeight: "var(--font-weight-600)",
                    }}
                    variant="h2"
                    component="h2"
                  >
                    {item.primaryText}
                  </Typography>
                  <div className="ms-2">
                    <h5 className="ribbon-title mb-0">{item.secondaryText}</h5>
                    <p className="p-font-size-14">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="d-block d-md-none my-3 ">
        <div className="container bg-white p-4 py-0">
          <div className="row">
            {data.map((item: IHomeRibbonBannerProps, index: number) => (
              <div className="row mt-2">
                <div className="col-md-6 col-sm-12" key={index}>
                  <div className="d-flex justify-content-center align-items-center">
                    <Typography
                      sx={{
                        color: "var(--color-pure-black)",
                        fontSize: "var(--font-size-48)",
                        fontWeight: "var(--font-weight-600)",
                      }}
                      variant="h2"
                      component="h2"
                    >
                      {item.primaryText}
                    </Typography>
                  </div>
                  <div className="ms-2  col-md-6 col-sm-12" key={index}>
                    <h5 className="ribbon-title mb-0 text-center">
                      {item.secondaryText}
                    </h5>
                    <p className="p-font-size-14 text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRibbonBanner;
