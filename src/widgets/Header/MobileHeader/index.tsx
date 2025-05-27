import React, { ReactNode, useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import "./mobileHeader.css";
import { Link } from "react-router-dom";
import headerLogo from "../../../assets/headerLogo.webp";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  getHeaderInfoData,
  HeaderInforData,
} from "../../../services/headerInfo";
import { getFullImageUrl } from "../../../services/actualPath";

interface INavOption {
  label: string;
  path?: string;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  subOptions?: INavOption[];
  image?: string; // Add image property
}

const MobileHeader: React.FC = () => {
  const [showRightDrawer, setShowRightDrawer] = useState<boolean>(false);
  const [showLeftDrawer, setShowLeftDrawer] = useState<boolean>(false);
  const [drawerOptions, setSubMenuOptions] = useState<INavOption[]>([]);
  const [selectedMenuImage, setSelectedMenuImage] = useState<string>("");
  const [headerData, setHeaderData] = useState<HeaderInforData | null>(null);

  const navigate = useNavigate();

  // Fetch header data on component mount
  useEffect(() => {
    const fetchHeaderData = () => {
      getHeaderInfoData()
        .then((response) => {
          setHeaderData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchHeaderData();
  }, []);

  const handleNavbarTogglerClick = () => {
    setShowRightDrawer(true);
  };

  const closeDrawers = () => {
    setShowRightDrawer(false);
    setShowLeftDrawer(false);
    setSelectedMenuImage("");
  };

  const handleSubOptionClick = (path?: string) => {
    closeDrawers();
    if (path) {
      navigate(path);
    }
  };

  const getNavigationMenu = (menuName: string) => {
    return headerData?.navigation_menu.find(
      (menu) => menu.menu_name === menuName
    );
  };

  // Create dynamic nav items based on API data
  const createNavItems = (): INavOption[] => {
    if (!headerData) {
      return []; // Return empty array if no data
    }

    const aboutUsMenu = getNavigationMenu("About Us");
    const academicsMenu = getNavigationMenu("Academics & Educations");
    const campusLifeMenu = getNavigationMenu("Campus Life");
    const healthCareMenu = getNavigationMenu("Health Care");
    const institutionsMenu = getNavigationMenu("Our Institutions");

    return [
      {
        label: headerData.hedder_logo.NIRF_text,
        path: headerData.hedder_logo.NIRF_link,
      },
      {
        label: headerData.hedder_logo.NACC_text,
        path: headerData.hedder_logo.NACC_Link,
      },
      {
        label: "Online Fees",
        path: "",
      },
      {
        label: aboutUsMenu?.menu_name || "",
        image: getFullImageUrl(aboutUsMenu?.image?.url) || "",
        subOptions: [
          {
            label: aboutUsMenu?.text_1 || "",
            path: aboutUsMenu?.text1_link || "",
          },
          {
            label: aboutUsMenu?.text2 || "",
            path: aboutUsMenu?.text2_link || "",
          },
          {
            label: aboutUsMenu?.text3 || "",
            path: aboutUsMenu?.text3_link || "/",
          },
          {
            label: aboutUsMenu?.text4 || "",
            path: aboutUsMenu?.text_4_link || "",
          },
          {
            label: aboutUsMenu?.text5 || "",
            path: aboutUsMenu?.text5_link || "",
          },
        ],
      },
      {
        label: academicsMenu?.menu_name || "",
        image: getFullImageUrl(academicsMenu?.image?.url) || "",
        subOptions: [
          {
            label: academicsMenu?.text_1 || "",
            path: academicsMenu?.text1_link || "",
          },
          {
            label: academicsMenu?.text2 || "",
            path: academicsMenu?.text2_link || "",
          },
          {
            label: academicsMenu?.text3 || "",
            path: academicsMenu?.text3_link || "",
          },
          {
            label: academicsMenu?.text4 || "",
            path: academicsMenu?.text_4_link || "",
          },
          {
            label: academicsMenu?.text5 || "",
            path: academicsMenu?.text5_link || "",
          },
          {
            label: academicsMenu?.text_6 || "",
            path: academicsMenu?.text6_link || "",
          },
        ],
      },
      {
        label: campusLifeMenu?.menu_name || "",
        image: getFullImageUrl(campusLifeMenu?.image?.url) || "",
        subOptions: [
          {
            label: campusLifeMenu?.text_1 || "",
            path: campusLifeMenu?.text1_link || "",
          },
          {
            label: campusLifeMenu?.text2 || "",
            path: campusLifeMenu?.text2_link || "",
          },
          {
            label: campusLifeMenu?.text3 || "",
            path: campusLifeMenu?.text3_link || "",
          },
          {
            label: campusLifeMenu?.text4 || "",
            path: campusLifeMenu?.text_4_link || "",
          },
        ],
      },
      {
        label: healthCareMenu?.menu_name || "",
        image: getFullImageUrl(healthCareMenu?.image?.url) || "",
        subOptions: [
          {
            label: healthCareMenu?.text_1 || "",
            path: healthCareMenu?.text1_link || "",
          },
          {
            label: healthCareMenu?.text2 || "",
            path: healthCareMenu?.text2_link || "",
          },
          {
            label: healthCareMenu?.text3 || "",
            path: healthCareMenu?.text3_link || "",
          },
          {
            label: healthCareMenu?.text4 || "",
            path: healthCareMenu?.text_4_link || "",
          },
          {
            label: healthCareMenu?.text5 || "",
            path: healthCareMenu?.text5_link || "",
          },
          {
            label: healthCareMenu?.text_6 || "",
            path: healthCareMenu?.text6_link || "",
          },
        ],
      },
      {
        label: institutionsMenu?.menu_name || "",
        image: getFullImageUrl(institutionsMenu?.image?.url) || "",
        subOptions: [
          {
            label:
              institutionsMenu?.text_1 ||
              "",
            path: institutionsMenu?.text1_link || "",
          },
          {
            label:
              institutionsMenu?.text2 ||
              "",
            path:
              institutionsMenu?.text2_link || "",
          },
          {
            label:
              institutionsMenu?.text3 || "",
            path: institutionsMenu?.text3_link || "",
          },
          {
            label: institutionsMenu?.text4 || "",
            path: institutionsMenu?.text_4_link || "",
          },
          {
            label:
              institutionsMenu?.text5 ||
              "",
            path: institutionsMenu?.text5_link || "",
          },
        ],
      },
      {
        label: "Contact Us",
        subOptions: [
          {
            label: `Call: ${headerData.hedder_logo.number}`,
            startIcon: (
              <IoIosCall size={20} className="icons-red-primary me-2" />
            ),
            path: `tel:${headerData.hedder_logo.number}`,
          },
          {
            label: headerData.hedder_logo.email_id,
            startIcon: <IoMail size={20} className="icons-red-primary me-2" />,
            path: `mailto:${
              headerData.hedder_logo.email_id
            }`,
          },
          {
            label: headerData.hedder_logo.Reach_Us_text,
            path: headerData.hedder_logo.Reach_Us_link ,
          },
        ],
      },
    ];
  };

  const navItems = createNavItems();

  const handleMenuClick = (item: INavOption) => {
    if (item.subOptions && item.subOptions.length > 0) {
      setSubMenuOptions(item.subOptions);
      setSelectedMenuImage(item.image || "");
      setShowLeftDrawer(true);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white px-4 position-sticky top-0 d-flex justify-content-between">
        <Link to="/" className="navbar-brand ">
          <img
            className="img-fluid mob-header-img"
            src={
              getFullImageUrl(headerData?.hedder_logo.logo?.url) || headerLogo
            }
            alt="header-logo"
          />
        </Link>
        <button
          className="navbar-toggler border-0 outline-0"
          type="button"
          data-toggle="collapse"
          onClick={handleNavbarTogglerClick}
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon border-0 outline-0"></span>
        </button>
      </nav>

      <div
        className={`pe-3 position-fixed offcanvas first-drawer offcanvas-end ${
          showRightDrawer ? "show" : ""
        }`}
        style={{
          visibility: showRightDrawer ? "visible" : "hidden",
          backgroundColor: "white",
        }}
      >
        <div className="offcanvas-header">
          <button
            className="btn-close border-0 outline-0 mt-1 btn-outline-none"
            onClick={() => setShowRightDrawer(false)}
          />
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled text-decoration-none">
            {navItems.map((item: INavOption, index: number) => {
              if (item.subOptions && item.subOptions.length > 0) {
                return (
                  <li
                    key={index}
                    className="p-2 border-bottom border-1 mobile-header-links"
                    onClick={() => handleMenuClick(item)}
                  >
                    {item.label}
                  </li>
                );
              } else {
                return (
                  <li
                    key={index}
                    className="p-2 border-bottom border-1 flex mobile-header-links"
                    onClick={() => handleSubOptionClick(item.path)}
                  >
                    {item.startIcon && item.startIcon}
                    {item.label}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>

      <div
        className={`offcanvas second-drawer offcanvas-end ${
          showLeftDrawer ? "show" : ""
        }`}
        style={{
          visibility: showLeftDrawer ? "visible" : "hidden",
          backgroundColor: "white",
        }}
      >
        <div className="offcanvas-header">
          <button
            className="btn btn-outline-none border-0 mobile-header-links"
            onClick={() => setShowLeftDrawer(false)}
          >
            <IoArrowBack size={23} /> Back
          </button>
        </div>
        <div className="offcanvas-body">
          {/* Display the menu image if available */}
          {selectedMenuImage && (
            <div className="mb-3">
              <img
                src={selectedMenuImage}
                alt="Menu"
                className="img-fluid w-100 rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
          )}

          <ul className="list-unstyled">
            {drawerOptions.map((subItem: INavOption, index: number) => {
              const isExternalLink =
                subItem.path?.startsWith("tel:") ||
                subItem.path?.startsWith("mailto:");

              return (
                <li
                  key={index}
                  className="p-2 border-bottom border-1 mobile-header-links"
                  onClick={
                    !isExternalLink
                      ? () => handleSubOptionClick(subItem.path)
                      : undefined
                  }
                >
                  {isExternalLink ? (
                    <a
                      href={subItem.path}
                      className="text-decoration-none text-dark"
                    >
                      {subItem.startIcon}
                      {subItem.label}
                    </a>
                  ) : (
                    <>
                      {subItem.startIcon}
                      {subItem.label}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
