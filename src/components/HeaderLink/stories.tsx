import { ComponentMeta } from "@storybook/react";
import { HeaderLink } from ".";

export default {
  title: "HeaderLink",
  component: HeaderLink,
} as ComponentMeta<typeof HeaderLink>;

export const Base = () => <HeaderLink>Hello world</HeaderLink>;
