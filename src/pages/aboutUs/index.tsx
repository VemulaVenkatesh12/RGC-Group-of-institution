import React, { useEffect, useState } from "react";
import ValueVision from "../../widgets/ValueVision";
import EnquiryForm from "../../widgets/EnquiryForm";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import Banner from "../../widgets/Banner";

import "../aboutUs/aboutUs.css";
import TitleAndMeta from "../../widgets/TitleAndMeta";
import InfoImageSection from "../../widgets/InfoImageSection";
import { AboutRGCResponseData, getAboutRGCData } from "../../services/aboutRGC";
import { VisionMissionData } from "../../services/visionMision";
import { fetchVisionMissionData } from "../../utils/utilityFunctionServices";
import { getFullImageUrl } from "../../services/actualPath";
const AboutUs: React.FC = () => {
  const [aboutRGCData, setaboutRGCData] = useState<AboutRGCResponseData | null>(
    null
  );
  const [visionData, setVisionData] = useState<VisionMissionData | null>(null);
  const fetchAboutRGCData = () => {
    getAboutRGCData()
      .then((response) => {
        const count = response.data;
        setaboutRGCData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchAboutRGCData();
    fetchVisionMissionData(setVisionData);
  }, []);

  const getComponentByType = (type: string) => {
    return aboutRGCData?.about?.find((item) => item.__component === type);
  };

  const overviewData = getComponentByType("about-us.overview");
  const trustData = getComponentByType("about-us.our-trust");
  const healthServiceData = getComponentByType("about-us.health-service");
  const educationalServicesData = getComponentByType(
    "about-us.educational-services"
  );
  const groupCampusData = getComponentByType("about-us.group-campus");

  return (
    <>
      <Banner
        bannerText={aboutRGCData?.title}
        bannerImageClassName="rgc-student-success-banner"
        bannerLink={aboutRGCData?.banner_about_us_text}
        breadCrumbsList={[
          {
            label: aboutRGCData?.banner_about_us_text || "About us",
            to: aboutRGCData?.banner_about_us_link || "#",
          },
        ]}
        bannerImageUrl={getFullImageUrl(aboutRGCData?.image.formats.large.url) || ""}
      />
      <TitleAndMeta
        primaryHeader={overviewData?.title}
        secondaryHeader={overviewData?.subtitle}
        description={overviewData?.Description || ""}
      />
      <div className="container my-5">
        <img
          className="img-fluid"
          src={getFullImageUrl(overviewData?.image?.url) || ""}
          alt="about-us-banner-2"
        />
      </div>
      <div>
        <ValueVision
          title={visionData?.values_vision.subtitle}
          smallText={visionData?.values_vision.title}
          image={getFullImageUrl(visionData?.values_vision.image.url) || ""}
          description1={visionData?.values_vision?.content ?? ""}
        />
      </div>
      <div>
        <InfoImageSection
          primaryHeader={trustData?.title || ""}
          secondaryHeader={trustData?.subtitle || ""}
          description={trustData?.Description || ""}
          imageSrc={getFullImageUrl(trustData?.image?.url) || ""}
          imageAlt="college-img"
          imagePosition="left"
        />
        <div className="affiliations-bg">
          <div className="container py-5 p-0">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <h3 className="text-white fw-bold">
                  {aboutRGCData?.Accreditations_Affiliations?.title}
                </h3>
                <p className="text-white">
                  {aboutRGCData?.Accreditations_Affiliations?.subtitle}
                </p>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12"></div>
            </div>
            <div className="row">
              {aboutRGCData?.Accreditations_Affiliations?.Acc_Aff.map(
                (affiliation, index) => (
                  <div
                    key={affiliation.id}
                    className="col-lg-3 col-md-3 col-sm-12 py-0"
                  >
                    <div className="card px-3 py-3 rounded-0 bg-white affiliations-card mt-5">
                      <div className="card-body p-2 d-flex flex-column align-items-center justify-content-around">
                        <img
                          src={getFullImageUrl(affiliation.image?.url) || ""}
                          alt={`affiliations-img-${index + 1}`}
                          className="img-fluid affiliations-img w-50"
                        />
                        <h5 className="fw-bold mb-4 text-center">
                          {affiliation.text}
                        </h5>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <InfoImageSection
          primaryHeader={healthServiceData?.title}
          secondaryHeader={healthServiceData?.subtitle}
          description={healthServiceData?.Description || ""}
          imageSrc={getFullImageUrl(healthServiceData?.image?.formats.large.url) || ""}
          imageAlt="college-img"
          imagePosition="right"
        />

        <div className="mt-5">
          <ValueVision
            subHeading={educationalServicesData?.title}
            image={getFullImageUrl(educationalServicesData?.image?.url) || ""}
            description1={educationalServicesData?.Description || ""}
          />
        </div>
        <InfoImageSection
          primaryHeader={groupCampusData?.title}
          secondaryHeader={groupCampusData?.subtitle}
          description={groupCampusData?.Description || ""}
          imageSrc={getFullImageUrl(groupCampusData?.image?.formats.large.url) || ""}
          imageAlt="college-img"
          imagePosition="left"
        />
      </div>
      <EnquiryForm />
      <IFrameBanner requiredFooterBorder={false} />
      <ContactBanner />
    </>
  );
};

export default AboutUs;
