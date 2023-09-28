import { useState } from "react";

import { StickyNoteType } from "../../types";
import StickyNote from "../StickyNote/StickyNote";
import NewStickyNote from "../StickyNote/NewStickyNote";
import { useStickyNoteStore } from "../../hook/useStore";

const Dashboard = () => {
  const stickyNotes = useStickyNoteStore((state) => state.stickyNotes);

  const renderStickyNotes = () => {
    return stickyNotes.map((stickyNote) => (
      <StickyNote key={stickyNote.id} textContent={stickyNote.message} />
    ));
  };
  return (
    <main className=" w-full p-5 h-full flex flex-row flex-wrap">
      {renderStickyNotes()}
      <NewStickyNote />
    </main>
  );
};

export default Dashboard;
