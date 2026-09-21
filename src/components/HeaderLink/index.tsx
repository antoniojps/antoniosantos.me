import React, { ReactNode } from "react";
import slugify from "slugify";
import { Header } from "./styles";

type HeaderTag = "h1" | "h2" | "h3" | "h4" | "h5";

interface HeaderLinkProps {
  children: ReactNode;
  as?: HeaderTag;
}

// headings can hold markup (e.g. a highlighted number), so flatten them for the anchor id
const toText = (children: ReactNode): string => {
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(toText).join("");
  if (React.isValidElement(children)) return toText(children.props.children);
  return "";
};

export const HeaderLink = ({ children, as = "h2" }: HeaderLinkProps) => {
  const id = slugify(toText(children), { lower: true });
  return (
    <Header as={as} id={id}>
      <a href={`#${id}`}>{children}</a>
    </Header>
  );
};

export default HeaderLink;
