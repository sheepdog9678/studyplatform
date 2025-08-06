import { useEffect } from "react";
import { updateUserProfile } from "../../api/authApi";
import UserForm from "../../components/user/UserForm";
import { useAuthStore } from "../../store/authStore";
import { SignupFormInputs } from "../../types/auth";
import { useNavigate } from "react-router-dom";

const UserEdit = () => {
  const { user, setUser } = useAuthStore();

  useEffect(() => {
    // 개발 중 테스트용
    useAuthStore.getState().setToken("dummy-token");
    useAuthStore
      .getState()
      .setUser({
        id: 1,
        groupList: [],
        nickname: "testuser",
        status: "STUDENT",
      });
  }, []);
  const navigate = useNavigate();

  const handleUpdate = async (data: SignupFormInputs) => {
    const updated = await updateUserProfile(data);
    setUser(updated);
    alert("수정 완료");
    navigate("/"); // api 연결후 변경
  };

  return (
    <UserForm
      onSubmit={handleUpdate}
      submitText="수정하기"
      titleText="회원정보 수정"
      defaultValues={{ name: user?.nickname, status: user?.status }}
    />
  );
};

export default UserEdit;
