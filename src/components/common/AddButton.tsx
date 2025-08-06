import AddIcon from "@mui/icons-material/Add";
import { ReactElement } from "react";

const AddButton: React.FC<{
  onClick: () => void;
  className?: string;
  icon?: ReactElement;
}> = ({
  onClick,
  className = "",
  icon = <AddIcon sx={{ fontSize: 28 }} />,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#45B649] text-black rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-105
      fixed bottom-24
  right-4 sm:right-[calc((100vw-500px)/2_-_-16px)]
      transition duration-200 ease-in-out hover:bg-[#3da645] ${className}`}
    >
      {icon}
    </button>
  );
};

export default AddButton;
