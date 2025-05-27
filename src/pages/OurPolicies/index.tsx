import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import ContactBanner from "../../widgets/ContactBanner";
import { Link, Typography } from "@mui/material";
import "../OurPolicies/ourpolicy.css";
import IFrameBanner from "../../widgets/iFrameBanner";
import CustomButton from "../../widgets/CustomButton";
import {
  getOurPoliciesResponseData,
  OurPoliciesResponseData,
} from "../../services/ourPolicies";
import { getFullImageUrl } from "../../services/actualPath";

const OurPolicy: React.FC = () => {
  const [ourPolicyData, setourPolicyData] =
    useState<OurPoliciesResponseData | null>(null);

  const fetchOurPoliciesData = () => {
    getOurPoliciesResponseData()
      .then((response) => {
        const count = response.data;
        setourPolicyData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchOurPoliciesData();
  }, []);

  // Function to split description by \n and render paragraphs
  const renderDescription = (description: string) => {
    return description.split("\n").map(
      (paragraph, index) =>
        paragraph.trim() && (
          <p key={index} className="p-font-size-16">
            {paragraph.trim()}
          </p>
        )
    );
  };

  // Function to render committee members maintaining original 4-column layout
  const renderCommitteeMembers = () => {
    if (
      !ourPolicyData?.Anti_ragging_committee_members?.details ||
      !Array.isArray(ourPolicyData.Anti_ragging_committee_members.details)
    ) {
      return null;
    }

    const members = ourPolicyData.Anti_ragging_committee_members.details;
    const columns: any[][] = [[], [], [], []]; // 4 columns as in original

    // Distribute members across 4 columns
    members.forEach((member, index) => {
      columns[index % 4].push(member);
    });

    return (
      <div className="row mt-3">
        {columns.map((columnMembers, columnIndex) => (
          <div key={columnIndex} className="col-lg-3 col-md-3 col-sm-12">
            {columnMembers.map((member) => (
              <div key={member.id}>
                <p className="neutral-black mt-3 p-font-size-14">
                  <strong>{member.name}</strong>
                  <br />
                  {member.designation}
                  <br />
                  {member.contact_number}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  // Function to render contact numbers in two columns
  const renderContactNumbers = () => {
    if (
      !ourPolicyData?.Immediate_Contact_Nos?.contact_numbers ||
      !Array.isArray(ourPolicyData.Immediate_Contact_Nos.contact_numbers)
    ) {
      return null;
    }

    const contacts = ourPolicyData.Immediate_Contact_Nos.contact_numbers;
    const midPoint = Math.ceil(contacts.length / 2);
    const leftColumn = contacts.slice(0, midPoint);
    const rightColumn = contacts.slice(midPoint);

    const renderColumn = (columnContacts: typeof contacts) => {
      return columnContacts.map((contact) => (
        <div key={contact.id} className="row mt-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="neutral-black p-font-size-14">
              <strong>{contact.title}</strong>
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            {contact.contact_catagory &&
              Array.isArray(contact.contact_catagory) &&
              contact.contact_catagory.map((category) => (
                <p key={category.id} className="neutral-black p-font-size-14">
                  <strong>{category.name}</strong>
                  {category.contact_number && ` ${category.contact_number}`}
                </p>
              ))}
          </div>
        </div>
      ));
    };

    return (
      <div className="row mt-3">
        <div className="col-lg-6 col-md-6 col-sm-12 border-2 border-end">
          {renderColumn(leftColumn)}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          {renderColumn(rightColumn)}
        </div>
      </div>
    );
  };

  return (
    <>
      <Banner
        bannerText={ourPolicyData?.banner_title}
        bannerImageClassName="rgc-sanjay-gandhi-institution-banner"
        breadCrumbsList={[
          {
            label: ourPolicyData?.banner_about_us_text || "",
            to: ourPolicyData?.banner_about_us_link || "",
          },
        ]}
        bannerImageUrl={
          getFullImageUrl(ourPolicyData?.banner_image.formats.large.url) || ""
        }
      />
      <div className="container mt-5">
        <Typography
          sx={{
            fontSize: "var(--font-size-16)",
            fontWeight: "var(--font-weight-600)",
          }}
          variant="h5"
          component="h5"
        >
          {ourPolicyData?.Anti_Ragging_Policy?.title}
        </Typography>
        <br />

        {/* Render description with line breaks */}
        {ourPolicyData?.Anti_Ragging_Policy?.Description &&
          renderDescription(ourPolicyData.Anti_Ragging_Policy.Description)}

        <div className="row mt-3 mb-3 p-3 policy-bg">
          <div className="col-lg-10 col-md-10 col-sm-12">
            <div className="d-flex align-items-center ">
              <img
                src={
                  getFullImageUrl(
                    ourPolicyData?.Anti_Ragging_Policy?.pdf_image?.url
                  ) || ""
                }
                className="img-fluid"
                alt="pdf-logo"
                style={{ width: "50px", height: "auto" }}
              />
              <p className="ms-2 p-font-size-16">
                {ourPolicyData?.Anti_Ragging_Policy?.pdf_text}
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12">
            <CustomButton
              label={ourPolicyData?.Anti_Ragging_Policy?.Download}
              btnClassName="btn btn-dark mt-2"
            />
          </div>
        </div>

        <Link
          href={
            getFullImageUrl(
              ourPolicyData?.Anti_Ragging_Policy?.Download_link
            ) || ""
          }
          color="inherit"
          className="p-font-size-16 text-decoration-none"
        >
          {ourPolicyData?.Anti_Ragging_Policy?.pdf_link}
        </Link>

        {/* Anti-ragging committee members section */}
        <div className="mt-5">
          <Typography
            sx={{
              fontSize: "var(--font-size-18)",
              color: "var(--color-deep-red)",
              fontWeight: "var(--font-weight-600)",
            }}
            variant="h5"
            component="h5"
          >
            {ourPolicyData?.Anti_ragging_committee_members?.title}
          </Typography>
          {renderCommitteeMembers()}
        </div>

        {/* Immediate Contact Numbers section */}
        <div className="mt-5">
          <Typography
            sx={{
              fontSize: "var(--font-size-18)",
              color: "#D92D28",
              fontWeight: "var(--font-weight-600)",
            }}
            variant="h5"
            component="h5"
          >
            {ourPolicyData?.Immediate_Contact_Nos?.title}
          </Typography>
        </div>
        {renderContactNumbers()}
      </div>
      <div className="mt-5">
        <IFrameBanner requiredFooterBorder={true} />
        <ContactBanner />
      </div>
    </>
  );
};

export default OurPolicy;
