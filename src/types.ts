export type NoteInput = {
  title: string;
  description?: string;
  dueTimestamp?: string;
  dueDate?: string;
  dueTime?: string;
  tags?: string[];
};

export type Note = NoteInput & {
  id: string;
  createdTimestamp: string;
  updatedTimestamp?: string;
  isCompleted: boolean;
};

export type Notes = Record<string, Note>;
