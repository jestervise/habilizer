import { create } from "zustand";
import { StickyNoteType } from "../types";

export const useStickyNoteStore = create((set) => ({
  stickyNotes: [],
  addStickyNote: (newStickyNote: StickyNoteType) =>
    set((state: { stickyNotes: StickyNoteType[] }) => ({
      stickyNote: [...state.stickyNotes, newStickyNote],
    })),
  deleteStickyNote: (stickyNoteId: number) =>
    set((state: { stickyNotes: StickyNoteType[] }) => ({
      stickyNotes: state.stickyNotes.filter((stickyNote) => {
        return stickyNote.id !== stickyNoteId;
      }),
    })),
}));
