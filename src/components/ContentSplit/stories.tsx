import { ComponentMeta } from "@storybook/react";
import { ContentSplit } from ".";
import styled from "styled-components";

const Container = styled.div`
  height: 300px;
`;

export default {
  title: "ContentSplit",
  component: ContentSplit,
} as ComponentMeta<typeof ContentSplit>;

export const Base = () => (
  <Container>
    <ContentSplit />
  </Container>
);
