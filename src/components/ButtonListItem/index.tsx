import React from "react";
import { ButtonListProps } from "./types";
import { ButtonListContainer, ButtonListContent, Start, End } from "./styles";
import { ArticleIcon } from "./ArticleIcon";

export const ButtonListItem = ({ children, as = "button", ...rest }: ButtonListProps) => {
  return (
    <ButtonListContainer as={as} {...rest}>
      <Start>
        <ArticleIcon name="article" />
        <ButtonListContent>{children}</ButtonListContent>
      </Start>
      <End>
        read
        <ArticleIcon name="arrow-right" />
      </End>
    </ButtonListContainer>
  );
};

export default ButtonListItem;
