import React, { useState } from "react";
import { Typography } from "@mui/material";
import InfoCard from "../InfoCard";
import "./ourCourseTabs.css";
export interface CourseData {
  text: string;
  greenText: string;
  description: string;
  description2: string;
  courseImage: string;
  needApply: boolean;
  needViewDetails?: boolean;
  needLink?: boolean;
  needApplyLink?: string;
  needViewDetailsLink?: string;
}

interface CourseTabsProps {
  courseCategories: {
    category: string;
    courses: CourseData[];
  }[];
  bgClass: boolean;
  ourCourseDescription?: string
}

const OurCourseTabs: React.FC<CourseTabsProps> = ({
  courseCategories,
  bgClass,
  ourCourseDescription,
  // viewDetailsPath,
  //applyBtnPath,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div
        id="condition-div"
        className={`p-3 ${bgClass ? "course-card-bg" : ""}`}
      >
        <div className="text-start mt-5 container ">
          {bgClass ? (
            <div>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  pl: "6px",
                }}
              >
                {ourCourseDescription}
              </Typography>
            </div>
          ) : (
            <div>
              <Typography
                sx={{
                  color: "#D92D28",
                  fontSize: "var(--font-size-18)",
                  fontWeight: "var(--font-weight-600)",
                }}
              >
                Our Course
              </Typography>
              <Typography
                sx={{
                  color: "#333333",
                  fontSize: "var(--font-size-48)",
                  fontWeight: "var(--font-weight-600)",
                }}
              >
                What you will study?
              </Typography>
            </div>
          )}

          <ul
            className="nav nav-pills our-course-pill mb-3 mt-3 course-tabs-list"
            id="pills-tab"
            role="tablist"
          >
            {courseCategories.map(
              (
                category: { category: string; courses: CourseData[] },
                index: number
              ) => {
                const isSpecialCategory =
                  category.category === "Undergraduate" ||
                  category.category === "Postgraduate" ||
                  category.category === "UG Courses" ||
                  category.category === "PG Courses" ||
                  category.category === "Ph.D";

                const isSingleTab = courseCategories.length === 1;

                return (
                  <li
                    className="nav-item p-1"
                    role="presentation"
                    key={index}
                    style={{
                      flex:
                        isSpecialCategory && !isSingleTab
                          ? "1 0 33%"
                          : isSingleTab
                          ? "0 1 auto"
                          : "20%",
                      listStyle: "none",
                    }}
                  >
                    <div className="d-flex w-100">
                      <button
                        className={`nav-link our-course-link ${
                          activeTab === index ? "active" : ""
                        } our-course-btn`}
                        type="button"
                        role="tab"
                        aria-controls={`pills-${category.category}`}
                        aria-selected={activeTab === index ? "true" : "false"}
                        onClick={() => handleTabClick(index)}
                        style={{
                          width: isSingleTab ? "auto" : "100%",
                        }}
                      >
                        {category.category}
                      </button>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>

      <div className="container pb-5 ">
        <div className="tab-content" id="pills-tabContent">
          {courseCategories.map(
            (
              category: { category: string; courses: CourseData[] },
              index: number
            ) => (
              <div
                key={index}
                className={`tab-pane fade ${
                  activeTab === index ? "show active" : ""
                }`}
                id={`pills-${category.category}`}
                role="tabpanel"
                aria-labelledby={`pills-${category.category}-tab`}
                tabIndex={0}
              >
                <div className="col-12">
                  <div className="row ">
                    {category.courses.map((course: CourseData, idx: number) => (
                      <div
                        key={idx}
                        className={`ps-0 col-sm-12 mt-3 ${
                          bgClass ? "col-lg-4 col-md-4" : "col-lg-6 col-md-6"
                        }`}
                      >
                        <InfoCard
                          text={course.text}
                          greenText={course.greenText}
                          description={course.description}
                          description2={course.description2}
                          courseImage={course.courseImage}
                          needApply={course.needApply}
                          needViewDetails={course.needViewDetails}
                          needLink={course.needLink}
                          needApplyNavigateTo={course.needApplyLink}
                          needLinkNavigateTo={course.needViewDetailsLink}
                          minHeight={bgClass ? "400px" : "auto"}
                          // needApplyNavigateTo={applyBtnPath}
                          // needLinkNavigateTo={viewDetailsPath}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default OurCourseTabs;
