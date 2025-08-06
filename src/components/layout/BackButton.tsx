import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

const BackButton: React.FC<{ to?: string }> = ({ to }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) navigate(to);
    else navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center 
      m-4 text-[#212529]"
    >
      <ArrowBackIosIcon sx={{ fontSize: 28 }} />
    </button>
  );
};

export default BackButton;
