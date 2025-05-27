import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
interface ICustomButtonProps {
  label?: string;
  btnClassName: string;
  path?: string;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  label,
  btnClassName,
  path = "",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };
  return (
    <>
      <Button onClick={handleClick} className={`border-0 ${btnClassName}`}>
        {label}
      </Button>
    </>
  );
};

export default CustomButton;
