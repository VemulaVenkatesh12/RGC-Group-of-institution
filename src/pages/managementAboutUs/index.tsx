import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import ContactBanner from "../../widgets/ContactBanner";
import EnquiryForm from "../../widgets/EnquiryForm";
import "../managementAboutUs/managementAboutUs.css";
import { Typography } from "@mui/material";
import LeadershipCard from "../../widgets/LeadershipCard";
import IFrameBanner from "../../widgets/iFrameBanner";
import CustomButton from "../../widgets/CustomButton";
import {
  getOurManagementData,
  OurManagementResponseData,
} from "../../services/ourManagement";
import { getFullImageUrl } from "../../services/actualPath";

const OurManagement: React.FC = () => {
  const [ourManagementData, setOurManagementData] =
    useState<OurManagementResponseData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchManagementData = () => {
    setIsLoading(true);
    getOurManagementData()
      .then((response) => {
        setOurManagementData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchManagementData();
  }, []);

  if (isLoading || !ourManagementData) {
    return null;
  }

  const chairmanData = ourManagementData.block[0];
  const leadershipData = ourManagementData.Leadership_Management;

  return (
    <>
      <Banner
        bannerText={ourManagementData.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label: ourManagementData?.banner_Campus_facilities_text || "",
            to: ourManagementData?.banner_Campus_facilities_link || "",
          },
          {
            label: ourManagementData?.banner_gallery_text || "",
            to: ourManagementData?.banner_gallery_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(ourManagementData.banner_image?.formats.large.url) ||
          ""
        }
      />
      <section className="chairman-bg p-1">
        <div className="container pb-5 p-0">
          <div className="row mt-5">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#181818",
                  fontWeight: "var(--font-weight-600)",
                }}
                component="p"
              >
                {chairmanData.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "32px",
                  color: "#181818",
                  fontWeight: "var(--font-weight-600)",
                }}
                variant="h3"
                component="h3"
              >
                {chairmanData.subtitle}
              </Typography>
              <Typography
                mt={4}
                sx={{
                  fontSize: "14px",
                  color: "#525271",
                }}
              >
                {chairmanData.Description}
              </Typography>
              <p className="mt-4 chairman-text p-font-size-16">
                {chairmanData.chairman_name}
              </p>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#525271",
                }}
              >
                {chairmanData.date}
              </Typography>
              <CustomButton
                path={chairmanData.Know_More_link}
                btnClassName="btn mt-4 reach-us-btn mb-3"
                label={chairmanData.Know_More_text}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <img
                src={
                  getFullImageUrl(chairmanData.image?.formats.large.url) || ""
                }
                className="img-fluid"
                alt={chairmanData.image?.name || "chairman-pic"}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-5">
          <div className="text-center">
            <Typography
              sx={{
                fontSize: "16px",
                color: "#181818",
                fontWeight: "var(--font-weight-600)",
              }}
              component="p"
            >
              {leadershipData.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "var(--font-size-32)",
                fontWeight: "var(--font-weight-600)",
              }}
            >
              {leadershipData.subtitle}
            </Typography>
          </div>
          <div className="container p-0">
            <div className="row">
              {leadershipData.Leadership_Management.map((leader) => (
                <div
                  key={leader.id}
                  className="col-lg-4 col-md-4 col-sm-4 p-md-5 p-2"
                >
                  <LeadershipCard
                    title={leader.name}
                    description={leader.title}
                    cardImg={
                      getFullImageUrl(leader.image?.formats.large.url) || ""
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mt-5">
        <EnquiryForm />
        <IFrameBanner requiredFooterBorder={false} />
        <ContactBanner />
      </div>
    </>
  );
};

export default OurManagement;
