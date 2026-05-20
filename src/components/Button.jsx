import { useNavigate } from "react-router-dom";

function Buttons({ children, className, to, onClick, type = "button" }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (to) navigate(to);
    if (onClick) onClick(e);
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`px-4 py-1 font-medium rounded-md text-sm cursor-pointer  ${className}`}
    >
      {children}
    </button>
  );
}

export default Buttons;
