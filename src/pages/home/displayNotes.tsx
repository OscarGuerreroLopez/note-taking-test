import React from "react";
import { Flex, Text } from "rebass";

import { CustomCard } from "../../components/CustomCard";
import { Note } from "../../components/notes/note";

interface IProps {}
const fontSize = ["1", "2", "2", "3", "3", "4"];

export const DisplayNotes: React.FC<IProps> = (): JSX.Element => {
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
              height: "100%",
            }}
          >
            Display notes:
          </Text>

          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </Flex>
      </CustomCard>
    </>
  );
};
