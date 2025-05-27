import React, { useEffect, useState } from "react";
import "../../widgets/iFrameBanner/iFrameBanner.css";
import footerborder from "../../assets/footerborder.webp";
import CustomButton from "../CustomButton";
import { getVisitIframe, VisitOurCollege } from "../../services/visitIframe";
interface IFrameBannerProps {
  requiredFooterBorder: boolean;
}
const IFrameBanner: React.FC<IFrameBannerProps> = ({
  requiredFooterBorder,
}) => {
  const [visitData, setVisitData] = useState<VisitOurCollege | null>(null);
  const fetchOccupancyData = () => {
    getVisitIframe()
      .then((response) => {
        const count = response.data.visit_our_college;
        setVisitData(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchOccupancyData();
  }, []);
  return (
    <>
      {requiredFooterBorder && (
        <img src={footerborder} className="img-fluid" alt="footer-border" />
      )}
      <div className="map-container">
        <iframe
          className="rgc-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236665.10689888883!2d77.5934622!3d13.034278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17a2945e639f%3A0x2098c9ec97a67d82!2sRGC%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1679635593255!5m2!1sen!2sin"
        ></iframe>
        <div className="card px-4  py-4 rounded-0 iframe-card bg-white position-absolute">
          <div>
            <h3 className="fw-bold">{visitData?.title}</h3>
            <p className="p-font-size-14 iframe-sec-text">
              {visitData?.Description.split(" ").map((word, index) => (
                <>
                  {word} {(index + 1) % 7 === 0 && <br />}
                </>
              ))}
            </p>
            <CustomButton
              path={visitData?.Know_More_link}
              btnClassName="btn btn-md px-4 py-2 red-btn text-white mt-3"
              label={visitData?.Know_More_text}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IFrameBanner;
