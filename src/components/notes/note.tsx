import React from "react";
import { Flex, Text } from "rebass";

import { CustomCard } from "../../components/CustomCard";

interface IProps {}
const fontSize = ["1", "2", "2", "3", "3", "4"];

export const Note: React.FC<IProps> = (): JSX.Element => {
  return (
    <Flex
      justifyContent="center"
      sx={{
        width: ["100%", "100%", "100%", "100%", "50%", "50%", "33.3%"],
        height: "100%",
      }}
    >
      <CustomCard>
        <Flex justifyContent="center">
          <Text
            sx={{
              fontSize,
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
            }}
          >
            Display notes:
          </Text>
        </Flex>
      </CustomCard>
    </Flex>
  );
};
