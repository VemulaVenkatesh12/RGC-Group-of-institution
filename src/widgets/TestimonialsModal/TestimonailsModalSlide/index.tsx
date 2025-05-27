import React from "react";
import { TestimonialsProps } from "../../Testimonials";
import doubleQuotes1 from "../../../assets/double-quotes-1.webp";
import doubleQuotes2 from "../../../assets/double-quotes-2.webp";
import "./testimonialsModalSlide.css";

const TestimonialsModalSlide: React.FC<TestimonialsProps  > = ({
  image,
  name,
  designation,
  description,
}) => {
  return (
    <>
      <div className="row px-5">
        <div className="col-md-3 col-lg-4 col-sm-12">
          <img
            src={image || ""}
            alt="testimonial-image"
            className="img-fluid testimonials-image mx-auto"
          />
          <div>
            <h5 className="mt-2 text-center">{name}</h5>
            <p className="p-font-size-14 text-center">{designation}</p>
          </div>
        </div>
        <div className="col-md-3 col-lg-8 col-sm-12 my-auto">
          <img
            src={doubleQuotes1}
            alt="double-quotes"
            className="img-fluid double-quotes  my-2"
          />
          <div className="testimonial-slide-content">
            <p className="desc-text p-font-size-14 px-1">{description}</p>
          </div>
          <img
            src={doubleQuotes2}
            alt="double-quotes"
            className="img-fluid double-quotes ms-auto"
          />
        </div>
      </div>
    </>
  );
};

export default TestimonialsModalSlide;
