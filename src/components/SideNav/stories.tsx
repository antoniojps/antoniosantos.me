import { ComponentMeta } from "@storybook/react";
import { SideNav } from ".";

export default {
  title: "SideNav",
  component: SideNav,
} as ComponentMeta<typeof SideNav>;

export const Base = () => <SideNav />;
