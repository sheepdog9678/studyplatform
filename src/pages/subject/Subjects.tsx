import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { dummySubjects } from "../../data/subjectdata";
import { Subject } from "../../types/subject";
import { formatDate } from "../../utils/date";
import AddButton from "../../components/common/AddButton";
import { useEffect, useState } from "react";
// import { getSubjects } from "../../api/subjectApi";

const Subjects: React.FC = () => {
  const navigate = useNavigate();

  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    // 통신후 교체
    // const fetchSubjects = async () => {
    //   try {
    //     const res = await getSubjects();
    //     setSubjects(res.data.content);
    //   } catch (err) {
    //     console.error("과목 불러오기 실패:", err);
    //   }
    // };
    // fetchSubjects();
    setSubjects(dummySubjects);
  }, []);

  return (
    <Layout title="과목 리스트" showBackButton backTo="/">
      {
        <div className="h-full overflow-auto relative">
          <ul className="flex flex-col gap-2">
            {subjects.map((subject: Subject) => (
              <li
                key={subject.subjectId}
                className="p-3 bg-white rounded-md shadow cursor-pointer hover:bg-gray-100"
                onClick={() => navigate(`/subject/${subject.subjectId}`)}
              >
                <h2 className="text-base font-semibold text-[#212529]">
                  {subject.subjectName}
                </h2>
                <p className="text-xs text-[#868e96]">
                  {formatDate(subject.createdAt)}
                </p>
              </li>
            ))}
          </ul>
          <AddButton
            onClick={() => {
              navigate("/subject/create");
            }}
          />
        </div>
      }
    </Layout>
  );
};

export default Subjects;
