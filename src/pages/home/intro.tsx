import React from "react";
import { Flex, Text } from "rebass";
import { CustomCard } from "../../components/CustomCard";

interface IProps {}
const fontSize = ["1", "2", "2", "3", "3", "4"];

export const Intro: React.FC<IProps> = (): JSX.Element => {
  return (
    <>
      <CustomCard>
        <Flex justifyContent="center" flexWrap="wrap">
          <Text
            sx={{
              fontSize,
              fontWeight: "bold",
            }}
          >
            Note Taker app
          </Text>
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Text>
        </Flex>
      </CustomCard>
    </>
  );
};
