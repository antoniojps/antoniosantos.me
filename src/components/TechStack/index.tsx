import React from "react";
import { Container, Start, End } from "./styles";
import { BoxStack } from "./Box";

export const TechStack = () => {
  return (
    <Container>
      <Start>
        <BoxStack name="react" link="https://reactjs.org/" />
      </Start>
      <BoxStack name="graphql" link="https://graphql.org/" />
      <BoxStack name="gatsby" link="https://www.gatsbyjs.com/" />
      <BoxStack name="git" link="https://git-scm.com/" />
      <BoxStack name="mongo" link="https://www.mongodb.com/" />
      <BoxStack name="vue" link="https://vuejs.org/" />
      <BoxStack name="next" link="https://nextjs.org/" />
      <BoxStack name="node" link="https://nodejs.org/" />
      <BoxStack name="javascript" link="https://wikipedia.org/wiki/JavaScript" />
      <End>
        <BoxStack name="typescript" link="https://www.typescriptlang.org/" />
      </End>
    </Container>
  );
};

export default TechStack;
