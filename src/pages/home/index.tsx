import React, { useState } from "react";
import { Flex } from "rebass";
import { Intro } from "./intro";
import { CreateNote } from "./createNote";
import { DisplayNotes } from "./displayNotes";

interface IProps {}

const Home: React.FC<IProps> = (): JSX.Element => {
  const [isNew, setIsNew] = useState(true);
  const [noteId, setNoteId] = useState("");

  return (
    <>
      <Flex justifyContent="center" flexWrap="wrap">
        <Intro />
        <CreateNote
          isNew={isNew}
          noteId={noteId}
          setIsNew={setIsNew}
          setNoteId={setNoteId}
        />
        <DisplayNotes setIsNew={setIsNew} setNoteId={setNoteId} />
      </Flex>
    </>
  );
};

export default Home;
