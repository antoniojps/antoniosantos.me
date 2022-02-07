import { ComponentMeta } from "@storybook/react";
import { TechStack } from ".";
import { BoxStack } from "./Box";

export default {
  title: "TechStack",
  component: TechStack,
} as ComponentMeta<typeof TechStack>;

export const Base = () => <TechStack />;
export const Box = () => <BoxStack name="typescript" />;
