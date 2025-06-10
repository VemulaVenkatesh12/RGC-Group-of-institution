import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../widgets/Banner";
import IFrameBanner from "../../widgets/iFrameBanner";
import ContactBanner from "../../widgets/ContactBanner";
import campusBanner from "../../Images/campusfacilitiesbanner.png";
import mba from "../../Images/mba.jpg"; 
import engdept from "../../Images/engdept.jpg"; 

const departments = [
  { name: "Electronics & Communication Engineering", path: "ece" },
  { name: "Bio-medical Engineering - UG / Nanotechnology - PG", path: "biomed-nano" },
  { name: "Electrical & Electronics Engineering - UG / Energy System Engineering - PG", path: "eee-energy" },
  { name: "Mechanical Engineering - UG / Material Science & Technology - PG", path: "mech-material" },
  { name: "Civil Engineering", path: "civil" },
  { name: "Computer Science & Engineering - UG & PG", path: "cse" },
  { name: "Basic Science", path: "basic-science" },
];

const EngineeringDepartments: React.FC = () => {
  return (
    <>
      <Banner
        bannerText={"Departments"}
        bannerImageClassName="rgc-student-scholarship-banner"
        breadCrumbsList={[
          {
            label: "Home",
            to: "/",
          },
        ]}
        bannerImageUrl={campusBanner}
      />

      <div className="container py-5">
        {/* Title Section */}
        <div className="row mb-4">
          <div className="col-14">
            <h5 className="text-danger fw-bold">Engineering Departments</h5>
          </div>
        </div>

        {/* Departments and Image aligned horizontally */}
        <div className="row g-0 d-flex align-items-stretch">
          {/* Departments List */}
          <div className="col-md-6 pe-md-3 d-flex mx-4 my-2">
            <ul className="list-unstyled fs-6 mb-0">
              {departments.map((dept, idx) => (
                <li key={dept.path} className="mb-4">
                  <Link
                    to={`/departments/${dept.path}`}
                    className={`text-decoration-none d-block ${
                      idx === 0 ? "fw-bold text-dark" : "text-dark"
                    }`}
                  > 
                    {dept.name}
                    {idx === 0 && (
                      <span className="text-danger ms-2">&uarr;</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Image aligned with list */}
          <div className="col-md-5 ps-md-3 text-center my-1">
            <img
              src={engdept}
              alt="Engineering Departments"
              className="img-fluid h-100 w-100 object-fit-cover"
          style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* MBA Section */}
        <div className="row mt-5 align-items-center mx-0">
          <div className="col-md-4">
            <img
              src={mba}
              alt="MBA"
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h6 className="text-danger fw-bold mb-1">Business Management</h6>
            <Link
              to="/departments/mba"
              className="text-decoration-none text-dark fw-semibold"
            >
              Master Of Business Administration (MBA)
              <span className="text-danger ms-2">&uarr;</span>
            </Link>
          </div>
        </div>
      </div>

      <IFrameBanner requiredFooterBorder={false} />
      <ContactBanner />
    </>
  );
};

export default EngineeringDepartments;
