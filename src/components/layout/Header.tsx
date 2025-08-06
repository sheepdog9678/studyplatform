import BackButton from "./BackButton";

const Header: React.FC<{
  title: string;
  showBackButton?: boolean;
  to?: string;
  backTo?: string;
}> = ({ title, showBackButton = false, backTo }) => {
  return (
    <div className="flex w-full h-[50px] justify-between items-center bg-white relative">
      {showBackButton ? <BackButton to={backTo} /> : <div className="w-5" />}
      <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold text-[#212529]">
        {title}
      </h1>
      <div className="w-5" />
    </div>
  );
};

export default Header;
