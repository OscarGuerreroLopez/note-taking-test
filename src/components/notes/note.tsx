import React from "react";
import { Flex, Text } from "rebass";

import { CustomCard } from "../../components/CustomCard";

interface IProps {
  title: string;
  body: string;
}
const fontSize = ["1", "2", "2", "3", "3", "4"];

export const Note: React.FC<IProps> = ({ title, body }): JSX.Element => {
  return (
    <Flex
      justifyContent="center"
      sx={{
        width: ["100%", "100%", "100%", "100%", "50%", "50%", "33.3%"],
        height: "100%",
      }}
    >
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
            {title}
          </Text>
          <Text
            sx={{
              width: "100%",
            }}
          >
            {body}
          </Text>
        </Flex>
      </CustomCard>
    </Flex>
  );
};
