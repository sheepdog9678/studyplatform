import { useForm, Controller } from "react-hook-form";
import { SignupFormInputs } from "../../types/auth";

const statusOptions = [
  { label: "학생", value: "STUDENT" },
  { label: "직장인", value: "WORKER" },
  { label: "주부", value: "HOUSEWIFE" },
  { label: "기타", value: "ETC" },
];

type Props = {
  defaultValues?: Partial<SignupFormInputs>;
  onSubmit: (data: SignupFormInputs) => void;
  submitText?: string;
  titleText?: string;
};

const UserForm: React.FC<Props> = ({
  defaultValues,
  onSubmit,
  submitText,
  titleText,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupFormInputs>({ defaultValues });

  return (
    <div className="flex justify-center min-h-[1080px] bg-white">
      <div className="flex flex-col items-center rounded-[30px] mt-10 bg-[#CBEBCC] border-2 border-[#9CDA9E] w-[408px] h-[610px]">
        <h1 className="m-10 text-white font-bold text-2xl">Logo</h1>
        <div className="flex-col gap-6">
          <div className="flex">
            <h2 className="text-white font-bold text-2xl mb-6">{titleText}</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex-col">
                <div className="flex mb-1 text-white text-sm">
                  <label>이름</label>
                </div>
                <div>
                  <input
                    className="bg-white w-[250px] h-[32px] rounded-md border-2 border-[#BCBEC0] pl-4"
                    type="name"
                    placeholder="이름"
                    {...register("name", {
                      required: "이름은 필수입니다.",
                    })}
                  />
                  {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="flex mt-2 mb-1 text-white text-sm">
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
                  {/* {errors.email && <p>{errors.email.message}</p>} */}
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
                <div className="flex mt-2 mb-1 text-white text-sm">
                  <label>닉네임</label>
                </div>
                <div>
                  <input
                    className="bg-white w-[250px] h-[32px] rounded-md border-2 border-[#BCBEC0] pl-4"
                    type="nickname"
                    placeholder="닉네임"
                    {...register("nickname", {
                      required: "닉네임은 필수입니다.",
                    })}
                  />
                  {/* {errors.nickname && <p>{errors.nickname.message}</p>} */}
                </div>

                <div className="flex mt-2 mb-1 text-white text-sm">
                  <label>신분</label>
                </div>
                <div>
                  <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                      <select
                        className="bg-white w-[250px] h-[32px] rounded-md border-2 border-[#BCBEC0] pl-4"
                        {...field}
                      >
                        {statusOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center w-[250px] h-[40px] mt-6 bg-[#45B649] text-white rounded-md">
                <button className="font-bold text-base" type="submit">
                  {submitText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
