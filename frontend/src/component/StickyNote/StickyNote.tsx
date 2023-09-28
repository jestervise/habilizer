import { FunctionComponent, useEffect, useState } from "react";

interface Props {
  textContent?: string;
}

const StickyNote: FunctionComponent<Props> = ({ textContent }) => {
  const [stickyNoteText, setStickyNoteText] = useState("");

  useEffect(() => {
    if (textContent === undefined) {
      setStickyNoteText("");
    } else {
      setStickyNoteText(textContent);
    }
  }, [textContent]);

  return (
    <div
      className="drop-shadow-md w-52 h-52 
    cursor-pointer
     hover:text-white text-xs text-zinc-950 rounded m-1"
    >
      <textarea
        name="sticky-note"
        placeholder="Please enter text"
        onChange={(e) => setStickyNoteText(e.target.value)}
        value={stickyNoteText}
        className="w-full h-full p-5 hover:bg-slate-400 rounded text-center bg-white"
      ></textarea>
    </div>
  );
};

export default StickyNote;
