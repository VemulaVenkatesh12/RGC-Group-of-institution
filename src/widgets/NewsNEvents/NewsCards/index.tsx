import { Link } from "react-router-dom";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface NewsCardProps {
  title: string;
  description: string;
  greenText: string;
  cardImg?: string;
  gap?: boolean;
  readMoreNavigate?: string;
}
const NewsCards: React.FC<NewsCardProps> = ({
  title,
  description,
  greenText,
  cardImg,
  gap,
  readMoreNavigate = "",
}) => {
  return (
    <>
      <div className="card news-card border-0 mt-md-0 mt-3">
        {cardImg && (
          <img src={cardImg} className="card-img-top" alt="News card image" />
        )}
        <div className="card-body">
          <p className=" news-sm-box p-1 p-font-size-12 rounded-1">
            {greenText}
          </p>
          <h5 className="card-title mt-2">{title}</h5>
          {gap ? (
            <p className="card-text desc-text mb-5 p-font-size-16">
              {description}
            </p>
          ) : (
            <p className="card-text desc-text  p-font-size-16">{description}</p>
          )}
          <div className="d-flex justify-content-end">
            <Link
              to={readMoreNavigate}
              className="p-font-size-14 text-decoration-none pdf-link p-font-size-14"
            >
              Read More{" "}
              <ArrowForwardIcon
                sx={{
                  color: "var(--color-deep-red)",
                  fontSize: "var(--font-size-16)",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCards;
