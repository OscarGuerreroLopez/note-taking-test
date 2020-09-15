import React, { ChangeEvent, useContext, useState } from "react";
import { Label, Select } from "@rebass/forms";
import { Flex, Text, Box } from "rebass";

import { CustomCard } from "../../components/CustomCard";
import { Note } from "../../components/notes/note";
import { NotesContext, INote } from "../../context";

interface IProps {}
const fontSize = ["1", "2", "2", "3", "3", "4"];
const colors = ["yellow", "tomato", "orange", "pink", "blue"];

export const DisplayNotes: React.FC<IProps> = (): JSX.Element => {
  const [color, setColor] = useState("yellow");
  const { notes, setNotes } = useContext(NotesContext);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setColor(e.currentTarget.value);
  };

  const onEdit = (id: string) => {
    console.log("Cliked Edit", id);
    console.log(notes);
  };

  const onDelete = (id: string) => {
    console.log("Cliked Delete", id);
    console.log(notes);
    setNotes((prevNotes: INote[]) => {
      return prevNotes.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <CustomCard>
        <Flex justifyContent="center" flexWrap="wrap" mb="4">
          <Text
            sx={{
              fontSize,
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
              height: "100%",
            }}
          >
            Display notes:
          </Text>
          <Flex
            sx={{
              width: "100%",
              justifyContent: "center",
              mt: "4",
            }}
          >
            <Box sx={{ width: ["80%", "80%", "60%", "60%", "40%"] }}>
              <Label htmlFor="color">Choose the color for the notes:</Label>
              <Select
                id="color"
                name="color"
                defaultValue={color}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  onChange(e);
                }}
              >
                {Object.entries(colors).map(([key, color]) => (
                  <option key={key}>{color}</option>
                ))}
              </Select>
            </Box>
          </Flex>

          {notes.map((note: INote) => (
            <Note
              title={note.title}
              body={note.body}
              color={color}
              id={note.id}
              key={note.id}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </Flex>
      </CustomCard>
    </>
  );
};
