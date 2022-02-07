import { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
}
