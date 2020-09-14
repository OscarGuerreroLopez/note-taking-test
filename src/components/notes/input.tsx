import React, { ChangeEvent, FormEvent, FC } from "react";
import { Flex, Text, Box } from "rebass";
import { Input, Textarea } from "@rebass/forms";

interface IProps {
  onChangeTitle: (e: FormEvent<HTMLInputElement>) => void;
  onChangeNote: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

interface IProps2 {
  onChangeTitle: (e: FormEvent<HTMLInputElement>) => void;
  onChangeNote: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  isTitle: boolean;
}

export const NoteInput: React.FC<IProps2> = ({
  onChangeNote,
  onChangeTitle,
  label,
  isTitle,
}): JSX.Element => {
  return (
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
          {label}:
        </Text>
      </Box>
      <Box
        sx={{
          width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
        }}
      >
        {isTitle && (
          <Input
            id="title"
            name="title"
            type="title"
            onChange={onChangeTitle}
          />
        )}

        {!isTitle && (
          <Textarea
            id="comment"
            name="comment"
            maxWidth="100%"
            minWidth="100%"
            minHeight="100%"
            maxHeight="200px"
            onChange={onChangeNote}
          />
        )}
      </Box>
    </Flex>
  );
};
