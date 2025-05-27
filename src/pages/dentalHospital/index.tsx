import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import EnquiryForm from "../../widgets/EnquiryForm";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import "./dentalHospital.css";
import InfoImageSection from "../../widgets/InfoImageSection";
import { DentalHospitalResponseData, getdentalHospitalData } from "../../services/dentalCenter";
import { getFullImageUrl } from "../../services/actualPath";
const DentalHospital: React.FC = () => {
    const [galleryData, setGalleryData] = useState<DentalHospitalResponseData | null>(null);
    
        const fetchDentalHospitalData = () => {
            getdentalHospitalData()
              .then((response) => {
                const count = response.data;
                setGalleryData(count);
              })
              .catch((error) => {
                console.log(error);
              });
          };
          useEffect(() => {
            fetchDentalHospitalData();
          }, []);

  const bannerImageUrl = galleryData?.banner_image?.formats?.large?.url || "";
  const infoSection = galleryData?.Dental_Hospital;
  return (
    <>
      <Banner
        bannerText={galleryData?.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
              {
                label: galleryData?.banner_Campus_facilities_text || "",
                to: galleryData?.banner_Campus_facilities_link || ""
              },
              {
                label: galleryData?.banner_dental_hospital_text || "",
                to: galleryData?.banner_dental_hospital_link || ""
              }
            ]}
        bannerImageUrl={getFullImageUrl(bannerImageUrl) || ""}
      />
      <div className="pt-3 pb-3 dental-hospital-bg">
        <InfoImageSection
          primaryHeader={infoSection?.title}
          secondaryHeader={infoSection?.subtitle?.trim()}
          description={infoSection?.Description || ""}
          imageSrc={getFullImageUrl(infoSection?.image?.formats?.large?.url) || ""}
          imageAlt="college-img"
          imagePosition="right"
        />
      </div>

      <div>
        <EnquiryForm
        />
      </div>
      <div>
        <IFrameBanner requiredFooterBorder={false} />
      </div>
      <div>
        <ContactBanner />
      </div>
    </>
  );
};

export default DentalHospital;
