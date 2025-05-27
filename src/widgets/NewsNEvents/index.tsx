import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, Typography } from "@mui/material";
import NewsCards from "./NewsCards";
import "../NewsNEvents/NewsCards/newsCard.css";
import { NewsEvents } from "../../services/About_Courses_landing_page";
import { getFullImageUrl } from "../../services/actualPath";

interface NewsEventsHomeProps {
  newsDetails : NewsEvents | undefined
}

const NewsEventsHome: React.FC<NewsEventsHomeProps> = ({ newsDetails }) => {
  if (!newsDetails) {
    return null;
  }


  return (
    <>
      <div>
        <div className="row p-md-0 p-3">
          <div className="col-lg-8 col-md-8 col-sm-12 ps-0 ">
            <Typography
              sx={{
                color: "var(--color-deep-red)",
                fontSize: "var(--font-size-18)",
                fontWeight: "var(--font-weight-600)",
              }}
              variant="h5"
              component="h5"
            >
              {newsDetails?.title}
            </Typography>
            <Typography
              sx={{
                color: "var(--color-light-black)",
                fontSize: "var(--font-size-48)",
                fontWeight: "var(--font-weight-600)",
              }}
              variant="h2"
              component="h2"
            >
              {newsDetails.subtitle}
            </Typography>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 my-auto d-flex justify-content-end  pe-0">
            <Link
              href={newsDetails.Read_All_News_Events_link || "undefined"}
              underline="none"
              color="inherit"
              className="p-font-size-14"
            >
              {newsDetails.Read_All_News_Events || "undefined"}{" "}
              <ArrowForwardIcon
                sx={{
                  color: "var(--color-deep-red)",
                  fontSize: "var(--font-size-16)",
                }}
              />
            </Link>
          </div>
        </div>
        <div className="news-event-bg my-5 position-relative">
          <div className="w-25 card-on-bg">
            <NewsCards
              title={newsDetails.image_subtitle || "undefined"}
              description={newsDetails.image_description || "undefined"}
              greenText={newsDetails.image_title || "undefined"}
              gap={false}
              readMoreNavigate={newsDetails.Read_More_link || "undefined"}
            />
          </div>
        </div>
        <div className="row">
          {newsDetails.news_details && newsDetails.news_details.map((news, index) => {
            // Only render three news cards at most
            if (index < 3) {
              return (
                <div key={news.id} className="col-lg-4 col-md-4 col-sm-12">
                  <NewsCards
                    title={news.subtitle}
                    description={news.Description}
                    greenText={news.title}
                    cardImg={getFullImageUrl(news.image.formats.large.url) || ""}
                    gap={true}
                    readMoreNavigate={news.Read_More_link || "undefined"}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
};

export default NewsEventsHome;