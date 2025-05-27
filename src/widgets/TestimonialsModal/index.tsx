import React from "react";
import { Modal as BootstrapModal } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import "./testimonialsModal.css";
import Slider from "../Slider";
import TestimonialsModalSlide from "./TestimonailsModalSlide";
import { TestimonialsProps } from "../Testimonials";

export interface TestimonialsModalProps {
  selectedName: string;
  testimonialsData: TestimonialsProps[];
  open: boolean;
  close: () => void;
}
const TestimonialsModal: React.FC<TestimonialsModalProps> = ({
  selectedName,
  testimonialsData,
  open,
  close,
}) => {
  let rearrangedTestimonialsData = [...testimonialsData];
  const selectedIndex = rearrangedTestimonialsData.findIndex(
    (testimonial) => testimonial.name.trim() === selectedName.trim()
  );

  if (selectedIndex >= 0) {
    rearrangedTestimonialsData = [
      ...testimonialsData.slice(selectedIndex),
      ...testimonialsData.slice(0, selectedIndex),
    ];
  }

  return (
    <BootstrapModal
      show={open}
      onHide={close}
      centered
      dialogClassName="modal-lg"
    >
      <BootstrapModal.Header className="border-bottom-2 py-2">
        <IoMdClose
          fontSize="var(--font-size-18)"
          color="var(--color-pure-black)"
          className="ms-auto close-icon"
          onClick={close}
        />
      </BootstrapModal.Header>

      <BootstrapModal.Body className="border-bottom border-secondary px-0">
        <Slider
          withControls={true}
          infinite={true}
          arrows={false}
          slidesToShow={1}
          speed={500}
          slidesToScroll={1}
          slidesList={rearrangedTestimonialsData.map((item) => (
            <TestimonialsModalSlide
              image={item.image}
              description={item.description}
              designation={item.designation}
              name={item.name}
            />
          ))}
        />
      </BootstrapModal.Body>
    </BootstrapModal>
  );
};

export default TestimonialsModal;
