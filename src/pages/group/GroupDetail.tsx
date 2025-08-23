import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
// import { dummyGroups } from "../../data/dummyGroups";
import { Group } from "../../types/group";
import { deleteGroup, getGroup, joinGroup } from "../../api/groupApi";
import { useAuthStore } from "../../store/authStore";
import MemberCard from "../../components/group/MemberCard";
import { useEffect, useState } from "react";

const GroupDetail: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const navigate = useNavigate();
  const [group, setGroup] = useState<Group | null>(null);
  const [reloadTrigger, setReloadTrigger] = useState(0);
  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const res = await getGroup(Number(groupId));
        console.log("res", res);

        setGroup(res.data);
      } catch (error) {
        console.error("그룹 불러오기 실패:", error);
      }
    };

    fetchGroup();
  }, [groupId, reloadTrigger]);

  // const group: Group | undefined = dummyGroups.find(
  //   (g) => g.groupId === Number(groupId)
  // );

  const handleDelete = async () => {
    if (!groupId) return;

    const confirmed = window.confirm("정말 이 그룹을 삭제하시겠습니까?");
    if (!confirmed) return;

    try {
      await deleteGroup(Number(groupId));
      alert("그룹이 삭제되었습니다.");
      navigate("/group"); // 목록으로 이동
    } catch (error) {
      console.error("그룹 삭제 실패:", error);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };
  const { user } = useAuthStore();

  const isManager = user?.memberId === group?.managerId;
  console.log(user);
  const isMember =
    (group?.memberIds?.includes?.(user?.memberId ?? -1) ?? false) || isManager;
  // const joinGroupDummy = (
  //   groupId: number,
  //   userId: number
  // ): Group | undefined => {
  //   const group = dummyGroups.find((g) => g.groupId === groupId);
  //   if (!group) return undefined;

  //   // 이미 가입되어 있는지 확인
  //   if (!group.memberIds.includes(userId)) {
  //     group.memberIds.push(userId);
  //   }

  //   return group;
  // };
  const [isJoining, setIsJoining] = useState(false);

  const handleJoin = async () => {
    if (!user?.memberId || !groupId || isJoining) return;

    setIsJoining(true);
    try {
      const joinedGroup = await joinGroup({
        groupId: Number(groupId),
        memberId: user.memberId,
      });
      console.log("joinedGroup", joinedGroup);
      // const joinedGroup = joinGroupDummy(Number(groupId), user.id);
      if (joinedGroup) {
        alert("그룹에 참여했습니다!");
        setReloadTrigger((prev) => prev + 1);
      } else {
        alert("그룹을 찾을 수 없습니다.");
      }
    } catch (error) {
      console.error("참여 실패:", error);
      alert("참여 중 오류가 발생했습니다.");
    }
  };

  if (!group) {
    return (
      <Layout title="그룹 상세" showBackButton backTo="/group">
        <div className="text-[#495057] p-4">그룹 정보를 찾을 수 없습니다.</div>
      </Layout>
    );
  }

  return (
    <Layout title="그룹 상세" showBackButton backTo="/group">
      <div className="p-4 space-y-4">
        <h1 className="text-xl font-semibold text-[#212529]">
          {group.groupName}
        </h1>
        <div className="flex gap-2 mt-4 justify-end">
          {isManager && (
            <>
              <button
                className="px-4 py-2 bg-[#45B649] text-white rounded hover:bg-[#3aa343] text-sm"
                onClick={() => navigate(`/group/${group.groupId}/edit`)}
              >
                수정
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                onClick={handleDelete}
              >
                삭제
              </button>
            </>
          )}

          {!isManager && isMember && (
            <button
              className="px-4 py-2 bg-gray-300 text-[#212529] rounded hover:bg-gray-400 text-sm"
              onClick={() => alert("그룹 나가기 구현 필요")}
            >
              나가기
            </button>
          )}

          {!isMember && (
            <button
              className="px-4 py-2 bg-[#45B649] text-white rounded hover:bg-[#3aa343] text-sm"
              onClick={handleJoin}
            >
              참여하기
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {Array.isArray(group?.memberNicknames) &&
            group.memberNicknames.map((name, index) => (
              <MemberCard key={index} nickname={name} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default GroupDetail;
