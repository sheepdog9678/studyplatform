import { useEffect } from "react";
import { useAuthStore } from "../../store/authStore";

const ProfileCard: React.FC = () => {
  const { user } = useAuthStore();

  useEffect(() => {
    // 개발 중 테스트용
    useAuthStore.getState().setToken("dummy-token");
    useAuthStore.getState().setUser({
      id: 1,
      nickname: "배포 테스트",
      status: "STUDENT",
      groupList: [
        {
          groupId: 1,
          managerId: 1,
          memberIds: [2, 3, 4, 5],
          memberNicknames: ["siyeon1", "siyeon2", "siyeon3", "siyeon4"],
          groupName: "알고리즘 마스터",
          maxParticipants: 10,
          createdAt: "2024-11-22 00:00:00",
          modifiedAt: "2024-11-22 00:00:00",
        },
        {
          groupId: 2,
          managerId: 2,
          memberIds: [6, 7],
          memberNicknames: ["jinho", "eunji"],
          groupName: "토익 스터디",
          maxParticipants: 8,
          createdAt: "2024-11-23 00:00:00",
          modifiedAt: "2024-11-23 00:00:00",
        },
      ],
    });
  }, []);

  if (!user) {
    return (
      <div className="flex w-full h-[135px] rounded-md items-center bg-white p-[30px]">
        로그인 해주세요.
      </div>
    );
  }

  return (
    <div className="flex w-full h-[135px] rounded-md items-center bg-white p-[30px]">
      <div className=" w-[75px] h-[75px] rounded-full bg-[#D9D9D9] "></div>
      <div className="flex flex-col pl-2 items-start">
        <p className="text-sm text-[#9199A1]">{user.status}</p>
        <p className="text-xl text-[#212529] font-semibold">
          {user.nickname}
          <span className="text-lg text-[#495057]">님</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
