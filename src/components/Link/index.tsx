import React, { ReactNode } from "react";
import NextLink from "next/link";

interface LinkProps {
  children: ReactNode;
  href: string;
}

export const Link = ({ href, children }: LinkProps) => {
  const isInternal = href.startsWith("/") && !href.endsWith(".pdf");
  return isInternal ? (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  ) : (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default Link;
