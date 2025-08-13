import { useNavigate } from "react-router-dom";
import { Note } from "../../types/note";
import { formatDate } from "../../utils/date";

const NoteCard: React.FC<{ note: Note }> = ({ note }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/note/${note.noteId}`)}
      className="w-full h-[33.3333vh]"
    >
      <article className="bg-white rounded-xl p-4 h-full flex flex-col justify-between w-full">
        <div>
          <h1 className="text-lg font-semibold text-[#212529]">{note.title}</h1>
          <p className="text-sm text-[#495057] line-clamp-4">{note.content}</p>
        </div>
        <time className="text-xs text-right text-[#C1C6CC] mt-2">
          {formatDate(note.createAt)}
        </time>
      </article>
    </div>
  );
};

export default NoteCard;
