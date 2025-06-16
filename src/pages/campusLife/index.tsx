import React, { useEffect, useRef, useState } from "react";
import campusBanner from "../../Images/campusfacilitiesbanner.png";
import busimage from "../../Images/busimage.png";
import collegehostel from "../../Images/College hostel.png";
import computerlab from "../../Images/Computerlab.png";
import researchcentre from "../../Images/Researchcentre.png";
import studenthostel from "../../Images/StudentHostel.png";
import wificampus from "../../Images/wificampus.png";
import games from "../../Images/games.png";
import Banner from "../../widgets/Banner";
import { GoArrowUpRight } from "react-icons/go";
import "./campusLife.css";
import KnowMoreVideo from "../../widgets/KnowMoreVideo";
import EnquiryForm from "../../widgets/EnquiryForm";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";

import InfoImageSection from "../../widgets/InfoImageSection";
import {
  CampusLifeResponseData,
  getCampusLifeData,
} from "../../services/campusLife";
import { fetchTourData } from "../../utils/utilityFunctionServices";
import { TourResPonseData } from "../../services/takeATour";
import { getFullImageUrl } from "../../services/actualPath";
const CampusLife: React.FC = () => {
  const [campusLifeData, setcampusLifeData] =
    useState<CampusLifeResponseData | null>(null);
  const [playButtonUrl, setPlayButtonUrl] = useState<string>("");
  const [tourData, setTourData] = useState<TourResPonseData | null>(null);

  const fetchCampusLifeData = async () => {
    try {
      const response = await getCampusLifeData();
      setcampusLifeData(response.data);
    } catch (error) {
      console.error("Error fetching campus life data:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchCampusLifeData();
    fetchTourData(setTourData, setPlayButtonUrl);
  }, []);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to determine image position for InfoImageSection
  const getImagePosition = (index: number): "left" | undefined => {
    return index % 2 === 1 ? "left" : undefined;
  };

  // Function to determine background color for InfoImageSection
  const getBackgroundColor = (index: number): string | undefined => {
    return index % 2 === 0 ? "var(--color-off-white-gray)" : undefined;
  };

  const facilitiesData = [
    {
      primaryHeader: "Transportation",
      description:
        "College buses are available to the students for daily trips and various academic and other programs. In addition, many public transports are also connected to the campus location.",
      imageSrc: busimage,
      imageAlt: "Transportation Schedule",
      backgroundColor: "bg-green-50",
      imagePosition: "right",
      navigateTo: "https://example.com/schedule",
    },
    {
      primaryHeader: "Games and activities",
      description:
        "The campus consisting the colleges and hostels are fully secured with adequate trained guards and with CCTV monitoring system. All students and staff are provided ID card from the institution and their vehicles are allowed to park in the campus with the institutional permit sticker on the vehicle. Other vehicles are allowed entry to the campus with the proper checking by the security personals. The institutional staff and hostel students are allowed to move in and out to the campus after 07.00 PM through night till 07.00 AM only with their ID card for the physical verification by the security guards. Others are not allowed entry to the campus during this time, unless permits by the institutional authorities and physical checking by the security guards. Any suspicious and endangering item or incident, noticed in the campus by the security personals will be immediately reported to the college authorities and to the police department as may be required.",
      imageSrc: games,
      imageAlt: "Games & Activities",
      backgroundColor: "bg-green-50",
      imagePosition: "left",
      navigateTo: "https://example.com/schedule",
    },
    {
      primaryHeader: "Student Hostel",
      description:
        "The campus consisting the colleges and hostels are fully secured with adequate trained guards and with CCTV monitoring system. All students and staff are provided ID card from the institution and their vehicles are allowed to park in the campus with the institutional permit sticker on the vehicle. Other vehicles are allowed entry to the campus with the proper checking by the security personals. The institutional staff and hostel students are allowed to move in and out to the campus after 07.00 PM through night till 07.00 AM only with their ID card for the physical verification by the security guards. Others are not allowed entry to the campus during this time, unless permits by the institutional authorities and physical checking by the security guards. Any suspicious and endangering item or incident, noticed in the campus by the security personals will be immediately reported to the college authorities and to the police department as may be required.",
      imageSrc: studenthostel,
      imageAlt: "Student Hostel",
      backgroundColor: "bg-green-50",
      imagePosition: "right",
      navigateTo: "https://example.com/schedule",
      btnLabel: "application for student hostel",
    },
    {
      primaryHeader: "Research Centre",
      description:
        "The research Centre of the institution has adequate facilities for the research activities by the teaching faculties and post graduate students in all the specialties. All national and international journals in both medical and dental subjects are available in the Central library in addition to the large collections of reference books in the departmental library for the study of research activities and updating the knowledge across the world. The college is also publishing dental journal regularly by name  The case studies and reports done by the faculties and students are published in the dental journal of the institution. The faculties are allowed to take up any projects relating to dentistry research and study with the institutional infrastructure.College buses are available to the students for daily trips and various academic and other programs. In addition, many public transports are also connected to the campus location.",
      imageSrc: researchcentre,
      imageAlt: "Research Centre",
      backgroundColor: "bg-green-50",
      imagePosition: "left",
      navigateTo: "https://example.com/schedule",
    },
    {
      primaryHeader: "Computer Lab",
      description:
        "The dental college has facilitated a Computer lab with 30 latest systems, all with internet connectivity, printers, scanner and server. The lab provides facility for university online valuation work of the examination answer scripts for all streams of medical education as required for the university.",
      imageSrc: computerlab,
      imageAlt: "Computer Lab",
      backgroundColor: "bg-green-50",
      imagePosition: "right",
      navigateTo: "https://example.com/schedule",
    },
    {
      primaryHeader: "Wi-Fi Campus",
      description:
        "The college campus is Wi-Fi enabled for the excellent networking of all the computer systems in all the departments of the college and for the usage of authorised mobiles and laptops. Secured Wi-Fi networking and internet is also available in the hostels, hospital, canteens, and cafeteria, even in garden and playgrounds.",
      imageSrc: wificampus,
      imageAlt: "Wi-Fi Campus",
      backgroundColor: "bg-green-50",
      imagePosition: "left",
      navigateTo: "https://example.com/schedule",
    },
    {
      primaryHead: "College Hostel",
      description:
        "The college has hostel facility for the girls and boys. The hostels are situated in the college campus with a capacity for 300 students. Different types of rooms are available for the students. Rooms with sharing bath room and private rooms with toilets attached are unique for the students to choose, subject to availability. Common Television Entertainment, Indoor games facility, Yoga Room and Meditation /Prayer rooms are also provided in the hostel. 24 Hours warden is available for good care of the students in hostel. Outside foods are not allowed inside the hostel to avoid food adulteration. On Call Doctor and Nursing facility is available in the hostel. Local guardians and visitors are permitted to meet the students in the Visitor room during day time after 07.00 AM and upto 6.00 PM. Many varieties of food and snacks of both vegetarian and Non-vegetarian are available for students in their favourite taste in different styles of Indian and more.",
      imageSrc: collegehostel,
      imageAlt: "College Hostel",
      backgroundColor: "bg-green-50",
      imagePosition: "right",
      navigateTo: "https://example.com/schedule",
    },
  ];


  return (
    <>
      <Banner
        bannerText={"College & campus Facilities"}
        bannerImageClassName="rgc-student-scholarship-banner"
        breadCrumbsList={[
          {
            label: campusLifeData?.banner_campus_life_text || "",
            to: campusLifeData?.banner_campus_life_link || "#",
          },
        ]}
        bannerImageUrl={campusBanner}
      />


      <div className="container mt-5 mb-5">

        <h6>Tobacco Cessation Cell</h6>
        <p className="text-justify">
          Tobacco cessation cell in a dental institution, where an Oral Medicine specialist does the behavioural counseling during which patients are advised to stop the tobacco habits, with customized structured counseling methods. Intervention to stop the habit is performed in the form of questions and scores. Based on the patient’s response, a quit date is set after which the patient should not be performing the habit at all.The scores also determine whether the patient requires Nicotine Replacement Therapy (NRT)/any other medicines in the form of drugs so as to reduce the cravings and withdrawal symptoms associated with stopping the habit.Tobacco cessation cell has been functional in Department of Oral Medicine and Radiology in Sri Rajiv Gandhi College of Dental Sciences and Hospital, Cholanagar since 2014.
        </p>
      </div>


      {facilitiesData.map((facility, index) => (
        <div key={index} className="mb-2">

          <InfoImageSection
            key={index}
            primaryHeader={facility.primaryHeader}
            description={facility.description}
            imageSrc={facility.imageSrc}
            imageAlt={facility.imageAlt}
            backgroundColor={facility.backgroundColor}
            navigateTo={facility.navigateTo}
            imagePosition={getImagePosition(index)}
            btnLabel={facility.btnLabel} // Optional
          />
        </div>
      ))}

      <div>
        <IFrameBanner requiredFooterBorder={false} />
      </div>
      <div>
        <ContactBanner />
      </div>
    </>
  );
};


export default CampusLife;
