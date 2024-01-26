import React, { useEffect, useState } from "react";
import { NoteInput } from "../types";
import { MODES } from "../consts";

type Props = {
  mode: MODES;
  initialFormData: NoteInput;
  onSubmit: (event: React.FormEvent, formData: NoteInput) => void;
};

const MS_IN_S = 1000;
const S_IN_MIN = 60;
const MIN_IN_H = 60;

const getMsInMin = (min: number) => MS_IN_S * S_IN_MIN * min;
const getMsInH = (h: number) => MS_IN_S * S_IN_MIN * MIN_IN_H * h;

const NoteForm: React.FC<Props> = ({ mode, initialFormData, onSubmit }) => {
  const [formData, setFormData] = useState<NoteInput>({
    title: initialFormData.title,
    description: initialFormData.description,
    dueDate: initialFormData.dueDate,
    dueTimestamp: initialFormData.dueTimestamp,
    dueTime: initialFormData.dueTime,
    tags: initialFormData.tags,
  });
  const isButtonEnabled = Boolean(formData.title);

  useEffect(() => {
    if (formData.dueDate && formData.dueTime) {
      const dateTimestamp = Date.parse(formData.dueDate);
      const hours = Number(formData.dueTime.split(":")[0]);
      const minutes = Number(formData.dueTime.split(":")[1]);
      const fullTimestamp =
        dateTimestamp + getMsInH(hours) + getMsInMin(minutes);

      setFormData({
        ...formData,
        dueTimestamp: new Date(fullTimestamp).toString(),
      });
    }
  }, [formData.dueTime]);
  return (
    <form className="form">
      <label>
        Title
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={(event) => {
            setFormData({
              ...formData,
              title: event.target.value,
            });
          }}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={(event) => {
            setFormData({
              ...formData,
              description: event.target.value,
            });
          }}
        />
      </label>
      <label>
        Due date (optional)
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={(event) => {
            setFormData({
              ...formData,
              dueDate: event.target.value,
            });
          }}
        />
      </label>
      <label>
        Due time (optional)
        <input
          type="time"
          name="dueTime"
          value={formData.dueTime}
          onChange={(event) => {
            setFormData({
              ...formData,
              dueTime: event.target.value,
            });
          }}
        />
      </label>
      <button
        disabled={!isButtonEnabled}
        onClick={(e) => onSubmit(e, formData)}
      >
        {`${mode} note`}
      </button>
    </form>
  );
};
export default NoteForm;
