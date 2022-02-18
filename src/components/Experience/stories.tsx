import { ComponentMeta } from "@storybook/react";
import { Experience } from ".";

export default {
  title: "Experience",
  component: Experience,
} as ComponentMeta<typeof Experience>;

export const Base = () => <Experience />;
