import React from "react";
import { TestimonialsProps } from "..";
import "../testimonials.css";

const TestimonialsSlide: React.FC<TestimonialsProps > = ({
  image,
  name,
  designation,
  description,
}) => {
  return (
    <div className="testimonials-slider-card">
      <img
        src={image || ""}
        className="img-fluid slider-user"
        alt="testimonails-image"
      />
      <h5 className="fw-bold my-3">
        {name}
        {designation}
      </h5>
      <p className="slider-coment">
        <span className="quotes">"</span>
        {description.length > 60
          ? `${description.slice(0, 60)}...`
          : description}
      </p>
    </div>
  );
};

export default TestimonialsSlide;
