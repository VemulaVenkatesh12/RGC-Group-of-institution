import React, { useEffect, useState } from "react";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import AboutUsBanner from "../../assets/aboutUsBanner2.webp";
import Banner from "../../widgets/Banner";
import {
    DepartmentFaculityResponseData,
    getDepartmentFaculityData,
    DepartmentCatagory,
} from "../../services/faculties";
import LeadershipCard from "../../widgets/LeadershipCard";
import { getFullImageUrl } from "../../services/actualPath";

const FacultyPage: React.FC = () => {
    const [departmentFaculityData, setDepartmentFaculityData] =
        useState<DepartmentFaculityResponseData | null>(null);
    const [activeDepartmentId, setActiveDepartmentId] = useState<number | null>(null);

    useEffect(() => {
        getDepartmentFaculityData()
            .then((response) => {
                const data = response.data;
                setDepartmentFaculityData(data);

                // Set first department as active by default
                if (data.departments.length > 0) {
                    setActiveDepartmentId(data.departments[0].id);
                }
            })
            .catch((error) => {
                console.error("Error fetching faculty data", error);
            });
    }, []);

    const activeDepartment = departmentFaculityData?.departments.find(
        (dept) => dept.id === activeDepartmentId
    );

    return (
        <>
            <Banner
                bannerText="Faculties"
                bannerImageClassName="rgc-institution-banner"
                breadCrumbsList={[
                    {
                        label: "About us",
                        to: "/about-us",
                    },
                ]}
                bannerImageUrl={AboutUsBanner}
            />

            {/* Department Tabs  */}
            <div className="d-flex justify-content-between align-items-center container px-2 mt-5">
                {/* Tab Labels */}
                <div className="d-flex gap-4">
                    {departmentFaculityData?.departments.map((dept) => (
                        <div
                            key={dept.id}
                            onClick={() => setActiveDepartmentId(dept.id)}
                            style={{
                                cursor: "pointer",
                                fontWeight: activeDepartmentId === dept.id ? "bold" : "normal",
                                color: activeDepartmentId === dept.id ? "#000" : "#888",
                                borderBottom: activeDepartmentId === dept.id ? "3px solid #1abc9c" : "none",
                                paddingBottom: "6px",
                            }}
                        >
                            {dept.department_name}
                        </div>
                    ))}
                </div>

                {/*  Filter Label */}
                <div style={{ cursor: "pointer", color: "#444", fontSize: "14px" }}>
                    <i className="bi bi-funnel fw-bold"></i> {/* Bootstrap filter icon */}
                    &nbsp;FILTER
                </div>
            </div>


            {/* Faculty Cards */}
            <div className="container-fluid" style={{ marginTop: "20px", paddingLeft: "55px", paddingRight: "55px"
                
             }}>
                {activeDepartment?.department_catagory.map((category: DepartmentCatagory) => (
                    <div key={category.id} className="px-xxl-5 px-lg-5 px-md-4 px-sm-3 px-2 mb-3">
                        {/* Category Title */}
                        <div className="row mb-3">
                            <div className="col-12 pt-3">
                                <h5 className="mb-0 text-bold text-danger">{category.department_catagory_name}</h5>
                            </div>
                        </div>

                        {/* Faculty Cards */}
                        <div className="d-flex flex-wrap justify-content-between gap-4">
                            {category.Faculties_details?.map((faculty) => (
                                <div key={faculty.id} style={{ flex: "1 0 21%", maxWidth: "23%" }}>
                                    <LeadershipCard
                                        title={faculty?.name ?? ""}
                                        description={faculty?.designation ?? ""}
                                        cardImg={getFullImageUrl(faculty?.image?.formats?.small?.url || "") || ""}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
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

export default FacultyPage;
