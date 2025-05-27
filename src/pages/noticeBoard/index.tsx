import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import NoticeCard from "../../widgets/noticeCard";
import {
  getNoticeBoardResonsePage,
  NoticeBoardResponsesData,
} from "../../services/noticeBoard";
import { getFullImageUrl } from "../../services/actualPath";

const NoticeBoard: React.FC = () => {
  const [NoticeBoardResonse, setNoticeBoardResonse] =
    useState<NoticeBoardResponsesData | null>(null);
  const fetchNoticeBoardResonsePage = () => {
    getNoticeBoardResonsePage()
      .then((response) => {
        const count = response.data;
        setNoticeBoardResonse(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchNoticeBoardResonsePage();
  }, []);
  return (
    <>
      <Banner
        bannerText={NoticeBoardResonse?.banner_title}
        bannerImageClassName="rgc-sanjay-gandhi-institution-banner"
        breadCrumbsList={[
          {
            label: NoticeBoardResonse?.banner_Academics_Admission_text || "",
            to: NoticeBoardResonse?.banner_Academics_Admission_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(NoticeBoardResonse?.banner_image.formats.large.url) ||
          ""
        }
      />
      <div className="container py-4">
        <div className="row">
          {NoticeBoardResonse?.category?.map((notice, index) => (
            <div className="col-md-4 mb-4" key={notice.id || index}>
              <NoticeCard
                courseImage={
                  getFullImageUrl(notice.image?.formats?.large.url) || ""
                }
                date={notice.date}
                title={notice.title}
                description={notice.Description}
              />
            </div>
          ))}
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

export default NoticeBoard;
