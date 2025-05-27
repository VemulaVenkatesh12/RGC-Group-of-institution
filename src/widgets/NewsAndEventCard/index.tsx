import React from "react";
import "../NewsAndEventCard/newsAndEventsCard.css";
import { useNavigate } from "react-router-dom";

interface NewsAndEventsCardProps {
  image: string;
  eventType: string;
  eventTitle: string;
  eventInfo: string;
}

const NewsAndEventsCard: React.FC<NewsAndEventsCardProps> = ({
  image,
  eventType,
  eventTitle,
  eventInfo,
 
}) => {
const nav=useNavigate();

const handleClick=()=>{
   nav("/news-and-events-detail");
}
  return (
    <>
      <div className="row mt-5 event-card" onClick={handleClick}>
        <div className="col-lg-5 col-md-6 col-sm-12 ps-0">
          <img
            src={image}
            alt="news-events-image"
            className="img-fluid event-img"
          />
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12 align-self-center">
          <p className="p-font-size-12 purple-text">{eventType}</p>
          <h4 className="fw-bold mt-3">{eventTitle}</h4>
          <p className="mt-2 p-font-size-16">{eventInfo}</p>
        </div>
      </div>
    </>
  );
};

export default NewsAndEventsCard;
