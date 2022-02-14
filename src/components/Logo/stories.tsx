import { ComponentMeta } from "@storybook/react";
import { Logo } from ".";

export default {
  title: "Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const Base = () => <Logo />;
