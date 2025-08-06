type GroupCardProps = {
  groupName: string;
  currentMembers: number;
  maxMembers: number;
};

const GroupCard: React.FC<GroupCardProps> = ({
  groupName,
  currentMembers,
  maxMembers,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 w-full flex flex-col items-start">
      <h2 className="text-xl font-bold text-[#212529] mb-1">{groupName}</h2>
      <p className="text-sm text-[#ADB5BD]">
        {currentMembers + 1}/{maxMembers}명
      </p>
    </div>
  );
};

export default GroupCard;
