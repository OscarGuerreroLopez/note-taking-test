import { createContext, Dispatch, SetStateAction } from "react";

export interface INote {
  id: string;
  title: string;
  body: string;
}

export interface INotesProvider {
  notes: INote[];
  setNotes: Dispatch<SetStateAction<INote[]>>;
}

export const InitialState: INote[] = [];

export const NotesContext = createContext<INotesProvider>({
  notes: InitialState,
  setNotes: () => [],
});
