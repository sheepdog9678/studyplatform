import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import NoteCard from "../../components/note/NoteCard";
import { Note } from "../../types/note";
import { getNotes } from "../../api/noteApi";
import { dummyNotes } from "../../data/notedata";
import AddButton from "../../components/common/AddButton";
import { useNavigate } from "react-router-dom";

const NotePage: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    // 백엔드 통신 대신 더미 데이터 사용
    // const sorted = [...dummyNotes].sort(
    //   (a, b) =>
    //     new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
    // );
    // setNotes(sorted);
    const fetchNotes = async () => {
      try {
        const res = await getNotes();
        console.log("res", res);
        const sorted = res.data.sort(
          (a, b) =>
            new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
        );
        setNotes(sorted);
      } catch (error) {
        console.error("노트 불러오기 실패:", error);
      }
    };

    fetchNotes();
  }, []);
  const navigate = useNavigate();
  return (
    <Layout title="노트">
      <div className="h-full overflow-auto relative">
        <div className="grid grid-cols-2 w-full gap-3">
          {notes.map((note) => (
            <NoteCard key={note.noteId} note={note} />
          ))}
        </div>
        <AddButton
          onClick={() => {
            navigate("/note/create");
          }}
        />
      </div>
    </Layout>
  );
};

export default NotePage;
