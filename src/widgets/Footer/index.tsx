import React, { useEffect, useState } from "react";
import "../Footer/footer.css";
import footerborder from "../../assets/footerborder.webp";
import { Button, Stack, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";
import { FooterData, getFooterData } from "../../services/footer";
import { getFullImageUrl } from "../../services/actualPath";
const Footer: React.FC = () => {
  const [footerData, setfooterData] = useState<FooterData | null>(null);
  const fetchFotterData = () => {
    getFooterData()
      .then((response) => {
        const count = response.data;
        setfooterData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchFotterData();
  }, []);
  return (
    <>
      <div className="row p-3 mt-5 mb-5">
        <div className="col-1 col-1-custom"></div>
        <div className="col-lg-2 col-md-2 col-sm-12 ps-0">
          <img
            className="img-fluid"
            src={
              (getFullImageUrl(footerData?.footer.logo.formats.large.url) || "")
            }
            alt="footer-logo"
          />
          <div>
            <Link
              to={footerData?.footer.Engineering_link || "undefined"}
              target="_blank"
            >
              <Button
                sx={{
                  fontSize: "var(--font-size-12)",
                  color: "black",
                  textTransform: "none",
                  fontWeight: "var(--font-weight-400)",
                }}
                className="py-0 rounded-0  footer-link-1 px-1"
                variant="text"
              >
                {footerData?.footer.Engineering_text}
              </Button>
            </Link>
            <Link
              to={footerData?.footer.Dental_link || "Undefined"}
              target="_blank"
            >
              <Button
                sx={{
                  fontSize: "var(--font-size-12)",
                  color: "black",
                  textTransform: "none",
                  fontWeight: "var(--font-weight-400)",
                }}
                variant="text"
                className="py-0 rounded-0  footer-link-2"
              >
                {footerData?.footer.Dental_text}
              </Button>
            </Link>
            <Link
              to={footerData?.footer.Nursing_link || "undefined"}
              target="_blank"
            >
              <Button
                sx={{
                  fontSize: "var(--font-size-12)",
                  color: "black",
                  textTransform: "none",
                  fontWeight: "var(--font-weight-400)",
                }}
                variant="text"
                className="py-0 rounded-0 footer-link-3"
              >
                {footerData?.footer.Nursing_text}
              </Button>
            </Link>
            <Link
              to={footerData?.footer.Education_link || "undefined"}
              target="_blank"
            >
              <Button
                sx={{
                  fontSize: "var(--font-size-12)",
                  color: "black",
                  textTransform: "none",
                  fontWeight: "var(--font-weight-400)",
                }}
                variant="text"
                className="py-0 rounded-0  footer-link-4 px-1"
              >
                {footerData?.footer.Education_text}
              </Button>
            </Link>
            <Link
              to={footerData?.footer.Commerce_link || "Undefined"}
              target="_blank"
            >
              <Button
                sx={{
                  fontSize: "var(--font-size-12)",
                  color: "black",
                  textTransform: "none",
                  fontWeight: "var(--font-weight-400)",
                }}
                variant="text"
                className="py-0 rounded-0  footer-link-5"
              >
                {footerData?.footer.Commerce_text}
              </Button>
            </Link>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <Typography
            sx={{
              color: "var(--color-charcoal-black)",
              fontSize: "var(--font-size-18)",
              fontWeight: "var(--font-weight-600)",
            }}
            component="h5"
            variant="h5"
          >
            {footerData?.footer.Quick_Links_text}
          </Typography>
          <Stack justifyContent={"start"}>
            <Link
              to={footerData?.footer.Mandatory_Disclosures_link || "undefined"}
              className="text-decoration-none"
              style={{
                color: "var(--color-medium-gray)",
                fontSize: "var(--font-size-12)",
                marginTop: "8px",
              }}
            >
              {footerData?.footer.Mandatory_Disclosures_text}
            </Link>
            <Link
              to={footerData?.footer.Notice_Board_link || "Undefined"}
              className="text-decoration-none"
              style={{
                color: "var(--color-medium-gray)",
                fontSize: "var(--font-size-12)",
                marginTop: "8px",
              }}
            >
              {footerData?.footer.Notice_Board_text}
            </Link>
            <Link
              to={footerData?.footer.content_us_link || "undefined"}
              className="text-decoration-none"
              style={{
                color: "var(--color-medium-gray)",
                fontSize: "var(--font-size-12)",
                marginTop: "8px",
              }}
            >
              {footerData?.footer.Contact_Us_text}
            </Link>
          </Stack>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <Typography
            sx={{
              color: "var(--color-charcoal-black)",
              fontSize: "var(--font-size-18)",
              fontWeight: "var(--font-weight-600)",
            }}
            component="h5"
            variant="h5"
          >
            {footerData?.footer.Links}
          </Typography>
          <Stack justifyContent={"start"}>
            <Link
              to={footerData?.footer.Our_Courses_link || "undefined"}
              className="text-decoration-none"
              style={{
                color: "var(--color-medium-gray)",
                fontSize: "var(--font-size-12)",
                marginTop: "8px",
              }}
            >
              {footerData?.footer.Our_Courses_text}
            </Link>
            <Link
              to={footerData?.footer.Alumni_Services_link || "undefined"}
              className="text-decoration-none"
              style={{
                color: "var(--color-medium-gray)",
                fontSize: "var(--font-size-12)",
                marginTop: "8px",
              }}
            >
              {footerData?.footer.Alumni_Services_text}
            </Link>
            <Link
              to={footerData?.footer.News_Events_link || "Undefined"}
              className="text-decoration-none"
              style={{
                color: "var(--color-medium-gray)",
                fontSize: "var(--font-size-12)",
                marginTop: "8px",
              }}
            >
              {footerData?.footer.News_Events_text}
            </Link>
          </Stack>
        </div>
        {/* <div className="col-lg-2 col-md-2 col-sm-12">
          <Typography
            sx={{
              color: "var(--color-charcoal-black)",
              fontSize: "var(--font-size-18)",
              fontWeight: "var(--font-weight-600)",
            }}
            variant="h5"
            component="h5"
          >
            Title
          </Typography>
          <Stack justifyContent={"start"}>
            <Link
              to="#"
              className="text-decoration-none"
              style={{
                color: "var(--color-medium-gray)",
                fontSize: "var(--font-size-12)",
                marginTop: "8px",
              }}
            >
              Experimental Learning
            </Link>
            <Link
              to="#"
              className="text-decoration-none"
              style={{
                color: "var(--color-medium-gray)",
                fontSize: "var(--font-size-12)",
                marginTop: "8px",
              }}
            >
              Schedule A Tour
            </Link>
            <Link
              to="#"
              className="text-decoration-none"
              style={{
                color: "var(--color-medium-gray)",
                fontSize: "var(--font-size-12)",
                marginTop: "8px",
              }}
            >
              International Student
            </Link>
            <Link
              to="#"
              className="text-decoration-none"
              style={{
                color: "var(--color-medium-gray)",
                fontSize: "var(--font-size-12)",
                marginTop: "8px",
              }}
            >
              All Programs
            </Link>
          </Stack>
        </div> */}
        <div className="col-lg-2 col-md-2 col-sm-12 me-auto">
          <Typography
            sx={{
              color: "var(--color-charcoal-black)",
              fontSize: "var(--font-size-18)",
              fontWeight: "var(--font-weight-600)",
            }}
            variant="h5"
            component="h5"
          >
            {footerData?.footer.Our_Newsletter}
          </Typography>
          <Typography
            sx={{
              color: "var(--color-medium-gray)",
              fontSize: "var(--font-size-12)",
            }}
          >
            {footerData?.footer.Our_Newsletter_text}
          </Typography>
          <div className="mt-3 mb-3">
            <div className="row">
              <div className="col-9 p-0">
                <input
                  className="form-control  rounded-0 footer-input"
                  type="text"
                  placeholder="Your email"
                  aria-label="default input example"
                />
              </div>
              <div className="col-3 p-0">
                <button className="btn btn-dark rounded-0 ">
                  <MailOutlineIcon />
                </button>
              </div>
            </div>
          </div>
          <Stack gap={2} direction={"row"}>
            <a
              href={footerData?.footer.fb_link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={getFullImageUrl(footerData?.footer.fb_image.url) || ""}
                className="img-fluid footer-social-icons"
                alt="footer-facebook"
              />
            </a>
            <a
              href={footerData?.footer.twitter_link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={getFullImageUrl(footerData?.footer.twitter_image.url) || ""}
                className="img-fluid footer-social-icons"
                alt="footer-twitter"
              />
            </a>
            <a
              href={footerData?.footer.insta_link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={getFullImageUrl(footerData?.footer.insta_image.url) || ""}
                className="img-fluid footer-social-icons"
                alt="footer-insta"
              />
            </a>
            <a
              href={footerData?.footer.youtube_link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={getFullImageUrl(footerData?.footer.youtube_image.url) || ""}
                className="img-fluid footer-social-icons"
                alt="footer-youtube"
              />
            </a>
          </Stack>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="text-center">
        <Typography
          sx={{
            color: "var(--color-medium-gray)",
            fontSize: "var(--font-size-14)",
          }}
        >
          {footerData?.footer.Copyrights_copy}
        </Typography>
      </div>
      <img src={footerborder} className="img-fluid" alt="footer-border" />
    </>
  );
};

export default Footer;
