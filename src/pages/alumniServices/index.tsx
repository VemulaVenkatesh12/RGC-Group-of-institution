import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import { Link } from "react-router-dom";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import "./alumniServices.css";

import EnquiryForm from "../../widgets/EnquiryForm";
import {
  AluminServiceData,
  AlumniAssociation,
  getAluminiService,
} from "../../services/aluminServices";
import { getFullImageUrl } from "../../services/actualPath";
const AlumniServices: React.FC = () => {
  const [aluminiServiceData, setaluminiServiceData] =
    useState<AluminServiceData | null>(null);
  const [alumniAssociationData, setalumniAssociationData] = useState<
    AlumniAssociation[] | null
  >(null);
  const fetchAluminiService = () => {
    getAluminiService()
      .then((response) => {
        const count = response.data;
        setaluminiServiceData(count);
        setalumniAssociationData(
          count.Rajiv_Gandhi_Dental_College_Alumni_Association
            .Alumni_Association || []
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchAluminiService();
  }, []);

  return (
    <>
      <Banner
        bannerText={aluminiServiceData?.banner_title}
        bannerImageClassName="rgc-institution-banner"
        bannerImageUrl={
          getFullImageUrl(aluminiServiceData?.banner_image.formats.large.url) ||
          ""
        }
        breadCrumbsList={[
          {
            label:
              aluminiServiceData?.banner_Academics_Admission_text ||
              "Academics & Admission",
            to:
              aluminiServiceData?.banner_Academics_Admission_link ||
              "/academics-and-research",
          },
        ]}
      />

      <div className="container my-5">
        <h4 className="fw-bold">{aluminiServiceData?.title}</h4>
        {aluminiServiceData?.Description?.split("\n\n").map((paragraph, index) => (
          <p
            key={index}
            className={`p-font-size-16 ${index === 0 ? "mt-4" : "mt-3"}`}
            style={{ textAlign: 'justify', lineHeight: '1.6', whiteSpace: 'pre-line' }}
          >
            {paragraph.trim()}
          </p>
        ))}

        <div className="mt-4">
          <p className="p-font-size-16 mb-0">
            {aluminiServiceData?.Visit_us_on_Facebook_text}{" "}
            <span className="d-block d-sm-inline">
              <Link
                to={aluminiServiceData?.fb_link || "Undefined"}
                className="alumni-title-color text-decoration-none"
                target="_blank"
              >
                {aluminiServiceData?.fb_link}
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className="container mt-4 mb-5">
        <h5 className="fw-bold alumni-title-color">
          {
            aluminiServiceData?.Rajiv_Gandhi_Dental_College_Alumni_Association
              .title
          }
        </h5>
        <p className="alumni-sub-text p-font-size-12">
          {" "}
          {
            aluminiServiceData?.Rajiv_Gandhi_Dental_College_Alumni_Association
              .subtitle
          }
        </p>
        <div className="mt-3">
          <table className="table table-responsive table-spacing text-center align-middle table-borderless rounded-2">
            <thead>
              <tr>
                <td className="col-1 table-head p-3 rounded-1">
                  {alumniAssociationData?.[0].SL_NO}
                </td>
                <td className="col-3 table-head p-3 rounded-1">
                  {alumniAssociationData?.[0].alumni}
                </td>
                <td className="col-3 table-head p-3 rounded-1">
                  {alumniAssociationData?.[0].DESIGNATION}
                </td>
              </tr>
            </thead>
            <tbody>
              {alumniAssociationData?.slice(1).map((item, index) => (
                <tr key={index}>
                  <td className="table-row-bg rounded-1">{item.SL_NO}</td>
                  <td className="table-row-bg rounded-1">{item.alumni}</td>
                  <td className="table-row-bg rounded-1">{item.DESIGNATION}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <a
            href={aluminiServiceData?.Register_link}
            className="btn btn-md red-btn me-3 text-white px-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            {aluminiServiceData?.Register_text}
          </a>

          <a
            href={aluminiServiceData?.Login_link}
            className="btn btn-md alumni-log-bg text-white px-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            {aluminiServiceData?.Login_text}
          </a>
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
export default AlumniServices;
