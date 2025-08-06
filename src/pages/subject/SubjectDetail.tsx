import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Subject } from "../../types/subject";
import { dummySubjects } from "../../data/subjectdata";
// import { formatDate } from "../../utils/date";
import Layout from "../../components/layout/Layout";
import Timer from "../../components/subject/Timer";
//import { getSubject } from "../../api/subjectApi";

const SubjectDetail: React.FC = () => {
  const navigate = useNavigate();

  const { subjectId } = useParams<{ subjectId: string }>();
  const [subject, setSubject] = useState<Subject | null>(null);

  useEffect(() => {
    // api 통신후
    // if (subjectId) {
    //   getSubject(Number(subjectId)).then((res) => setSubject(res.data));
    // }

    // 더미 데이터 사용
    if (subjectId) {
      const found = dummySubjects.find(
        (subj) => subj.subjectId === Number(subjectId)
      );
      setSubject(found || null);
    }
  }, [subjectId]);

  if (!subject) {
    return (
      <Layout
        title="과목 상세"
        showFooter={false}
        showBackButton
        backTo="/subject"
      >
        <div className="text-[#495057] p-4">과목을 찾을 수 없습니다.</div>
      </Layout>
    );
  }

  return (
    <Layout
      title="과목 상세"
      showFooter={false}
      showBackButton
      backTo="/subject"
    >
      <div>
        <h1 className="text-4xl font-bold text-[#212529] pt-4">
          {subject.subjectName}
        </h1>
        <div className="flex justify-end p-4">
          <button
            onClick={() => {
              navigate(`/subject/${subjectId}/edit`);
            }}
            className="px-4 py-2 bg-gray-200 text-sm text-[#212529] rounded hover:bg-gray-300 mt-4 text-sm"
          >
            수정하기
          </button>
        </div>
        <div>
          <Timer />
        </div>
      </div>
    </Layout>
  );
};

export default SubjectDetail;
