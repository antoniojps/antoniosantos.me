import React from "react";
import { Container, Start, End } from "./styles";
import { BoxStack } from "./Box";

export const TechStack = () => {
  return (
    <Container>
      <Start>
        <BoxStack name="react" />
      </Start>
      <BoxStack name="graphql" />
      <BoxStack name="gatsby" />
      <BoxStack name="git" />
      <BoxStack name="mongo" />
      <BoxStack name="vue" />
      <BoxStack name="next" />
      <BoxStack name="node" />
      <BoxStack name="javascript" />
      <End>
        <BoxStack name="typescript" />
      </End>
    </Container>
  );
};

export default TechStack;
