import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Flex, Text, Button } from "rebass";
import { v4 as uuidv4 } from "uuid";

import { CustomCard } from "../../components/CustomCard";
import { NoteInput } from "../../components/notes/input";
import { NotesContext, INote } from "../../context";

interface IProps {}
const fontSize = ["1", "2", "2", "3", "3", "4"];

export const CreateNote: React.FC<IProps> = (): JSX.Element => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { setNotes } = useContext(NotesContext);

  const onChangeTitle = (e: FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setTitle(e.currentTarget.value);
  };

  const onChangeNote = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    e.preventDefault();
    setBody(e.currentTarget.value);
  };

  const onClick = (): void => {
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
            Create a note:
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
