import React, { useEffect, useState } from "react";
import EnquiryForm from "../../widgets/EnquiryForm";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import {
  getNewsAndEventsDeatilsData,
  NewsAndEventsDeatilsResponseData,
} from "../../services/newsEventsDeatisl";
import { getFullImageUrl } from "../../services/actualPath";

const NewsAndEventsDetail: React.FC = () => {
  const [newsAndEventsDeatilsData, setNewsAndEventsDeatilsData] =
    useState<NewsAndEventsDeatilsResponseData | null>(null);

  const fetchNewsAndEventsDeatilsData = () => {
    getNewsAndEventsDeatilsData()
      .then((response) => {
        const data = response.data;
        setNewsAndEventsDeatilsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchNewsAndEventsDeatilsData();
  }, []);

  if (!newsAndEventsDeatilsData) {
    return ;
  }

  // Get person image and banner image from blocks
  const personContentImages = newsAndEventsDeatilsData.block?.find(
    (block) => block.__component === "news-events-2.person-content-images"
  );

  const contentComponent = newsAndEventsDeatilsData.block?.find(
    (block) => block.__component === "news-events-2.component"
  );

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="d-flex align-items-center">
          <div>
            <img
              src={
                getFullImageUrl(personContentImages?.person_image?.url) || ""
              }
              alt="profile-image"
              className="img-fluid me-3"
            />
          </div>
          <div>
            <h4 className="fw-bold purple-text">
              {newsAndEventsDeatilsData.person_name}
            </h4>
            <p className="p-font-size-14">{newsAndEventsDeatilsData.date}</p>
          </div>
        </div>

        <h2 className="mt-5 mb-5 fw-bold">
          {newsAndEventsDeatilsData.title_1 ||
            "Step-by-step guide to choosing great font pairs"}
        </h2>

        <img
          src={getFullImageUrl(personContentImages?.title1_image?.url) || ""}
          alt="banner-image"
          className="img-fluid"
        />

        <div className="container col-8">
          {contentComponent && (
            <>
              {/* First Section */}
              {contentComponent.title1 && (
                <div className="mt-5">
                  <h3 className="fw-bold">{contentComponent.title1}</h3>
                  <p className="p-font-size-16">
                    {contentComponent.title1_description}
                  </p>
                </div>
              )}

              {/* Second Section */}
              {contentComponent.title2 && (
                <div className="mt-5">
                  <h3 className="fw-bold">{contentComponent.title2}</h3>

                  {contentComponent.title2_description1 && (
                    <p className="p-font-size-16">
                      {contentComponent.title2_description1}
                    </p>
                  )}

                  {contentComponent.title2_description2 && (
                    <p className="mt-2 p-font-size-16">
                      {contentComponent.title2_description2}
                    </p>
                  )}

                  {/* Bullet Points */}
                  {(contentComponent.title2_point1 ||
                    contentComponent.title2_point2 ||
                    contentComponent.title2_point3) && (
                    <ul className="mt-3 ps-3">
                      {contentComponent.title2_point1 && (
                        <li>{contentComponent.title2_point1}</li>
                      )}
                      {contentComponent.title2_point2 && (
                        <li>{contentComponent.title2_point2}</li>
                      )}
                      {contentComponent.title2_point3 && (
                        <li>{contentComponent.title2_point3}</li>
                      )}
                    </ul>
                  )}

                  {contentComponent.title2_description3 && (
                    <p className="mt-2 p-font-size-16">
                      {contentComponent.title2_description3}
                    </p>
                  )}
                </div>
              )}

              {/* Third Section */}
              {contentComponent.title3 && (
                <div className="mt-5">
                  <h3 className="fw-bold">{contentComponent.title3}</h3>
                  <p className="p-font-size-16">
                    {contentComponent.title3_descrition}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* What to read next section */}
      {newsAndEventsDeatilsData.what_to_read_next?.modules && (
        <div className="container mt-3 mb-5">
          <h3 className="fw-bold">
            {newsAndEventsDeatilsData.what_to_read_next.title}
          </h3>
          <div className="row justify-content-center mt-5">
            {newsAndEventsDeatilsData.what_to_read_next.modules.map(
              (module) => (
                <div key={module.id} className="col-lg-4 col-md-4 col-sm-12">
                  <img
                    src={getFullImageUrl(module.image?.url) || ""}
                    alt="news-events-image"
                    className="img-fluid"
                  />
                  <p className="mt-4 mb-3 p-font-size-14">{module.name}</p>
                  <h3 className="fw-bold mb-3">{module.title}</h3>
                  <p className="p-font-size-16">{module.Description}</p>
                </div>
              )
            )}
          </div>
        </div>
      )}

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

export default NewsAndEventsDetail;
