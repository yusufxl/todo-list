import { create } from "zustand";
import { uz } from "../lang";

const getNotes = () => {
  const local = localStorage.getItem("notes");
  if (local) {
    return JSON.parse(local);
  } else {
    return [];
  }
};

export const useNotesStore = create((set) => ({
  lang: uz,
  modal: false,
  modall: false,
  selectedNote: null,
  text: "",
  title: "",
  value: "",
  update: { id: "", edit: false },
  notes: getNotes(),
  setValue: (data) => set({ value: data }),
  setText: (data) => set({ text: data }),
  setTitle: (data) => set({ title: data }),
  setLang: (data) => set({ lang: data }),
  setNotes: (data) =>
    set((state) => {
      localStorage.setItem("notes", JSON.stringify(data));
      return (state.notes = data);
    }),
  setUpdate: (data) => set({ update: data }),
  setModal: (data) => set({ modal: data }),
  setModall: (data) => set({ modall: data }),
  setSelectedNote: (data) => set({ selectedNote: data }),
}));
