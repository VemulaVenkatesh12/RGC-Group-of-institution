import React, { useEffect, useState } from "react";
import Banner from "../../widgets/Banner";
import EnquiryForm from "../../widgets/EnquiryForm";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import OurCourseTabs, { CourseData } from "../../widgets/OurCourseTabs";
import { getOurCourses, OurCourcesData } from "../../services/ourCourses";
import { getFullImageUrl } from "../../services/actualPath";
import {
  Department,
  OurCoursesLandingPageResponseData,
} from "../../services/commonOurCourses";
import { fetchOurCoursesData } from "../../utils/utilityFunctionServices";

const OurCourses: React.FC = () => {
  const [ourCourseData, setourCourseData] = useState<OurCourcesData | null>(
    null
  );
  const [ourCourseMainData, setOurCourseMainData] =
    useState<OurCoursesLandingPageResponseData | null>(null);
  const fetchCourseData = () => {
    getOurCourses()
      .then((response) => {
        const count = response.data;
        setourCourseData(count);
        console.log("Our Courses Data:", count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchCourseData();
    fetchOurCoursesData(setOurCourseMainData);
  }, []);

  const transformSingleCourse = (department: Department): CourseData => {
    const imageUrl = department.image?.formats?.large?.url;

    return {
      text: department.department_name,
      greenText: department.UG_PG,
      description: department.course_details || "",
      description2: department.course_duration || "", // Using course_duration as description2
      courseImage: getFullImageUrl(imageUrl) || "",
      needApply: true,
      needApplyLink: department.apply_now_link,
      needLink: false,
      needViewDetails: false,
      needViewDetailsLink: department.View_Details_link || "",
    };
  };

  const createCourseCategories = () => {
    if (!ourCourseMainData || !ourCourseMainData.departments) {
      return [];
    }

    const departments = ourCourseMainData.departments;
    const allDepartments = departments; // Include all departments

    const categories: { category: string; courses: CourseData[] }[] = [];

    // 1. FIRST: "All Courses" category
    const allCourses = allDepartments.map(transformSingleCourse);
    categories.push({
      category: ourCourseMainData.all_courses_text,
      courses: allCourses,
    });

    // 2. SECOND: Department types dynamically (excluding Education)
    const departmentTypes = [
      ...new Set(
        allDepartments
          .map((dept) => dept.department_type)
          .filter(
            (type) =>
              type !== undefined && type !== null && type !== "Education" // Exclude Education from having its own tab
          )
      ),
    ] as string[];

    // Preferred order for department types (if they exist)
    const preferredDeptOrder = ["Engineering", "Dental", "Nursing", "Commerce"];

    // Sort department types by preferred order, then alphabetically for others
    const sortedDeptTypes = departmentTypes.sort((a, b) => {
      const aIndex = preferredDeptOrder.indexOf(a);
      const bIndex = preferredDeptOrder.indexOf(b);

      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex; // Both in preferred order
      } else if (aIndex !== -1) {
        return -1; // a is in preferred order, b is not
      } else if (bIndex !== -1) {
        return 1; // b is in preferred order, a is not
      } else {
        return a.localeCompare(b); // Both not in preferred order, sort alphabetically
      }
    });

    sortedDeptTypes.forEach((deptType) => {
      const coursesForType = allDepartments
        .filter((dept) => dept.department_type === deptType)
        .map(transformSingleCourse);

      if (coursesForType.length > 0) {
        const textKey = `${deptType}_text` as keyof typeof ourCourseMainData;
        const categoryName = (ourCourseMainData[textKey] as string) || deptType;

        categories.push({
          category: categoryName,
          courses: coursesForType,
        });
      }
    });

    const educationLevels = [
      ...new Set(
        allDepartments
          .map((dept) => dept.UG_PG)
          .filter((level) => level !== undefined && level !== null)
      ),
    ];

    const preferredEduOrder = ["Undergraduate", "Postgraduate"];

    const sortedEduLevels = educationLevels.sort((a, b) => {
      const aIndex = preferredEduOrder.indexOf(a);
      const bIndex = preferredEduOrder.indexOf(b);

      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      } else if (aIndex !== -1) {
        return -1;
      } else if (bIndex !== -1) {
        return 1;
      } else {
        return a.localeCompare(b);
      }
    });

    sortedEduLevels.forEach((level) => {
      const coursesForLevel = allDepartments
        .filter((dept) => dept.UG_PG === level)
        .map(transformSingleCourse);

      if (coursesForLevel.length > 0) {
        // Dynamic text mapping - check if API has text for this education level
        const textKey = `${level}_text` as keyof typeof ourCourseMainData;
        const categoryName = (ourCourseMainData[textKey] as string) || level;

        categories.push({
          category: categoryName,
          courses: coursesForLevel,
        });
      }
    });

    return categories;
  };

  const courseCategories = createCourseCategories();

  return (
    <>
      <Banner
        bannerText={ourCourseData?.banner_title || "undefined"}
        bannerImageClassName="rgc-institution-banner"
        bannerImageUrl={
          getFullImageUrl(ourCourseData?.banner_image.formats.large.url) || ""
        }
        breadCrumbsList={[
          {
            label: ourCourseData?.banner_course_details_Text || "",
            to: ourCourseData?.banner_course_details_link || "",
          },
        ]}
      />

      <OurCourseTabs
        courseCategories={courseCategories}
        bgClass={true}
        ourCourseDescription={ourCourseData?.Description || ""}
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

export default OurCourses;
