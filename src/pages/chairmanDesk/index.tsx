import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import "../chairmanDesk/chairmanDesk.css";
import EnquiryForm from "../../widgets/EnquiryForm";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import {
  ChairmanDeskAResponseData,
  getChairmanDeskData,
} from "../../services/chairmanDesk";
import { getFullImageUrl } from "../../services/actualPath";

// Reusable BookSection Component
interface BookSectionProps {
  title: string;
  logoUrl: string;
  logoAlt: string;
  bookNames: Array<{ id: number; name: string }>;
}

const BookSection: React.FC<BookSectionProps> = ({
  title,
  logoUrl,
  logoAlt,
  bookNames,
}) => {
  return (
    <div className="mt-4">
      <div className="bg-white d-flex align-items-center gap-3">
        <img src={logoUrl} alt={logoAlt} className="img-fluid custom-img" />
        <h4 className="fw-bold">{title}</h4>
      </div>
      <ul className="list-unstyled">
        {bookNames.map((book) => (
          <li key={book.id} className="mt-2">
            {book.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChairmanDesk: React.FC = () => {
  const [chairmanDeskData, setchairmanDeskData] =
    useState<ChairmanDeskAResponseData | null>(null);

  const fetchChairmanDeskData = () => {
    getChairmanDeskData()
      .then((response) => {
        const count = response.data;
        setchairmanDeskData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchChairmanDeskData();
  }, []);

  return (
    <>
      <Banner
        bannerText={chairmanDeskData?.banner_title}
        bannerImageClassName="rgc-sanjay-gandhi-institution-banner"
        breadCrumbsList={[
          {
            label: chairmanDeskData?.banner_about_us_text || "",
            to: chairmanDeskData?.banner_about_us_link || "#",
          },
        ]}
        bannerLink={chairmanDeskData?.banner_about_us_text}
        bannerImageUrl={getFullImageUrl(chairmanDeskData?.banner_image.formats.large.url) || ""}
      />
      <div className="chairman-bg pt-3 pb-3">
        <div className="container ps-0 mt-5">
          <div className="row">
            <div className="col-lg-5 col-md-3 col-sm-12 position-relative">
              <img
                src={getFullImageUrl(chairmanDeskData?.Our_Founder_Chairman.image.formats.large.url) || ""}
                alt="chairman-image"
                className="img-fluid"
              />
              <div className="card px-2 py-2 rounded-0 chairman-img-card bg-white position-absolute">
                <div className="d-flex gap-4 align-items-start">
                  <div className="p-2 rounded-2">
                    <p className="fw-bold p-font-size-16">
                      {chairmanDeskData?.Our_Founder_Chairman.chairman_name}
                    </p>
                    <p className="p-font-size-14">
                      {chairmanDeskData?.Our_Founder_Chairman.data}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-9 col-sm-12 p-5 pt-2">
              <h2 className="fw-bold">
                {chairmanDeskData?.Our_Founder_Chairman.title}
              </h2>
              <p className="p-font-size-14">
                {chairmanDeskData?.Our_Founder_Chairman.Description}
              </p>
              <div className="d-inline-block mt-4 border-2 border-top">
                <h5 className="mt-2 fw-bold">
                  {chairmanDeskData?.Our_Founder_Chairman.chairman_name}
                </h5>
                <p className="p-font-size-14">
                  {chairmanDeskData?.Our_Founder_Chairman.data}
                </p>
              </div>

              {/* Dynamic Books Written Sections */}
              {chairmanDeskData?.Books_Written?.map((bookSection) => (
                <BookSection
                  key={bookSection.id}
                  title={bookSection.title}
                  logoUrl={getFullImageUrl(bookSection.logo.url) || ""}
                  logoAlt={
                    bookSection.logo.alternativeText || bookSection.title
                  }
                  bookNames={bookSection.book_names}
                />
              ))}
            </div>
          </div>
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

export default ChairmanDesk;
