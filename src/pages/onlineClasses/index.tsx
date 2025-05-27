import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import ContactBanner from "../../widgets/ContactBanner";
import IFrameBanner from "../../widgets/iFrameBanner";
import { Link } from "react-router-dom";
import {
  getOnlineClassData,
  OnlineClassResponseData,
} from "../../services/onlineClass";
import { getFullImageUrl } from "../../services/actualPath";

const OnlineClasses: React.FC = () => {
  const [onlineClassData, setonlineClassData] =
    useState<OnlineClassResponseData | null>(null);
  const fetchOnlineClassData = () => {
    getOnlineClassData()
      .then((response) => {
        const count = response.data;
        setonlineClassData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchOnlineClassData();
  }, []);

  const formatContent = (content: string): string[] => {
    return content.split("\n").filter((paragraph) => paragraph.trim() !== "");
  };

  if (!onlineClassData) {
    return;
  }

  const contentParagraphs = formatContent(onlineClassData.content);
  return (
    <>
      <Banner
        bannerText={onlineClassData?.banner_title}
        bannerImageClassName="rgc-sanjay-gandhi-institution-banner"
        breadCrumbsList={[
          {
            label: onlineClassData?.banner_Academics_Admission_text || "",
            to: onlineClassData?.banner_Academics_Admission_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(onlineClassData?.banner_image.formats.large.url) || ""
        }
      />
      <div className="container my-5">
        {contentParagraphs.map((paragraph, index) => {
          if (paragraph.includes("YouTube Channel")) {
            return (
              <p key={index} className="mt-3 pdf-link p-font-size-16">
                {paragraph.replace("YouTube Channel", "")}
                <Link
                  to={onlineClassData.youtube_link}
                  className="fw-bold text-red"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube Channel
                </Link>
              </p>
            );
          }

          return (
            <p
              key={index}
              className={`${index === 0 ? "" : "mt-3"} pdf-link p-font-size-16`}
            >
              {paragraph}
            </p>
          );
        })}
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

export default OnlineClasses;
