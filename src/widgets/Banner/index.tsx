import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import "./banner.css";
import { Link, useNavigate } from "react-router-dom";

interface BannerProps {
  bannerText?: string;
  previousPage?: () => void;
  bannerImageClassName?: string;
  bannerImageUrl?: string | undefined
  bannerLink?: string;
  bannerOptionalLink?: string;
  breadCrumbsList?: IBreadcrubItem[];
}
interface IBreadcrubItem {
  label: string;
  to: string;
  className?: string;
}

const homeBreadcrumbItem: IBreadcrubItem = {
  label: "Home",
  to: "/",
};

const Banner: React.FC<BannerProps> = ({
  bannerText,
  bannerImageClassName,
  bannerImageUrl,
  bannerLink,
  bannerOptionalLink,
  breadCrumbsList = [],
}) => {
  const navigate = useNavigate();
  const previousPage = () => {
    navigate(-1);
  };
  const breadCrumbs = [homeBreadcrumbItem, ...breadCrumbsList];

  return (
    <div
      className={bannerImageClassName}
      style={
        bannerImageUrl
          ? {
              backgroundImage: `url(${bannerImageUrl})`,
            }
          : undefined
      }
    >
      <div className="container">
        <div className="d-flex align-items-start">
          <div className="banner-box p-4">
            <div className="d-flex gap-4 align-items-start">
              <div className="p-2 icon-bg-gray d-flex rounded-2 chevron-back-icon mt-2">
                <IoChevronBackOutline
                  className="color-red"
                  size={24}
                  onClick={previousPage}
                />
              </div>
              <div>
                <h2 className="color-black fw-bold banner-title">
                  {bannerText}
                </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      {breadCrumbsList.length > 0 ? (
                        breadCrumbs.map((item, index) => (
                          <React.Fragment key={index}>
                            <Link
                              to={item.to}
                              className={
                                item.className ??
                                "text-decoration-none color-gray me-1 p-font-size-12"
                              }
                            >
                              {item.label}
                            </Link>

                            {index !== breadCrumbs.length - 1 && (
                              <FaChevronRight
                                size={10}
                                className="color-gray me-1"
                              />
                            )}
                          </React.Fragment>
                        ))
                      ) : (
                        <>
                          <Link
                            to="/"
                            className="text-decoration-none color-gray me-1 p-font-size-12"
                          >
                            Home
                          </Link>

                          <FaChevronRight
                            size={10}
                            className="color-gray me-1"
                          />
                          <Link
                            to="#"
                            className="color-gray p-font-size-12 text-decoration-none"
                          >
                            {bannerLink}
                          </Link>
                          {bannerOptionalLink && (
                            <>
                              <FaChevronRight
                                size={10}
                                className="color-gray me-1"
                              />
                              <Link
                                to="#"
                                className="color-gray p-font-size-12 text-decoration-none"
                              >
                                {bannerOptionalLink}
                              </Link>
                            </>
                          )}
                        </>
                      )}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;