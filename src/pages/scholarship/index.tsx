import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import ContactBanner from "../../widgets/ContactBanner";
import "../scholarship/scholarship.css";
import IFrameBanner from "../../widgets/iFrameBanner";
import { Link } from "react-router-dom";
import {
  getScholorshipResponseData,
  ScholorshipResponseData,
} from "../../services/scholarship";
import { getFullImageUrl } from "../../services/actualPath";

const Scholarship: React.FC = () => {
  const [ScholorshipData, setScholorshipData] =
    useState<ScholorshipResponseData | null>(null);
  const fetchScholorshipData = () => {
    getScholorshipResponseData()
      .then((response) => {
        const data = response.data;
        setScholorshipData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchScholorshipData();
  }, []);

  // Function to parse content and create paragraphs with links
  const parseContentWithLinks = (
    content: string,
    links: { link1?: string; link2?: string; link3?: string }
  ) => {
    const paragraphs = content.split("\n\n").filter((p) => p.trim());

    return paragraphs.map((paragraph, index) => {
      let processedParagraph = paragraph.trim();

      // Handle multiple links in the same paragraph
      const renderParagraphContent = (text: string) => {
        const parts: React.ReactNode[] = [];
        let remainingText = text;

        // Process ePASS link
        if (
          remainingText.includes(
            "ePASS (Electronic Payment and Application System of Scholarships"
          ) &&
          links.link1
        ) {
          const splitParts = remainingText.split(
            "ePASS (Electronic Payment and Application System of Scholarships"
          );
          parts.push(splitParts[0]);
          parts.push(
            <Link
              key="epass-link"
              to={links.link1}
              className="text-red p-font-size-16"
            >
              ePASS (Electronic Payment and Application System of Scholarships)
            </Link>
          );
          remainingText = splitParts
            .slice(1)
            .join(
              "ePASS (Electronic Payment and Application System of Scholarships"
            );
        }

        // Process Scholarship Form link
        if (
          remainingText.includes("Scholarship Sanctioned Details Entry Form") &&
          links.link2
        ) {
          const beforeText = remainingText.substring(
            0,
            remainingText.indexOf("Scholarship Sanctioned Details Entry Form")
          );
          const afterText = remainingText.substring(
            remainingText.indexOf("Scholarship Sanctioned Details Entry Form") +
              "Scholarship Sanctioned Details Entry Form".length
          );

          // Add the before text to the last part or create new part
          if (parts.length > 0 && typeof parts[parts.length - 1] === "string") {
            parts[parts.length - 1] = parts[parts.length - 1] + beforeText;
          } else {
            parts.push(beforeText);
          }

          parts.push(
            <Link
              key="scholarship-form-link"
              to={links.link2}
              className="text-red p-font-size-16"
            >
              Scholarship Sanctioned Details Entry Form
            </Link>
          );

          remainingText = afterText;
        }

        // Process refund application link
        if (
          remainingText.includes(
            "Apply for the Scholarship amount refundable from the college"
          ) &&
          links.link3
        ) {
          const beforeText = remainingText.substring(
            0,
            remainingText.indexOf(
              "Apply for the Scholarship amount refundable from the college"
            )
          );
          const afterText = remainingText.substring(
            remainingText.indexOf(
              "Apply for the Scholarship amount refundable from the college"
            ) +
              "Apply for the Scholarship amount refundable from the college"
                .length
          );

          if (beforeText) {
            if (
              parts.length > 0 &&
              typeof parts[parts.length - 1] === "string"
            ) {
              parts[parts.length - 1] = parts[parts.length - 1] + beforeText;
            } else {
              parts.push(beforeText);
            }
          }

          parts.push(
            <Link
              key="refund-link"
              to={links.link3}
              className="text-red p-font-size-16"
            >
              Apply for the Scholarship amount refundable from the college
            </Link>
          );

          if (afterText) {
            parts.push(afterText);
          }

          remainingText = "";
        }

        // Add any remaining text
        if (remainingText) {
          if (parts.length > 0 && typeof parts[parts.length - 1] === "string") {
            parts[parts.length - 1] = parts[parts.length - 1] + remainingText;
          } else {
            parts.push(remainingText);
          }
        }

        return parts.length > 0 ? parts : [text];
      };

      const paragraphContent = renderParagraphContent(processedParagraph);

      return (
        <p
          key={index}
          className={
            index === 0
              ? "text-gray p-font-size-16"
              : "mt-3 text-gray p-font-size-16"
          }
        >
          {paragraphContent}
        </p>
      );
    });
  };

  if (!ScholorshipData) {
    return null;
  }

  return (
    <>
      <Banner
        bannerText={ScholorshipData.banner_title}
        bannerImageClassName="rgc-sanjay-gandhi-institution-banner"
        breadCrumbsList={[
          {
            label: ScholorshipData?.banner_Academics_Admission_text || "",
            to: ScholorshipData?.banner_Academics_Admission_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(
            ScholorshipData.images.banner_image.formats.large.url
          ) || ""
        }
      />
      <div className="container my-5 ps-0">
        <div className="row">
          <div className="col-lg-8 col-sm-12 col-md-8">
            {parseContentWithLinks(ScholorshipData.content, {
              link1: ScholorshipData.content_link1,
              link2: ScholorshipData.content_link2,
              link3: ScholorshipData.content_link3,
            })}
          </div>
          <div className="col-lg-4 col-sm-12 col-md-4">
            {ScholorshipData.images?.content_image?.length > 0 && (
              <img
                src={
                  getFullImageUrl(
                    ScholorshipData.images.content_image[0].url
                  ) || ""
                }
                alt={
                  ScholorshipData.images.content_image[0].alternativeText ||
                  "scholarship-image"
                }
                className="img-fluid w-100"
              />
            )}
          </div>
        </div>
      </div>

      <div>
        <IFrameBanner requiredFooterBorder={true} />
      </div>
      <div>
        <ContactBanner />
      </div>
    </>
  );
};

export default Scholarship;
