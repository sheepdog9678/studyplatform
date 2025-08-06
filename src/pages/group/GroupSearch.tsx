import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import GroupCard from "../../components/group/GroupCard";
import { dummyGroups } from "../../data/dummyGroups"; // 백 연결 전
import { Group } from "../../types/group";
import { useNavigate } from "react-router-dom";
import AddButton from "../../components/common/AddButton";
// import { getGroups } from "../../api/groupApi";

const GroupSearch: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setGroups(dummyGroups);
    // const fetchGroups = async () => {
    //   try {
    //     const res = await getGroups();
    //     setGroups(res.data.content);
    //   } catch (error) {
    //     console.error("그룹 목록 불러오기 실패:", error);
    //   }
    // };
    // fetchGroups();
  }, []);

  const handleSearch = () => {
    setSearchTerm(searchInput); // 버튼 클릭 시 검색어 갱신
  };

  const filteredGroups = groups.filter((group) =>
    group.groupName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout title="그룹 검색" showBackButton>
      <div className="p-3 flex flex-col gap-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="그룹명을 입력하세요"
            className="flex-1 border px-4 py-2 rounded text-sm bg-white"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-[#45B649] text-white rounded hover:bg-[#3aa343] transition"
          >
            검색
          </button>
        </div>
        {/* 그룹 리스트 */}
        <div className="flex flex-col gap-3">
          {filteredGroups.length > 0 ? (
            filteredGroups.map((group) => (
              <div
                key={group.groupId}
                onClick={() => navigate(`/group/${group.groupId}`)}
                className="cursor-pointer hover:bg-gray-50 transition rounded-xl"
              >
                <GroupCard
                  key={group.groupId}
                  groupName={group.groupName}
                  currentMembers={group.memberIds.length}
                  maxMembers={group.maxParticipants}
                />
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">검색 결과가 없습니다.</p>
          )}
        </div>
        <AddButton onClick={() => navigate("/group/create")} />
      </div>
    </Layout>
  );
};

export default GroupSearch;
