import { ComponentMeta } from "@storybook/react";
import { ContentGrid } from ".";
import styled from "styled-components";

const Container = styled.div`
  height: 300px;
`;

export default {
  title: "ContentGrid",
  component: ContentGrid,
} as ComponentMeta<typeof ContentGrid>;

export const Base = () => (
  <Container>
    <ContentGrid />
  </Container>
);
