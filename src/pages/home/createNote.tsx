import React, { ChangeEvent, FormEvent, useState } from "react";
import { Flex, Text, Button } from "rebass";
import { CustomCard } from "../../components/CustomCard";

import { NoteInput } from "../../components/notes/input";

interface IProps {}
const fontSize = ["1", "2", "2", "3", "3", "4"];

export const CreateNote: React.FC<IProps> = (): JSX.Element => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const onChangeTitle = (e: FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setTitle(e.currentTarget.value);
  };

  const onChangeNote = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    e.preventDefault();
    setNote(e.currentTarget.value);
  };

  const onClick = (): void => {
    console.log("You clicked me");
    console.log(title);
    console.log(note);
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
          />
          <NoteInput
            onChangeNote={onChangeNote}
            onChangeTitle={onChangeTitle}
            label={"Body"}
            isTitle={false}
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
