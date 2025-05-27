import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "../Testimonials/testimonials.css";
import TestimonialsModal from "../TestimonialsModal";
import Slider from "../Slider";
import TestimonialsSlide from "./TestimonialsSlide";
import { getFullImageUrl } from "../../services/actualPath";
import { TestimonialsDetail } from "../../services/About_Courses_landing_page";

export interface TestimonialsProps {
  image: string | null;
  name: string;
  description: string;
  designation: string;
} 

 interface TestimonialsContainerProps  {
  testimonialsData?: TestimonialsDetail[];
  title?: string;
  subtitle?: string;
}

const Testimonials: React.FC<TestimonialsContainerProps > = ({ 
  testimonialsData = [], 
  title = "", 
  subtitle = "" 
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedName, setSelectedName] = useState<string>("");
  const [formattedTestimonials, setFormattedTestimonials] = useState<TestimonialsProps[]>([]);

  useEffect(() => {
  if (!testimonialsData?.length) return;

  const formatted = testimonialsData.map(item => ({
    image: getFullImageUrl(item.image?.url || ''),
    name: item.name,
    description: item.details,
    designation: item.role
  }));

  setFormattedTestimonials(formatted);
  console.log('Formatted Testimonials:', formatted);
}, [testimonialsData]);


  const showTestModal = (selectedName: string) => {
    setShowModal(true);
    setSelectedName(selectedName);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container p-0">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Typography
              sx={{
                color: "var(--color-deep-red)",
                fontSize: "var(--font-size-18)",
                fontWeight: "var(--font-weight-600)",
              }}
              component="h5"
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: "#333333",
                fontSize: "var(--font-size-42)",
                fontWeight: "var(--font-weight-600)",
                fontFamily: "var(--font-family-work-sans)!important",
                lineHeight: 1.1,
              }}
              className="testimonial-title"
            >
              {subtitle}
            </Typography>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="slider-container">
              <Slider
                withControls={true}
                infinite={true}
                slidesToShow={3}
                autoplay={true}
                speed={500}
                slidesToScroll={1}
                position="slider-controls2 ms-2"
                slidesList={formattedTestimonials.map(
                  (testimonial: TestimonialsProps, idx: number) => (
                    <div key={idx}>
                      <div
                        className="slider-card p-3 text-start "
                        onClick={() => showTestModal(testimonial.name)}
                      >
                        <TestimonialsSlide
                          image={testimonial.image}
                          name={testimonial.name}
                          description={testimonial.description}
                          designation={testimonial.designation}
                        />
                      </div>
                    </div>
                  )
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <TestimonialsModal
        selectedName={selectedName}
        open={showModal}
        close={handleCloseModal}
        testimonialsData={formattedTestimonials}
      />
    </>
  );
};

export default Testimonials;
