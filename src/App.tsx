import React, { useState, useMemo } from "react";
import { ThemeProvider } from "theme-ui";
import { theme } from "./styles";

import Router from "./router";
import { InitialState, INotesProvider, NotesContext, INote } from "./context";

function App() {
  const [notes, setNotes] = useState<INote[]>(InitialState);

  const notesProvider: INotesProvider = useMemo(
    () => ({
      notes,
      setNotes,
    }),
    [notes, setNotes]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <NotesContext.Provider value={notesProvider}>
          <Router />
        </NotesContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
