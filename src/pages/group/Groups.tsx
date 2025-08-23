import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import GroupCard from "../../components/group/GroupCard";
import AddButton from "../../components/common/AddButton";
import SearchIcon from "@mui/icons-material/Search";
// import { useAuthStore } from "../../store/authStore";
import { getGroups } from "../../api/groupApi";
import { useEffect, useState } from "react";
import { Group } from "../../types/group";

const Groups: React.FC = () => {
  const navigate = useNavigate();
  const [groups, setGroups] = useState<Group[]>();

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await getGroups();
        console.log("res", res);

        setGroups(res.data);
      } catch (error) {
        console.error("그룹 불러오기 실패:", error);
      }
    };

    fetchGroups();
  }, []);

  return (
    <Layout title="그룹 리스트" showBackButton backTo="/">
      <div className="h-full overflow-auto flex flex-col gap-3">
        {groups ? (
          groups.map((group) => (
            <div
              key={group.groupId}
              onClick={() => navigate(`/group/${group.groupId}`)}
              className="cursor-pointer hover:bg-gray-50 transition rounded-xl"
            >
              <GroupCard
                groupName={group.groupName}
                currentMembers={group.memberIds.length || 0}
                maxMembers={group.maxParticipants}
              />
            </div>
          ))
        ) : (
          <div className="flex flex-1 justify-center items-center h-full text-[#495057] text-xl">
            아직 그룹이 없어요. 그룹을 만들어보거나 참여해보세요!
          </div>
        )}
        <AddButton
          icon={<SearchIcon sx={{ fontSize: 28 }} />}
          onClick={() => navigate("/group/search")}
        />
      </div>
    </Layout>
  );
};

export default Groups;
