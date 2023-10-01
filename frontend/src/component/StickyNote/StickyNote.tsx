import { FunctionComponent, useEffect, useState } from "react";
import { useStickyNoteStore } from "../../hook/useStore";
import { ConfirmModal } from "../ConfirmModal/ConfirmModal";
import Check from "./Check/Check";

interface Props {
  textContent?: string;
  id: number;
}

const StickyNote: FunctionComponent<Props> = ({ textContent, id }) => {
  const { setStickyNoteText, stickyNotes, setDisplayModal, displayModal } =
    useStickyNoteStore();

  useEffect(() => {
    if (textContent === undefined) {
      setStickyNoteText(id, "");
    } else {
      setStickyNoteText(id, textContent);
    }
  }, [textContent, setStickyNoteText, id]);

  const confirmDelete = () => {
    setDisplayModal(true);
  };

  return (
    <div
      className="drop-shadow-md w-52 h-52 
    cursor-pointer
     hover:text-white text-xs text-zinc-950 rounded m-1 flex flex-col"
    >
      {displayModal ? <ConfirmModal noteId={id} /> : null}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        onClick={() => confirmDelete()}
        className="w-5 h-5 absolute top-1 right-1 hover:text-blue-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <textarea
        name="sticky-note"
        placeholder="Title"
        maxLength={20}
        className="w-full h-1/6 resize-none hover:text-black max-h-max overflow-hidden p-5 hover:bg-slate-400 text-left bg-white"
      ></textarea>
      <textarea
        name="sticky-note"
        placeholder="Please enter text"
        onChange={(e) => setStickyNoteText(id, e.target.value)}
        value={stickyNotes.find((stickyNote) => stickyNote.id === id)?.message}
        className="w-full h-5/6 p-5 hover:bg-slate-400 text-left bg-white"
      ></textarea>
      <Check />
    </div>
  );
};

export default StickyNote;
