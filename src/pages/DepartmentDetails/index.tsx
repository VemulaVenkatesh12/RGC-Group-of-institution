import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DepartmentCard from "../../widgets/DepartmentCard";
import Banner from "../../widgets/Banner";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import { CampusLifeResponseData, getCampusLifeData } from "../../services/campusLife";
import campusBanner from "../../Images/campusfacilitiesbanner.png";
import ece from "../../Images/ece.jpg";
import wificampus from "../../Images/wificampus.png";


// Sample department data
const departmentDetails: Record<
  string,
  { title: string; description: string; image: string }
> = {
  "ece": {
    title: "Electronics & Communication Engineering",
    description: "Focuses on circuits, communication systems, embedded systemsContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,1.10.32.",
    image: wificampus,
  },
  "biomed-nano": {
    title: "Bio-medical Engineering / Nanotechnology",
    description: "Combines medical and nanoscale technology for research and innovation.",
    image: "/images/biomed.png",
  },
  "eee-energy": {
    title: "Electrical & Electronics / Energy Systems",
    description: "Covers power systems, electronics, and renewable energy technologies.",
    image: "/images/eee.png",
  },
  "mech-material": {
    title: "Mechanical / Material Science",
    description: "Deals with design, manufacturing, and advanced materials.",
    image: "/images/mech.png",
  },
  "civil": {
    title: "Civil Engineering",
    description: "Specializes in construction, planning, and infrastructure development.",
    image: "/images/civil.png",
  },
  "cse": {
    title: "Computer Science & Engineering",
    description: "Focuses on programming, AI, databases, and systems.",
    image: "/images/cse.png",
  },
  "basic-science": {
    title: "Basic Science",
    description: "Lays the foundation with Physics, Chemistry, and Mathematics.",
    image: "/images/science.png",
  },
    "mba": {
        title: "Master of Business Administration(MBA)",
        description: "Explore our engineering departments for innovative education.",
        image: "https://rgc.edu.in/images/mba.jpg",
    },
};

const DepartmentDetails: React.FC = () => {
  const { deptId } = useParams<{ deptId: string }>();
  const [campusLifeData, setCampusLifeData] = useState<CampusLifeResponseData | null>(null);
  const dept = departmentDetails[deptId ?? ""];

  useEffect(() => {
    const fetchCampusLifeData = async () => {
      try {
        const response = await getCampusLifeData();
        setCampusLifeData(response.data);
      } catch (error) {
        console.error("Error fetching campus life data:", error);
      }
    };
    fetchCampusLifeData();
  }, []);

  if (!dept) {
    return <h4 className="text-center py-5">Department not found</h4>;
  }

  return (
    <>
      <Banner
        bannerText={dept.title}
        bannerImageClassName="rgc-student-scholarship-banner"
        breadCrumbsList={[
          {
            label: campusLifeData?.banner_campus_life_text || "",
            to: campusLifeData?.banner_campus_life_link || "#",
          },
        ]}
        bannerImageUrl={campusBanner}
      />

      <div className="container py-5 mx-auto">
        <DepartmentCard
          title={dept.title}
          description={dept.description}
          image={dept.image}
        />
      </div>

      <IFrameBanner requiredFooterBorder={false} />
      <ContactBanner />
    </>
  );
};

export default DepartmentDetails;
