import React, { FormEvent, useState } from "react";
import { Flex, Text, Box, Button } from "rebass";
import { CustomCard } from "../../components/CustomCard";
import { Input, Textarea } from "@rebass/forms";

interface IProps {}
const fontSize = ["1", "2", "2", "3", "3", "4"];

export const CreateNote: React.FC<IProps> = (): JSX.Element => {
  const [title, setTitle] = useState("");

  const onChangeTitle = (e: FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setTitle(e.currentTarget.value);
  };

  const onClick = (): void => {
    console.log("You clicked me");
    console.log(title);
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
          <Flex flexWrap="wrap" width="80%">
            <Box
              sx={{
                width: ["100%", "100%", "100%", "100%", "100%", "25%", "25%"],
              }}
            >
              <Text
                sx={{
                  textAlign: ["left", "left", "left", "left", "left", "right"],
                  mr: [0, 0, 0, 0, 0, 4, 4, 4],
                  mb: [2, 2, 2, 2, 2, 0],
                  fontSize: ["3", "4", "4", "4", "4", "5", "5", "5"],
                }}
              >
                Title:
              </Text>
            </Box>
            <Box
              sx={{
                width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
              }}
            >
              <Input
                id="title"
                name="title"
                type="title"
                placeholder="New Note"
                onChange={onChangeTitle}
              />
            </Box>
          </Flex>
          <Flex flexWrap="wrap" width="80%">
            <Box
              sx={{
                width: ["100%", "100%", "100%", "100%", "100%", "25%", "25%"],
              }}
            >
              <Text
                sx={{
                  textAlign: ["left", "left", "left", "left", "left", "right"],
                  mr: [0, 0, 0, 0, 0, 4, 4, 4],
                  mb: [2, 2, 2, 2, 2, 0],
                  mt: [2, 2, 2, 2, 2, 0],
                  fontSize: ["3", "4", "4", "4", "4", "5", "5", "5"],
                }}
              >
                Body:
              </Text>
            </Box>
            <Box
              sx={{
                width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
              }}
            >
              <Textarea
                id="comment"
                name="comment"
                maxWidth="100%"
                minWidth="100%"
                minHeight="100%"
                maxHeight="200px"
              />
            </Box>
          </Flex>
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
