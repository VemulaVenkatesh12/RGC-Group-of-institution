import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "../OurCourse/ourcource.css";
import InfoCard from "../InfoCard";

import { Department, OurCoursesLandingPageResponseData } from "../../services/commonOurCourses";
import { fetchOurCoursesData } from "../../utils/utilityFunctionServices";
import { getFullImageUrl } from "../../services/actualPath";

enum CourseType {
  UNDERGRADUATE = "Undergraduate",
  POSTGRADUATE = "Postgraduate",
}

interface OurCoursePropsTitleSubtitle {
  title?: string;
  subtitle?: string;
}

const OurCourse: React.FC<OurCoursePropsTitleSubtitle> = ({ title, subtitle }) => {
  const [courseType, setCourseType] = useState<CourseType>(CourseType.UNDERGRADUATE);
  const [ourCourseMainData, setOurCourseMainData] = useState<OurCoursesLandingPageResponseData | null>(null);

  useEffect(() => {
    fetchOurCoursesData(setOurCourseMainData);
  }, []);

  const handleChangeCourseType = () => {
    setCourseType((prevType) =>
      prevType === CourseType.UNDERGRADUATE ? CourseType.POSTGRADUATE : CourseType.UNDERGRADUATE
    );
  };

  const constantTabs = ["Engineering", "Dental", "Nursing", "Education", "Commerce"];

  const getDepartmentsByType = (departmentType: string): Department[] => {
    if (!ourCourseMainData?.departments) return [];
    
    return ourCourseMainData.departments.filter(
      (dept) =>
        dept.UG_PG === courseType && 
        dept.department_type?.toLowerCase() === departmentType.toLowerCase()
    );
  };

  
  return (
    <>
      <div className="coursebg p-5">
        <div className="container">
          <div className="col-12">
            <Typography
              sx={{
                color: "var(--color-pure-black)",
                fontSize: "var(--font-size-18)",
                fontWeight: "var(--font-weight-600)",
              }}
            >
              {title}
            </Typography>
            <div className="row">
              <div className="col-lg-9 col-md-9 col-sm-12 p-0">
                <Typography
                  sx={{
                    color: "var(--color-white)",
                    fontSize: "var(--font-size-48)",
                    fontWeight: "var(--font-weight-600)",
                  }}
                  component="h2"
                  className="course-text"
                >
                 {subtitle}
                </Typography>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="dropdown">
                  <button
                    className="btn dropdown-cust-btn dropdown-toggle text-start fw-bold "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {courseType}
                  </button>
                  <ul className="dropdown-menu ms-auto w-100">
                    <li
                      className="dropdown-item"
                      onClick={handleChangeCourseType}
                    >
                      {courseType === CourseType.UNDERGRADUATE
                        ? CourseType.POSTGRADUATE
                        : CourseType.UNDERGRADUATE}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
           <ul className="nav nav-pills course-pill mb-3" id="pills-tab" role="tablist">
              {constantTabs.map((tab, index) => (
                <li className="nav-item p-1" role="presentation" key={tab}>
                  <button
                    className={`nav-link course-link coursebtn ${index === 0 ? "active" : ""}`}
                    id={`pills-${tab}-tab`}
                    data-bs-toggle="pill"
                    data-bs-target={`#pills-${tab}`}
                    type="button"
                    role="tab"
                    aria-controls={`pills-${tab}`}
                    aria-selected={index === 0}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mt-4 mb-3 p-0">
        <div className="tab-content" id="pills-tabContent">
          {constantTabs.map((tab, index) => {
            const departments = getDepartmentsByType(tab);

            return (
              <div
                className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                id={`pills-${tab}`}
                role="tabpanel"
                aria-labelledby={`pills-${tab}-tab`}
                tabIndex={0}
                key={tab}
              >
                <div className="col-12">
                  <div className="row">
                    {departments.length > 0 ? (
                      departments.map((department, deptIndex) => {
                        const imageUrl = department?.image?.formats?.large?.url;
                        return (
                          <div key={deptIndex} className="col-lg-6 col-md-6 col-sm-12">
                            <InfoCard
                              text={department?.department_name ?? "No Name"}
                              greenText={department?.UG_PG}
                              description={department?.course_details}
                              description2={department?.course_duration}
                              courseImage={getFullImageUrl(imageUrl) || ""}
                              needApply={true}
                              needLink={false}
                              needViewDetails={false}
                              needLinkNavigateTo={department?.View_Details_link}
                              needApplyNavigateTo={department?.apply_now_link || ""}
                            />
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center text-muted py-4">
                        No data available for {tab} in {courseType.toLowerCase()} courses.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurCourse;
