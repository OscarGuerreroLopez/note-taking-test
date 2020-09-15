import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { Flex, Text, Button } from "rebass";
import { v4 as uuidv4 } from "uuid";

import { CustomCard } from "../../components/CustomCard";
import { NoteInput } from "../../components/notes/input";
import { NotesContext, INote } from "../../context";

interface IProps {
  isNew: boolean;
  noteId: string;
  setIsNew: (value: boolean) => void;
  setNoteId: (id: string) => void;
}
const fontSize = ["1", "2", "2", "3", "3", "4"];

export const CreateNote: React.FC<IProps> = ({
  isNew,
  noteId,
  setIsNew,
  setNoteId,
}): JSX.Element => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { setNotes, notes } = useContext(NotesContext);

  useEffect(() => {
    let whatNoteToEdit = null;
    if (!isNew) {
      whatNoteToEdit = notes.find((note) => {
        return note.id === noteId;
      });
    }

    if (whatNoteToEdit) {
      setTitle(whatNoteToEdit.title);
      setBody(whatNoteToEdit.body);
    }
  }, [isNew, noteId, notes]);

  const onChangeTitle = (e: FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setTitle(e.currentTarget.value);
  };

  const onChangeNote = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    e.preventDefault();
    setBody(e.currentTarget.value);
  };

  const onClick = (): void => {
    if (isNew) {
      newNote();
    } else {
      editNote();
    }
  };

  const editNote = () => {
    notes.forEach((note: INote, index: number) => {
      if (note.id === noteId) {
        setNotes((prevNotes: INote[]) => {
          prevNotes[index] = { id: noteId, title, body };
          return prevNotes;
        });
      }
    });
    setTitle("");
    setBody("");
    setIsNew(true);
    setNoteId("");
  };

  const newNote = () => {
    const id = uuidv4();
    const newNote: INote = {
      id,
      title,
      body,
    };

    setNotes((prevNotes: INote[]) => [...prevNotes, newNote]);
    setTitle("");
    setBody("");
  };

  return (
    <>
      <CustomCard>
        <Flex justifyContent="center" flexWrap="wrap">
          <Text
            sx={{
              fontSize,
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
            }}
          >
            {isNew ? "Create a" : "Edit the"} note:
          </Text>

          <NoteInput
            onChangeNote={onChangeNote}
            onChangeTitle={onChangeTitle}
            label={"Title"}
            isTitle={true}
            title={title}
          />
          <NoteInput
            onChangeNote={onChangeNote}
            onChangeTitle={onChangeTitle}
            label={"Body"}
            isTitle={false}
            body={body}
          />
          <Flex
            sx={{
              justifyContent: "center",
              ml: [0, 0, 0, 0, 0, 4, 4, 4],
              mt: 3,
              width: "100%",
            }}
          >
            <Button height="100%" onClick={onClick}>
              SAVE
            </Button>
          </Flex>
        </Flex>
      </CustomCard>
    </>
  );
};
