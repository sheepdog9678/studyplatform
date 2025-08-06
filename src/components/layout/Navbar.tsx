import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import SubjectIcon from "@mui/icons-material/Subject";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VideoChatIcon from "@mui/icons-material/VideoChat";

const Navbar: React.FC<{}> = ({}) => {
  // path 정해지면 고치기
  const navItems = [
    { label: "홈", to: "/", icon: <HomeIcon sx={{ fontSize: 24 }} /> },
    {
      label: "독서실",
      to: "/reading",
      icon: <VideoChatIcon sx={{ fontSize: 24 }} />,
    },
    {
      label: "과목",
      to: "/subject",
      icon: <SubjectIcon sx={{ fontSize: 24 }} />,
    },
    { label: "노트", to: "/note", icon: <NoteAddIcon sx={{ fontSize: 24 }} /> },
    { label: "그룹", to: "/group", icon: <GroupsIcon sx={{ fontSize: 24 }} /> },
    {
      label: "더보기",
      to: "/more",
      icon: <MoreHorizIcon sx={{ fontSize: 24 }} />,
    },
  ];
  return (
    <nav className="flex w-full h-[70px] justify-around items-center bg-white">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center text-lg ${
              isActive ? "text-[#212529]" : "text-[#C1C6CC]"
            }`
          }
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
