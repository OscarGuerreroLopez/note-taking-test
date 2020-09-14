import React, { ChangeEvent, useState } from "react";
import { Label, Select } from "@rebass/forms";
import { Flex, Text, Box } from "rebass";

import { CustomCard } from "../../components/CustomCard";
import { Note } from "../../components/notes/note";

interface IProps {}
const fontSize = ["1", "2", "2", "3", "3", "4"];
const colors = ["yellow", "tomato", "orange", "pink", "blue"];

export const DisplayNotes: React.FC<IProps> = (): JSX.Element => {
  const [color, setColor] = useState("yellow");

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setColor(e.currentTarget.value);
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
          <Note
            title={"Hola Gilipollas"}
            body={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
            }
            color={color}
          />
        </Flex>
      </CustomCard>
    </>
  );
};
