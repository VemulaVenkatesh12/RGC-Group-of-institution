import React, { useEffect, useState } from "react";
import EnquiryForm from "../../widgets/EnquiryForm";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import Banner from "../../widgets/Banner";
import NewsAndEventsCard from "../../widgets/NewsAndEventCard";
import "./newsAndEvents.css";
import {
  getNewsAndEventsData,
  NewsAndEventsResponseData,
} from "../../services/newsAndEvents";
import { getFullImageUrl } from "../../services/actualPath";

const NewsAndEvents: React.FC = () => {
  const [newsAndEventsData, setNewsAndEventsData] =
    useState<NewsAndEventsResponseData | null>(null);

  const fetchNewsAndEventsData = async () => {
    try {
      const response = await getNewsAndEventsData();
      setNewsAndEventsData(response.data);
    } catch (error) {
      console.error("Error fetching news and events data:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchNewsAndEventsData();
  }, []);

  return (
    <>
      <Banner
        bannerText={newsAndEventsData?.banner_title}
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label: newsAndEventsData?.banner_Campus_facilities_text || "",
            to: newsAndEventsData?.banner_Campus_facilities_link || "",
          },
          {
            label: newsAndEventsData?.banner_gallery_text || "",
            to: newsAndEventsData?.banner_gallery_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(
            newsAndEventsData?.banner_image?.formats?.large?.url
          ) || ""
        }
      />

      <div className="container mt-5 mb-5">
        <div className="border-2 border-bottom">
          <h4 className="fw-bold mb-3 red-main-text">
            {newsAndEventsData?.news?.title || "All Posts"}
          </h4>
        </div>

        {/* Dynamic News and Events Cards */}
        <div className="row g-4 mt-2">
          {newsAndEventsData?.news?.all_posts?.map((post, index) => (
            <div key={post.id || index} className="col-12">
              <NewsAndEventsCard
                image={getFullImageUrl(post.image?.formats?.medium?.url) || ""}
                eventType={post.title}
                eventTitle={post.subtitle}
                eventInfo={post.Description}
              />
            </div>
          )) || (
            <div className="col-12 text-center py-5">
              <p className="text-muted">
                No news and events available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>

      <div>
        <EnquiryForm />
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

export default NewsAndEvents;
