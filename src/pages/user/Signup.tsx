import React from "react";
import { SignupFormInputs } from "../../types/auth";
import { signup } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import UserForm from "../../components/user/UserForm";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const handleSignup = async (data: SignupFormInputs) => {
    try {
      const response = await signup(data);
      console.log("로그인 성공:", response.data);
      navigate("/"); // api 연결후 변경
    } catch (error) {
      console.log("data", data);
      console.error("로그인 실패:", error);
      navigate("/"); // api 연결후 변경
    }
  };

  return (
    <UserForm
      onSubmit={handleSignup}
      submitText="회원가입"
      titleText="회원가입"
      defaultValues={{ status: "STUDENT" }}
    />
  );
};

export default Signup;
