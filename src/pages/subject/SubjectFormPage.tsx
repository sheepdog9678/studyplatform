import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { dummySubjects } from "../../data/subjectdata";
import Layout from "../../components/layout/Layout";
import TextInput from "../../components/common/TextInput";
import { useEffect } from "react";
// import { createSubject, getSubject, updateSubject } from "../../api/subjectApi";
// import { Subject } from "../../types/subject";

type SubjectFormInputs = {
  subjectName: string;
};

const SubjectFormPage: React.FC = () => {
  const navigate = useNavigate();
  const { subjectId } = useParams<{ subjectId: string }>();
  const isEdit = Boolean(subjectId);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SubjectFormInputs>();

  useEffect(() => {
    const fetchSubject = async () => {
      if (isEdit && subjectId) {
        try {
          // api 통신후 수정
          // const res = await getSubject(Number(subjectId));
          // const subject: Subject = res.data;
          const subject = dummySubjects.find(
            (n) => n.subjectId === Number(subjectId)
          );
          if (subject) {
            setValue("subjectName", subject.subjectName);
          }
        } catch (err) {
          console.error("노트 불러오기 실패:", err);
        }
      }
    };
    fetchSubject();
  }, [isEdit, subjectId, setValue]);

  const onSubmit = async (data: SubjectFormInputs) => {
    const { subjectName } = data;
    if (isEdit && subjectId) {
      const index = dummySubjects.findIndex(
        (n) => n.subjectId === Number(subjectId)
      );
      if (index !== -1) {
        dummySubjects[index] = {
          ...dummySubjects[index],
          subjectName: data.subjectName,
        };
      }
      // 실제 API
      // await updateSubject(Number(subjectId), data);

      navigate(`/subject/${subjectId}`);
    } else {
      // 더미 데이터에 추가 (백엔드 연동 전용)
      const newSubject = {
        subjectId: dummySubjects.length + 1,
        userId: 1,
        subjectName,
        createdAt: new Date().toISOString(),
        modifiedAt: new Date().toISOString(),
      };

      dummySubjects.push(newSubject);
      navigate(`/subject/${newSubject.subjectId}`);

      // 백엔드 연동 시
      // try {
      //   await createSubject(data);
      //   navigate("/subjects");
      // } catch (err) {
      //   alert("과목 생성 실패");
      // }
    }
  };

  return (
    <Layout
      title={isEdit ? "과목 수정" : "과목 추가"}
      showFooter={false}
      showBackButton
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 flex flex-col gap-4"
      >
        <TextInput
          placeholder="과목명을 입력하세요"
          register={register("subjectName", {
            required: "과목명은 필수입니다.",
          })}
        />
        {errors.subjectName && (
          <span className="text-sm text-red-500">
            {errors.subjectName.message}
          </span>
        )}

        <button
          type="submit"
          className="bg-[#45B649] text-white py-2 rounded font-semibold"
        >
          과목 저장
        </button>
      </form>
    </Layout>
  );
};

export default SubjectFormPage;
