import { ReactNode } from "react";

export interface ButtonListProps {
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}
