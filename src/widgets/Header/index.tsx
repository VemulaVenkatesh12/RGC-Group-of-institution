import React, { useState, useEffect, useCallback, useRef } from "react";
import { IoMail } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HeaderModal, { LinkItem } from "../HeaderModal";
import { Button } from "@mui/material";
import CustomButton from "../CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { getHeaderInfoData, HeaderInforData } from "../../services/headerInfo";
import {
  SearchEngine,
  SearchResult,
} from "../../services/SearchFunctionlity/search";
import { getFullImageUrl } from "../../services/actualPath";

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [modalImage, setModalImage] = useState<string>("");
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalLinks, setModalLinks] = useState<LinkItem[]>([]);
  const [isRgcLink, setRgcLink] = useState<boolean>(false);
  const [headerData, setHeaderData] = useState<HeaderInforData | null>(null);

  /// Enhanced search state variables
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClose = () => setShowModal(false);
  const navigate = useNavigate();
  const handleShow = (
    content: React.ReactNode,
    headImage: string,
    title: string,
    links: LinkItem[] = [],
    rgc?: boolean
  ) => {
    setModalContent(content);
    setModalImage(headImage);
    setModalTitle(title);
    setModalLinks(links);
    setShowModal(true);
    setRgcLink(rgc ?? false);
  };

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

  const debouncedSearch = useCallback((query: string) => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      setIsSearching(true);

      if (query.trim().length >= 1) {
        const results = SearchEngine.search(query, {
          limit: 8,
          fuzzyMatch: true,
          minScore: 5,
        });

        const suggestions = SearchEngine.getSuggestions(query, 5);

        setSearchResults(results);
        setSuggestions(suggestions);
        setShowSearchResults(results.length > 0);
        setShowSuggestions(suggestions.length > 0 && results.length === 0);
      } else {
        setSearchResults([]);
        setSuggestions([]);
        setShowSearchResults(false);
        setShowSuggestions(false);
      }

      setSelectedIndex(-1);
      setIsSearching(false);
    }, 150); // 150ms debounce
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const handleSearchSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!searchQuery.trim()) return;

      // If there's a selected item from keyboard navigation
      if (selectedIndex >= 0 && searchResults.length > 0) {
        const selectedResult = searchResults[selectedIndex];
        navigate(selectedResult.path);
        setSearchQuery("");
        setShowSearchResults(false);
        setShowSuggestions(false);
        return;
      }

      // Otherwise, find best match
      const bestMatch = SearchEngine.getBestMatch(searchQuery, { minScore: 5 });
      if (bestMatch) {
        navigate(bestMatch.path);
        setSearchQuery("");
        setShowSearchResults(false);
        setShowSuggestions(false);
      }
    },
    [searchQuery, selectedIndex, searchResults, navigate]
  );

  const handleSearchResultClick = useCallback(
    (path: string) => {
      navigate(path);
      setSearchQuery("");
      setShowSearchResults(false);
      setShowSuggestions(false);
      setSelectedIndex(-1);
    },
    [navigate]
  );

  const handleSuggestionClick = useCallback(
    (suggestion: string) => {
      setSearchQuery(suggestion);
      debouncedSearch(suggestion);
      searchInputRef.current?.focus();
    },
    [debouncedSearch]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const totalItems = showSearchResults
        ? searchResults.length
        : showSuggestions
        ? suggestions.length
        : 0;

      switch (e.key) {
        case "Enter":
          e.preventDefault();
          handleSearchSubmit(e as any);
          break;

        case "Escape":
          setShowSearchResults(false);
          setShowSuggestions(false);
          setSelectedIndex(-1);
          searchInputRef.current?.blur();
          break;

        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev < totalItems - 1 ? prev + 1 : 0));
          break;

        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : totalItems - 1));
          break;
        case "Tab":
          if (showSearchResults || showSuggestions) {
            e.preventDefault();
            setShowSearchResults(false);
            setShowSuggestions(false);
            setSelectedIndex(-1);
          }
          break;
      }
    },
    [
      showSearchResults,
      showSuggestions,
      searchResults.length,
      suggestions.length,
      handleSearchSubmit,
    ]
  );

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setShowSearchResults(false);
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  const socialMediaData = [
    {
      icon: <TiSocialFacebook />,
      to: headerData?.hedder_logo.fb_link || "",
    },
    {
      icon: <FaXTwitter />,
      to: headerData?.hedder_logo.twitter_link || "",
    },
    {
      icon: <TbBrandInstagramFilled />,
      to: headerData?.hedder_logo.insta_link || "",
    },
    {
      icon: <FaLinkedinIn />,
      to: headerData?.hedder_logo.linkedIn_link || "",
    },
    {
      icon: <IoLogoYoutube />,
      to: headerData?.hedder_logo.youtube_link || "",
    },
  ];

  const handlePathChange = (path: string): void => {
    navigate(path);
  };

  const getNavigationMenu = (menuName: string) => {
    return headerData?.navigation_menu.find(
      (menu) => menu.menu_name === menuName
    );
  };

  // Navigation menus
  const aboutUsMenu = getNavigationMenu("About Us");
  const academicsMenu = getNavigationMenu("Academics & Educations");
  const campusLifeMenu = getNavigationMenu("Campus Life");
  const healthCareMenu = getNavigationMenu("Health Care");
  const institutionsMenu = getNavigationMenu("Our Institutions");

  return (
    <>
      <div className="position-relative">
        <section>
          <div className="bg-gray">
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <div className="d-flex gap-4 p-1 bg-white">
                    {socialMediaData &&
                      socialMediaData.length > 0 &&
                      socialMediaData.map((data, index) => (
                        <div
                          key={index}
                          onClick={() => handlePathChange(data.to)}
                        >
                          {data.icon}
                        </div>
                      ))}
                  </div>
                </div>
                <div className="col-md-10 col-lg-10">
                  <div className="d-flex justify-content-end align-items-center pt-1">
                    <ul className="list-unstyled  d-flex gap-4 align-items-center m-0">
                      <li className="pe-4 border-right-thin">
                        <Link
                          className="text-decoration-underline color-black-primary p-font-size-12"
                          to={headerData?.hedder_logo.NIRF_link || ""}
                        >
                          {headerData?.hedder_logo.NIRF_text}
                        </Link>
                      </li>
                      <li className="pe-4 border-right-thin">
                        <Link
                          className="text-decoration-underline color-black-primary p-font-size-12"
                          to={headerData?.hedder_logo.NACC_Link || ""}
                        >
                          {headerData?.hedder_logo.NACC_text || "NAAC"}
                        </Link>
                      </li>
                      <li className="pe-4 border-right-thin">
                        <a
                          className="text-decoration-none color-black-primary p-font-size-12"
                          href={`tel:${headerData?.hedder_logo.number}`}
                        >
                          <div className="d-flex align-items-center gap-2 p-font-size-12">
                            <IoIosCall
                              size={20}
                              className="icons-red-primary"
                            />
                            <p className="call-link">
                              {headerData?.hedder_logo.number}
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-decoration-underline color-black-primary p-font-size-12"
                          href={`mailto:${headerData?.hedder_logo.email_id}`}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <IoMail size={20} className="icons-red-primary" />
                            <p className="email-link">
                              {headerData?.hedder_logo.email_id}
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <nav className="navbar navbar-expand-lg bg-white pb-0 rounded-0">
          <div className="container">
            <div className="col-lg-5">
              <Link to="/">
                <img
                  className="img-fluid w-50"
                  src={getFullImageUrl(headerData?.hedder_logo.logo?.url) || ""}
                  alt="header-logo"
                />
              </Link>

              <ul className="navbar-nav mb-1 mt-2">
                <Link
                  to={headerData?.hedder_logo.Engineering_link || "undefined"}
                  target="_blank"
                >
                  <Button
                    sx={{
                      color: "black",
                      textTransform: "none",
                      fontSize: "12px",
                    }}
                    variant="text"
                    className="header-sub-link-1 sub-links py-0 rounded-0"
                  >
                    {headerData?.hedder_logo.Engineering}
                  </Button>
                </Link>
                <Link
                  to={headerData?.hedder_logo.Dental_link || "undefined"}
                  target="_blank"
                >
                  <Button
                    sx={{
                      color: "black",
                      textTransform: "none",
                      fontSize: "12px",
                    }}
                    variant="text"
                    className="header-sub-link-2 sub-links py-0 rounded-0"
                  >
                    {headerData?.hedder_logo.Dental_text}
                  </Button>
                </Link>
                <Link
                  to={headerData?.hedder_logo.Nursing_link || "undefined"}
                  target="_blank"
                >
                  <Button
                    sx={{
                      color: "black",
                      textTransform: "none",
                      fontSize: "12px",
                    }}
                    variant="text"
                    className="header-sub-link-3 sub-links py-0 rounded-0"
                  >
                    {headerData?.hedder_logo.Nursing_text}
                  </Button>
                </Link>
                <Link
                  to={headerData?.hedder_logo.Education_link || "undefined"}
                  target="_blank"
                >
                  <Button
                    sx={{
                      color: "black",
                      textTransform: "none",
                      fontSize: "12px",
                    }}
                    variant="text"
                    className="header-sub-link-4 sub-links py-0 rounded-0"
                  >
                    {headerData?.hedder_logo.Education_text}
                  </Button>
                </Link>
                <Link
                  to={headerData?.hedder_logo.Commerce_link || "undefined"}
                  target="_blank"
                >
                  <Button
                    sx={{
                      color: "black",
                      textTransform: "none",
                      fontSize: "12px",
                    }}
                    variant="text"
                    className="header-sub-link-5 sub-links py-0 rounded-0"
                  >
                    {headerData?.hedder_logo.Commerce_text}
                  </Button>
                </Link>
              </ul>
            </div>

            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-lg-0 d-flex gap-4 align-items-center justify-content-end header-links">
                <li className="nav-item">
                  <Link
                    className="nav-link color-black-secondary p-font-size-14"
                    aria-current="page"
                    to={headerData?.hedder_logo.Our_Courses_link || "undefined"}
                  >
                    {headerData?.hedder_logo.Our_Courses_text}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link color-black-secondary p-font-size-14"
                    aria-current="page"
                    to={
                      headerData?.hedder_logo.Alumni_Services_link ||
                      "undefined"
                    }
                  >
                    {headerData?.hedder_logo.Alumni_Services_text}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link color-black-secondary p-font-size-14"
                    aria-current="page"
                    to={headerData?.hedder_logo.News_Events_link || "undefined"}
                  >
                    {headerData?.hedder_logo.News_Events_text}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  color-black-secondary p-font-size-14"
                    aria-current="page"
                    to={headerData?.hedder_logo.Staff_login_link || "#"}
                  >
                    <div className="d-flex align-items-center gap-1 p-font-size-14 me-4">
                      <p>{headerData?.hedder_logo.Staff_login_text}</p>
                      <BsArrowRightShort
                        size={24}
                        className="icons-red-secondary"
                      />
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <CustomButton
                    label={headerData?.hedder_logo.Reach_Us_text}
                    path={headerData?.hedder_logo.Reach_Us_link}
                    btnClassName="btn btn-md px-5 py-2 text-white red-btn p-font-size-14"
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="bg-purple custom-nav">
        <div className="container ps-0">
          <div className="row d-flex align-items-center justify-content-center text-center ps-0 ">
            <div className="col-md-2">
              <div className="link-hover">
                <button
                  type="button"
                  className="btn link-hover nav-btn border-0 rounded-0 w-100 link-font-size-14"
                  onClick={() =>
                    handleShow(
                      <div></div>,
                      getFullImageUrl(aboutUsMenu?.image?.url) ?? "",
                      aboutUsMenu?.menu_name || "undefined",
                      [
                        {
                          name: aboutUsMenu?.text_1 || "Undefined",
                          href: aboutUsMenu?.text1_link || "undefined",
                          column: "left",
                        },
                        {
                          name: aboutUsMenu?.text2 || "undefined",
                          href: aboutUsMenu?.text2_link || "undefined",
                          column: "left",
                        },
                        {
                          name: aboutUsMenu?.text3 || "undefined",
                          href: aboutUsMenu?.text3_link || "undefined",
                          column: "left",
                        },
                        {
                          name: aboutUsMenu?.text4 || "undefined",
                          href: aboutUsMenu?.text_4_link || "undefined",
                          column: "left",
                        },
                        {
                          name: aboutUsMenu?.text5 || "undefined",
                          href: aboutUsMenu?.text5_link || "undefined",
                          column: "left",
                        },

                        {
                          name: "Departments",
                          href: "/departments",
                          column: "right",
                        },
                      ]
                    )
                  }
                >
                  {aboutUsMenu?.menu_name || "undefined"}
                  <ArrowDropDownIcon
                    sx={{ color: "white" }}
                    className="drop-icon"
                  />
                </button>
              </div>
            </div>
            <div className="col-md-2 px-0">
              <div className="link-hover">
                <button
                  type="button"
                  className="btn link-hover nav-btn border-0 rounded-0 w-100 link-font-size-14"
                  onClick={() =>
                    handleShow(
                      <div></div>,
                      getFullImageUrl(academicsMenu?.image?.url) ?? "",
                      academicsMenu?.menu_name || "undefined",
                      [
                        {
                          name: academicsMenu?.text_1 || "undefined",
                          href: academicsMenu?.text1_link || "undefined",
                          column: "left",
                        },
                        {
                          name: academicsMenu?.text2 || "undefined",
                          href: academicsMenu?.text2_link || "undefined",
                          column: "left",
                        },
                        {
                          name: academicsMenu?.text3 || "undefined",
                          href: academicsMenu?.text3_link || "undefined",
                          column: "left",
                        },
                        {
                          name: academicsMenu?.text4 || "undefined",
                          href: academicsMenu?.text_4_link || "undefined",
                          column: "left",
                        },
                        {
                          name: academicsMenu?.text5 || "undefined",
                          href: academicsMenu?.text5_link || "undefined",
                          column: "left",
                        },

                        {
                          name: academicsMenu?.text_6 || "undefined",
                          href: academicsMenu?.text6_link || "undefined",
                          column: "right",
                        },

                        {
                          name: "Students Cell",
                          href: "/Students-Cell",
                          column: "right",
                        }
                      ]
                    )
                  }
                >
                  {academicsMenu?.text_1}
                  <ArrowDropDownIcon
                    sx={{ color: "white" }}
                    className="drop-icon"
                  />
                </button>
              </div>
            </div>
            <div className="col-md-2">
              <div className="link-hover">
                <button
                  type="button"
                  className="btn link-hover border-0 rounded-0 w-100 link-font-size-14"
                  onClick={() =>
                    handleShow(
                      <div></div>,
                      getFullImageUrl(campusLifeMenu?.image?.url) ?? "",
                      campusLifeMenu?.menu_name || "undefined",
                      [
                        {
                          name: campusLifeMenu?.text_1 || "undefined",
                          href: campusLifeMenu?.text1_link || "undefined",
                          column: "left",
                        },
                        {
                          name: campusLifeMenu?.text2 || "undefined",
                          href: campusLifeMenu?.text2_link || "undefined",
                          column: "left",
                        },
                        {
                          name: campusLifeMenu?.text3 || "undefined",
                          href: campusLifeMenu?.text3_link || "/gallery",
                          column: "left",
                        },
                        {
                          name: campusLifeMenu?.text4 || "undefined",
                          href: campusLifeMenu?.text_4_link || "undefined",
                          column: "left",
                        },
                      ]
                    )
                  }
                >
                  {campusLifeMenu?.menu_name || "undefined"}
                  <ArrowDropDownIcon
                    sx={{ color: "white" }}
                    className="drop-icon"
                  />
                </button>
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="link-hover">
                <button
                  type="button"
                  className="btn link-hover border-0 rounded-0 w-100 link-font-size-14"
                  onClick={() =>
                    handleShow(
                      <div></div>,
                      getFullImageUrl(healthCareMenu?.image?.url) ?? "",
                      healthCareMenu?.menu_name || "undefined",
                      [
                        {
                          name: healthCareMenu?.text_1 || "undefined",
                          href: healthCareMenu?.text1_link || "/health-care",
                          column: "left",
                        },
                        {
                          name: healthCareMenu?.text2 || "undefined",
                          href: healthCareMenu?.text2_link || "undefined",
                          column: "left",
                        },
                        {
                          name: healthCareMenu?.text3 || "undefined",
                          href: healthCareMenu?.text3_link || "undefined",
                          column: "left",
                        },
                        {
                          name: healthCareMenu?.text4 || "undefined",
                          href: healthCareMenu?.text_4_link || "undefined",
                          column: "left",
                        },
                        {
                          name: healthCareMenu?.text5 || "undefined",
                          href: healthCareMenu?.text5_link || "undefined",
                          column: "right",
                        },
                        {
                          name: healthCareMenu?.text_6 || "undefined",
                          href: healthCareMenu?.text6_link || "undefined",
                          column: "right",
                        },
                      ]
                    )
                  }
                >
                  {healthCareMenu?.menu_name || "undefined"}
                  <ArrowDropDownIcon
                    sx={{ color: "white" }}
                    className="drop-icon"
                  />
                </button>
              </div>
            </div>
            <div className="col-md-2">
              <div className="link-hover">
                <button
                  type="button"
                  className="btn link-hover border-0 rounded-0 w-100 link-font-size-14"
                  onClick={() =>
                    handleShow(
                      <div></div>,
                      getFullImageUrl(institutionsMenu?.image?.url) ?? "",
                      institutionsMenu?.menu_name || "undefined",
                      [
                        {
                          name: institutionsMenu?.text_1 || "undefined",
                          href: institutionsMenu?.text1_link || "undefined",
                          column: "left",
                        },
                        {
                          name: institutionsMenu?.text2 || "undefined",
                          href: institutionsMenu?.text2_link || "undefined",
                          column: "left",
                        },
                        {
                          name: institutionsMenu?.text3 || "undefined",
                          href: institutionsMenu?.text3_link || "undefined",
                          column: "left",
                        },
                        {
                          name: institutionsMenu?.text4 || "undefined",
                          href: institutionsMenu?.text_4_link || "undefined",
                          column: "left",
                        },
                        {
                          name: institutionsMenu?.text5 || "undefined",
                          href: institutionsMenu?.text5_link || "undefined",
                          column: "left",
                        },
                      ],
                      true
                    )
                  }
                >
                  {institutionsMenu?.menu_name || "undefined"}
                  <ArrowDropDownIcon
                    sx={{ color: "white" }}
                    className="drop-icon"
                  />
                </button>
              </div>
            </div>
            <div className="col-md-2 px-0">
              <li className="list-unstyled position-relative">
                <form onSubmit={handleSearchSubmit}>
                  <div className="input-group input-search">
                    <input
                      ref={searchInputRef}
                      type="text"
                      className="form-control border-0 border-right-0"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onKeyDown={handleKeyDown}
                      autoComplete="off"
                    />
                    <span
                      className="input-group-text bg-white border-0"
                      id="basic-addon1"
                      onClick={handleSearchSubmit}
                      style={{ cursor: "pointer" }}
                    >
                      {isSearching ? (
                        <div
                          className="spinner-border spinner-border-sm text-secondary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        <SearchIcon sx={{ color: "gray", fontSize: "20px" }} />
                      )}
                    </span>
                  </div>
                </form>

                {showSearchResults && searchResults.length > 0 && (
                  <div
                    ref={searchResultsRef}
                    className="position-absolute w-100 bg-white border shadow-sm"
                    style={{
                      top: "100%",
                      zIndex: 1000,
                      maxHeight: "300px",
                      overflowY: "auto",
                      width: "100%",
                    }}
                  >
                    {searchResults.map((result, index) => (
                      <div
                        key={`result-${index}`}
                        className={`p-3 border-bottom cursor-pointer ${
                          selectedIndex === index ? "bg-light" : ""
                        }`}
                        onClick={() => handleSearchResultClick(result.path)}
                        style={{ cursor: "pointer" }}
                        onMouseEnter={() => setSelectedIndex(index)}
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="flex-grow-1">
                            <div
                              className="font-weight-medium text-dark"
                              style={{ fontSize: "14px" }}
                            >
                              {result.title}
                            </div>
                            {result.description && (
                              <div
                                className="text-muted mt-1"
                                style={{ fontSize: "12px", lineHeight: "1.4" }}
                              >
                                {result.description.length > 80
                                  ? result.description.substring(0, 80) + "..."
                                  : result.description}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Clean Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <div
                    ref={searchResultsRef}
                    className="position-absolute w-100 bg-white border shadow-sm"
                    style={{
                      top: "100%",
                      zIndex: 1000,
                      width: "100%",
                    }}
                  >
                    {suggestions.map((suggestion, index) => (
                      <div
                        key={`suggestion-${index}`}
                        className={`p-2 cursor-pointer ${
                          selectedIndex === index ? "bg-light" : ""
                        }`}
                        onClick={() => handleSuggestionClick(suggestion)}
                        style={{ cursor: "pointer" }}
                        onMouseEnter={() => setSelectedIndex(index)}
                      >
                        <span style={{ fontSize: "14px", color: "#666" }}>
                          {suggestion}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Simple No Results Message */}
                {(showSearchResults || showSuggestions) &&
                  searchResults.length === 0 &&
                  suggestions.length === 0 &&
                  searchQuery.trim().length >= 1 &&
                  !isSearching && (
                    <div
                      ref={searchResultsRef}
                      className="position-absolute w-100 bg-white border shadow-sm"
                      style={{
                        top: "100%",
                        zIndex: 1000,
                        width: "100%",
                      }}
                    >
                      <div className="p-3 text-center">
                        <div
                          className="text-muted"
                          style={{ fontSize: "14px" }}
                        >
                          No results found for "{searchQuery}"
                        </div>
                      </div>
                    </div>
                  )}
              </li>
            </div>
          </div>
        </div>
      </div>

      <HeaderModal
        show={showModal}
        onHide={handleClose}
        modalImage={modalImage}
        title={modalTitle}
        links={modalLinks}
        isRgcLink={isRgcLink}
      >
        {modalContent}
      </HeaderModal>
    </>
  );
};

export default Header;
