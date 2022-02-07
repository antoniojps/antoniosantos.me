import { ComponentMeta } from "@storybook/react";
import { Button } from "..";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Base = () => <Button>Hello</Button>;
