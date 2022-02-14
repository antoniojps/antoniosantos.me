import React from "react";
import slugify from "slugify";
import { Header } from "./styles";

type HeaderTag = "h1" | "h2" | "h3" | "h4" | "h5";

interface HeaderLinkProps {
  children: string;
  as?: HeaderTag;
}

export const HeaderLink = ({ children, as = "h2" }: HeaderLinkProps) => {
  const id = slugify(children, { lower: true });
  return (
    <Header as={as} id={id}>
      <a href={`#${id}`}>{children}</a>
    </Header>
  );
};

export default HeaderLink;
