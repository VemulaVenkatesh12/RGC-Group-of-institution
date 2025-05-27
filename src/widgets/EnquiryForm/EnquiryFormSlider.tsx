// Component for individual enquiry slide
const EnquirySlide: React.FC<{
  image: string;
  title: string;
  subtitle: string;
}> = ({ image, title, subtitle }) => {
  return (
    <div className="position-relative h-100">
      <img
        src={image}
        className="d-block w-100 h-100"
        alt="enquiry-carousel-image"
        style={{ objectFit: 'cover' }}
      />
      <div className="card py-2 rounded-1 enq-form-carousel-card bg-white position-absolute">
        <div className="d-flex gap-4 align-items-start">
          <div className="p-2 rounded-2">
            <p className="fw-bold p-font-size-16">{title}</p>
            <p className="p-font-size-12">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquirySlide