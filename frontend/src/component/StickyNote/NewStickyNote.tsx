import { FunctionComponent } from "react";
import { useStickyNoteStore } from "../../hook/useStore";

const NewStickyNote: FunctionComponent = () => {
  const { addStickyNote, stickyNotes } = useStickyNoteStore();

  const addNewStickyNote = () => {
    if (stickyNotes.find((stickyNote) => stickyNote.message === "")) return;

    addStickyNote({
      message: "",
      id: Math.floor(Math.random() * 1000),
      created: new Date(),
    });
  };

  return (
    <div
      className="drop-shadow-md w-52 h-52 
    cursor-pointer
     hover:text-white text-xs text-zinc-950 rounded 
     m-1 p-5 hover:bg-blue-400 flex justify-center items-center
     bg-blue-100"
      onClick={() => addNewStickyNote()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
  );
};

export default NewStickyNote;
