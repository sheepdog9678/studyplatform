import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Note } from "../../types/note";
// import { dummyNotes } from "../../data/notedata";
import { deleteNote } from "../../api/noteApi";
import { getNote } from "../../api/noteApi";

const NoteDetail: React.FC = () => {
  const { noteId } = useParams<{ noteId: string }>();
  const [note, setNote] = useState<Note | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    //API 연결 후 교체
    if (noteId) {
      getNote(Number(noteId))
        .then((res) => setNote(res.data))
        .catch((err) => console.error("노트 불러오기 실패:", err));
    }

    // if (noteId) {
    //   const found = dummyNotes.find((n) => n.noteId === Number(noteId));
    //   setNote(found || null);
    // }
  }, [noteId]);

  const handleDelete = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        // const index = dummyNotes.findIndex(
        //   (note) => note.noteId === Number(noteId)
        // );
        // if (index !== -1) {
        //   dummyNotes.splice(index, 1);
        // }
        // api 통신후
        await deleteNote(Number(noteId));
        navigate("/note");
      } catch (err) {
        alert("삭제 실패");
        console.error(err);
      }
    }
  };

  if (!note) {
    return (
      <Layout title="노트" showFooter={false} showBackButton={true}>
        <div className="p-4 text-[#495057]">노트를 찾을 수 없습니다.</div>
      </Layout>
    );
  }

  return (
    <Layout
      title="노트"
      showFooter={false}
      showBackButton={true}
      backTo="/note"
    >
      <div className="p-4 w-full max-w-[500px] mx-auto flex flex-col gap-6">
        {/* 제목 */}
        <h1 className="text-2xl font-bold text-[#212529] break-words">
          {note.title}
        </h1>

        {/* 버튼 */}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => navigate("edit")}
            className="px-4 py-2 bg-gray-200 text-sm text-[#212529] rounded hover:bg-gray-300 transition"
          >
            수정
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-sm text-white rounded hover:bg-red-600 transition"
          >
            삭제
          </button>
        </div>

        {/* 내용 */}
        <div className="bg-white border rounded-xl p-4 shadow text-[#495057] text-sm whitespace-pre-wrap leading-relaxed">
          {note.content}
        </div>
      </div>
    </Layout>
  );
};

export default NoteDetail;
