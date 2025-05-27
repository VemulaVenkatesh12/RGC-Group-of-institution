import React, { ReactNode } from "react";
import { Modal as BootstrapModal } from "react-bootstrap";
import "../HeaderModal/HeaderModal.css";
import { Link } from "react-router-dom";

export interface LinkItem {
  name: string;
  href: string;
  column: "left" | "right"; // Specifies whether the link goes to left or right column
}

interface ModalProps {
  show: boolean;
  title: string;
  onHide: () => void;
  children: ReactNode;
  modalImage: string;
  customStyle?: React.CSSProperties;
  links?: LinkItem[];
  isRgcLink?: boolean;
}

const HeaderModal: React.FC<ModalProps> = ({
  show,
  onHide,
  children,
  customStyle = {
    top: "10.3rem",
  },
  modalImage,
  title,
  links = [],
  isRgcLink,
}) => {
  const leftLinks = links.filter((link) => link.column === "left");
  const rightLinks = links.filter((link) => link.column === "right");

  return (
    <BootstrapModal
      show={show}
      onHide={onHide}
      dialogClassName="modal-xl"
      style={customStyle}
    >
      <BootstrapModal.Body className="modal-bg-img h-auto header-modal">
        <div className="row">
          <div className="col-lg-6 col-md-12 ">
            <div>
              <div className="mb-4 d-inline-block position-relative">
                <p className="position-relative p-font-size-18">{title}</p>
                <div className=" d-flex w-100">
                  <div className="underline red me-1"></div>
                  <div className="underline green me-1"></div>
                  <div className="underline purple me-1"></div>
                  <div className="underline yellow "></div>
                </div>
              </div>

              <div className="row">
                {isRgcLink ? (
                  <div className="col-lg-12 left-col ps-0 ">
                    {leftLinks.map((link, index) => (
                      <div className="header-items" key={index}>
                        <Link
                          to={link.href}
                          style={{ color: "#181818", fontSize: "14px" }}
                          className="text-decoration-none header-modal-links px-4"
                          onClick={onHide}
                        >
                          {link.name}
                        </Link>
                        <hr className="hr-underline" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="col-lg-6 left-col ps-0 ">
                      {leftLinks.map((link, index) => (
                        <div className="header-items" key={index}>
                          <Link
                            to={link.href}
                            style={{ color: "#181818", fontSize: "14px" }}
                            className="text-decoration-none header-modal-links px-4"
                            onClick={onHide}
                          >
                            {link.name}
                          </Link>
                          <hr className="hr-underline" />
                        </div>
                      ))}
                    </div>

                    <div className="col-6 right-col">
                      {rightLinks.map((link, index) => (
                        <div className="header-items" key={index}>
                          <Link
                            to={link.href}
                            style={{ color: "#181818", fontSize: "14px" }}
                            className="text-decoration-none px-4"
                            onClick={onHide}
                          >
                            {link.name}
                          </Link>
                          <hr className="hr-underline" />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
              {children}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 pe-0">
            <img
              src={modalImage}
              className="d-none img-fluid d-lg-block h-100 "
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="modal-image"
            />
          </div>
        </div>
      </BootstrapModal.Body>
    </BootstrapModal>
  );
};

export default HeaderModal;
