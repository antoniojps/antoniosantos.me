import { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps {
  variant?: ButtonVariant;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}
