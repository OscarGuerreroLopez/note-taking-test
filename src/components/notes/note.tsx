import React from "react";
import { Flex, Text, Button, Box } from "rebass";

import { CustomCard } from "../../components/CustomCard";

interface IProps {
  title: string;
  body: string;
  color: string;
  id: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}
const fontSize = ["1", "2", "2", "3", "3", "4"];

export const Note: React.FC<IProps> = ({
  title,
  body,
  color,
  id,
  onDelete,
  onEdit,
}): JSX.Element => {
  return (
    <Flex
      justifyContent="center"
      sx={{
        width: ["100%", "100%", "100%", "100%", "50%", "50%", "33.3%"],
        height: "100%",
      }}
    >
      <CustomCard css={{ backgroundColor: color }}>
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
          <Flex flexWrap="wrap" width="100%">
            <Box
              sx={{
                width: "50%",
                textAlign: "center",
              }}
            >
              <Button onClick={() => onEdit(id)}>Edit</Button>
            </Box>

            <Box
              sx={{
                width: "50%",
                textAlign: "center",
              }}
            >
              <Button onClick={() => onDelete(id)}>Delete</Button>
            </Box>
          </Flex>
        </Flex>
      </CustomCard>
    </Flex>
  );
};
