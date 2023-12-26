export type Note = {
  id: string;
  title: string;
  description?: string;
  createdTimestamp: string;
  updatedTimestamp?: string;
  dueTimestamp?: string;
  tags?: string[];
  isCompleted: boolean;
};

export type Notes = Record<string, Note>;
