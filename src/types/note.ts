export type BaseNote = {
  noteId: number;
  title: string;
  content: string;
  createAt: string;
  modifiedAt: string;
};

export type Note = BaseNote & {
  userId?: number;
};

export type NoteListResponse = {
  data: Note[];
};

export type NoteResponse = {
  data: Note;
};
