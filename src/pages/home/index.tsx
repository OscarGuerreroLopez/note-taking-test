import React from "react";
import { Flex } from "rebass";
import { Intro } from "./intro";
import { CreateNote } from "./createNote";
import { DisplayNotes } from "./displayNotes";

interface IProps {}

const Home: React.FC<IProps> = (): JSX.Element => {
  return (
    <>
      <Flex justifyContent="center" flexWrap="wrap">
        <Intro />
        <CreateNote />
        <DisplayNotes />
      </Flex>
    </>
  );
};

export default Home;
