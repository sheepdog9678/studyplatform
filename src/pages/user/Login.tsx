import React from "react";
import { useForm } from "react-hook-form";
import { getUserProfile, login } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    try {
      await login(username, password);

      const user = await getUserProfile();
      useAuthStore.getState().setUser(user);
      return user;
    } catch (err) {
      alert("로그인 실패");
      console.error(err);
    }
  };

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await handleLogin(data.email, data.password);
      console.log("로그인 성공:", response);
      navigate("/"); // api 연결후 변경
    } catch (error) {
      console.error("로그인 실패:", error);
      console.error("data", data);
      navigate("/"); // api 연결후 변경
    }
  };

  return (
    <div className="flex justify-center min-h-[1080px] bg-white">
      <div className="flex flex-col items-center rounded-[30px] mt-20 bg-[#CBEBCC] border-2 border-[#9CDA9E] w-[408px] h-[440px]">
        <h1 className="m-10 text-white font-bold text-2xl">Logo</h1>
        <div className="flex-col gap-6">
          <div className="flex">
            <h2 className="text-white font-bold text-2xl mb-6">로그인</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex-col">
                <div className="flex mb-1 text-white text-sm">
                  <label>이메일</label>
                </div>
                <div>
                  <input
                    className="bg-white w-[250px] h-[32px] rounded-md border-2 border-[#BCBEC0] pl-4"
                    type="email"
                    placeholder="이메일"
                    {...register("email", {
                      required: "이메일은 필수입니다.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "올바른 이메일 형식을 입력해주세요.",
                      },
                    })}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="flex mt-2 mb-1 text-white text-sm">
                  <label>비밀번호</label>
                </div>
                <div>
                  <input
                    className="bg-white w-[250px] h-[32px] rounded-md border-2 border-[#BCBEC0] pl-4"
                    type="password"
                    placeholder="비밀번호"
                    {...register("password", {
                      required: "비밀번호는 필수입니다.",
                    })}
                  />
                  {/* {errors.password && <p>{errors.password.message}</p>} */}
                </div>
              </div>
              <div className="flex items-center justify-center w-[250px] h-[40px] mt-6 bg-[#45B649] text-white rounded-md">
                <button className="font-bold text-base" type="submit">
                  로그인
                </button>
              </div>
            </form>
          </div>
          {/* <p className="flex mt-2 text-white text-sm">비밀번호를 잊으셨나요?</p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
