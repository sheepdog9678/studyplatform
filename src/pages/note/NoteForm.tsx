import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
// import { dummyNotes } from "../../data/notedata";
import { createNote, getNote, updateNote } from "../../api/noteApi";
import { Note } from "../../types/note";

type FormValues = {
  title: string;
  content: string;
};

const NoteForm: React.FC = () => {
  const { noteId } = useParams<{ noteId: string }>();
  const isEdit = Boolean(noteId);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    const fetchNote = async () => {
      if (isEdit && noteId) {
        try {
          // api 통신후 수정
          const res = await getNote(Number(noteId));
          const note: Note = res.data;
          // const note = dummyNotes.find((n) => n.noteId === Number(noteId));
          if (note) {
            setValue("title", note.title);
            setValue("content", note.content);
          }
        } catch (err) {
          console.error("노트 불러오기 실패:", err);
        }
      }
    };
    fetchNote();
  }, [isEdit, noteId, setValue]);

  const onSubmit = async (data: FormValues) => {
    // const now = new Date().toISOString();

    if (isEdit && noteId) {
      // const index = dummyNotes.findIndex((n) => n.noteId === Number(noteId));
      // if (index !== -1) {
      //   dummyNotes[index] = {
      //     ...dummyNotes[index],
      //     title: data.title,
      //     content: data.content,
      //     modifiedAt: now,
      //   };
      // }
      // 실제 API
      console.log(data);
      await updateNote(Number(noteId), data);

      navigate(`/note/${noteId}`);
    } else {
      // const newId = dummyNotes.length
      //   ? Math.max(...dummyNotes.map((n) => n.noteId)) + 1
      //   : 1;

      // dummyNotes.push({
      //   noteId: newId,
      //   title: data.title,
      //   content: data.content,
      //   userId: 1,
      //   createdAt: now,
      //   modifiedAt: now,
      // });
      //   api 통신후 수정
      try {
        await createNote(data);
        navigate("/note");
      } catch (err) {
        alert("노트 생성 실패");
      }

      navigate("/note");
    }
  };

  return (
    <Layout title={isEdit ? "노트 수정" : "노트 작성"} showBackButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 flex flex-col gap-4 w-full max-w-[500px] mx-auto"
      >
        <input
          {...register("title", { required: "제목을 입력하세요." })}
          placeholder="제목을 입력하세요"
          className="border p-3 rounded text-sm bg-white"
        />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}

        <textarea
          {...register("content", { required: "내용을 입력하세요." })}
          placeholder="내용을 입력하세요"
          className="border p-3 rounded h-64 resize-none text-sm bg-white"
        />
        {errors.content && (
          <span className="text-red-500 text-sm">{errors.content.message}</span>
        )}

        <button
          type="submit"
          className="bg-[#45B649] text-white py-2 rounded font-semibold"
        >
          {isEdit ? "수정 완료" : "저장"}
        </button>
      </form>
    </Layout>
  );
};

export default NoteForm;
