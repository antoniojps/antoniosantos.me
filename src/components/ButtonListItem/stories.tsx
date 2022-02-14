import { ComponentMeta } from "@storybook/react";
import { ButtonListItem } from "./";

export default {
  title: "ButtonListItem",
  component: ButtonListItem,
} as ComponentMeta<typeof ButtonListItem>;

export const Base = () => (
  <ButtonListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit</ButtonListItem>
);
