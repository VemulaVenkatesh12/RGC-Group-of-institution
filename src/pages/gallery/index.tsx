import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import "../gallery/gallery.css";

import EnquiryForm from "../../widgets/EnquiryForm";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import Tabs from "../../widgets/Tabs";
import {
  GalleryResponseData,
  GalleryType,
  getGalleryData,
  Image,
} from "../../services/gallery";
import { getFullImageUrl } from "../../services/actualPath";
const Gallery: React.FC = () => {
  const [galleryData, setGalleryData] = useState<GalleryResponseData | null>(
    null
  );

  const fetchGalleryData = () => {
    getGalleryData()
      .then((response) => {
        const count = response.data;
        setGalleryData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchGalleryData();
  }, []);

  // Create gallery images grid based on images array
  const renderImagesGrid = (images: Image[] = []) => {
    const firstRowImages = images.slice(0, 6);
    const secondRowImages = images.slice(6, 12);

    return (
      <>
        <div className="row">
          {firstRowImages.map((img, idx) => (
            <div
              className="col-lg-2 col-md-4 col-sm-12 mb-4 image-box"
              key={idx}
            >
              <img
                src={getFullImageUrl(img.image.url) || ""}
                alt={img.image.name || `Gallery ${idx}`}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
        {secondRowImages.length > 0 && (
          <div className="row mt-md-4">
            {secondRowImages.map((img, idx) => (
              <div
                className="col-lg-2 col-md-4 col-sm-12 mb-4 image-box"
                key={idx + 6}
              >
                <img
                  src={getFullImageUrl(img.image.url) || ""}
                  alt={img.image.name || `Gallery ${idx + 6}`}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  // Build tab items dynamically from gallery types
  const buildTabItems = () => {
    if (
      !galleryData ||
      !galleryData.gallery ||
      !galleryData.gallery.gallery_types
    ) {
      return [];
    }

    return galleryData.gallery.gallery_types.map(
      (galleryType: GalleryType) => ({
        label: galleryType.name,
        key: galleryType.name.toLowerCase().replace(/\s+/g, "-"),
        content: renderImagesGrid(galleryType.images || []),
      })
    );
  };

  const galleryIntroContent = (
    <>
      <div className="container py-5 p-0">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 ps-0">
            <h4 className="fw-bold text-white">
              {galleryData?.gallery?.title || "Gallery & Tour"}
            </h4>
            <p className="text-white">
              {galleryData?.gallery?.subtitle || "Lorem Ipsum"}
            </p>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12">
            <p className="text-white p-font-size-14">
              {galleryData?.gallery?.Description}
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Banner
        bannerText="Gallery"
        bannerImageClassName="rgc-institution-banner"
        breadCrumbsList={[
          {
            label: galleryData?.banner_Academics_Admission_text || "",
            to: galleryData?.banner_Academics_Admission_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(galleryData?.banner_image.formats.large.url) || ""
        }
      />

      <Tabs
        tabItems={buildTabItems()}
        btnStyle="gallery-tab-btn"
        tabIntro={galleryIntroContent}
        introBackgroundColor="card-banner-bg"
      />
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

export default Gallery;
