import React from "react";
import Banner from "../../widgets/Banner";
import DepartmentCard from "../../widgets/DepartmentCard";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import campusBanner from "../../Images/campusfacilitiesbanner.png";
import mbaImage from "../../Images/mba.jpg"; // or use URL directly if external

const StudentCellData: React.FC = () => {
  const title = "Students Cell";
  const description = `
    Our MBA program develops strategic thinking, leadership, and business acumen across domains like finance, marketing, operations, and HR. 
    The curriculum is aligned with industry standards and fosters real-world decision-making.
  `;
  const image = mbaImage; // or use direct URL string

  return (
    <>
      <Banner
        bannerText="Students Cell"
        bannerImageClassName="rgc-student-scholarship-banner"
        breadCrumbsList={[
          { label: "Campus Life", to: "/campus-life" },
        ]}
        bannerImageUrl={campusBanner}
      />

      <div className="container py-5">
        <DepartmentCard
          title={title}
          description={description}
          image={image}
        />
      </div>

      <IFrameBanner requiredFooterBorder={false} />
      <ContactBanner />
    </>
  );
};

export default StudentCellData;
