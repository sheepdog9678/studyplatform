type MemberCardProps = {
  nickname: string;
};

const MemberCard: React.FC<MemberCardProps> = ({ nickname }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm px-4 py-2 text-sm text-[#212529]">
      {nickname}
    </div>
  );
};

export default MemberCard;
