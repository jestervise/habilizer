import { create } from "zustand";
import { StickyNoteType } from "../types";

interface StickyNoteState {
  stickyNotes: StickyNoteType[];
  addStickyNote: (newStickyNote: StickyNoteType) => void;
  deleteStickyNote: (stickyNoteId: number) => void;
  setStickyNoteText: (stickyNoteId: number, stickyNoteText: string) => void;
  displayModal: boolean;
  setDisplayModal: (displayModal: boolean) => void;
}

const store = (set: any) => ({
  stickyNotes: [],
  addStickyNote: (newStickyNote: StickyNoteType) =>
    set((state: { stickyNotes: StickyNoteType[] }) => ({
      stickyNotes: [...state.stickyNotes, newStickyNote],
    })),
  deleteStickyNote: (stickyNoteId: number) =>
    set((state: { stickyNotes: StickyNoteType[] }) => ({
      stickyNotes: state.stickyNotes.filter((stickyNote) => {
        return stickyNote.id !== stickyNoteId;
      }),
    })),
  setStickyNoteText: (stickyNoteId: number, stickyNoteText: string) =>
    set((state: { stickyNotes: StickyNoteType[] }) => ({
      stickyNotes: state.stickyNotes.map((stickyNote) => {
        if (stickyNote.id === stickyNoteId) {
          return { ...stickyNote, message: stickyNoteText };
        }
        return stickyNote;
      }),
    })),
  displayModal: false,
  setDisplayModal: (displayModal: boolean) => set({ displayModal }),
});

export const useStickyNoteStore = create<StickyNoteState>(store);
