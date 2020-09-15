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
            This test is mobile friendly, go ahead and try different setups For
            this test I used theme-ui with rebase for styling, not perfect but
            the test was done in 4 hours so I did the best I could. My main
            expertise is with node and typescript, so if you like this one
            believe me, I can do a lot better in the back. I am a fullstack guy
            but I would say that 60% Backend and 40% Frontend, since the
            position I was offered was for a full stack but with more expertise
            in backend with node……
          </Text>
        </Flex>
      </CustomCard>
    </>
  );
};
