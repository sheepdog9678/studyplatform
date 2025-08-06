import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { dummyGroups } from "../../data/dummyGroups";
import { useEffect } from "react";
// import { createGroup, updateGroup, getGroup } from "../../api/groupApi";

type GroupFormInputs = {
  groupName: string;
  maxParticipants: number;
};

const GroupForm: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const isEdit = Boolean(groupId);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<GroupFormInputs>();

  // 수정일 경우 기존 값 세팅
  useEffect(() => {
    if (isEdit) {
      const group = dummyGroups.find((g) => g.groupId === Number(groupId));
      if (group) {
        setValue("groupName", group.groupName);
        setValue("maxParticipants", group.maxParticipants);
      }

      // getGroup(Number(groupId)).then((res) => {
      //   setValue("groupName", res.data.groupName);
      //   setValue("maxParticipants", group.maxParticipants);
      // });
    }
  }, [groupId, isEdit, setValue]);

  const onSubmit = async (data: GroupFormInputs) => {
    if (isEdit) {
      const targetIndex = dummyGroups.findIndex(
        (g) => g.groupId === Number(groupId)
      );
      if (targetIndex !== -1) {
        dummyGroups[targetIndex].groupName = data.groupName;
        dummyGroups[targetIndex].modifiedAt = new Date().toISOString();
      }
      navigate(`/group/${groupId}`);
      // await updateGroup(Number(groupId), data);
    } else {
      const newId = dummyGroups.length
        ? Math.max(...dummyGroups.map((g) => g.groupId)) + 1
        : 1;

      const newGroup = {
        groupId: newId,
        managerId: 1, // 임시 관리자 ID
        memberIds: [1],
        memberNicknames: ["온라인 독서실"],
        groupName: data.groupName,
        maxParticipants: data.maxParticipants,
        createdAt: new Date().toISOString(),
        modifiedAt: new Date().toISOString(),
      };

      dummyGroups.push(newGroup);
      navigate("/group");

      // await createGroup(data);
    }
  };

  return (
    <Layout title={isEdit ? "그룹 수정" : "그룹 생성"} showBackButton>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
        <div>
          <label className="flex text-sm text-[#212529] mb-1">그룹 이름</label>
          <input
            {...register("groupName", { required: "그룹 이름은 필수입니다." })}
            placeholder="그룹 이름을 입력하세요"
            className="w-full border rounded p-2 text-sm bg-white"
          />
          {errors.groupName && (
            <p className="text-sm text-red-500 mt-1">
              {errors.groupName.message}
            </p>
          )}
        </div>
        <div>
          <label className="flex text-sm text-[#212529] mb-1">최대 인원</label>
          <input
            type="number"
            min={1}
            step={1}
            {...register("maxParticipants", {
              required: "최대 인원을 입력하세요.",
              min: { value: 1, message: "최소 1명 이상이어야 합니다." },
            })}
            placeholder="최대 인원을 입력하세요"
            className="w-full border rounded p-2 text-sm bg-white"
          />
          {errors.maxParticipants && (
            <p className="text-sm text-red-500 mt-1">
              {errors.maxParticipants.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#45B649] hover:bg-[#3aa343] text-white px-4 py-2 rounded transition"
        >
          {isEdit ? "수정하기" : "생성하기"}
        </button>
      </form>
    </Layout>
  );
};

export default GroupForm;
