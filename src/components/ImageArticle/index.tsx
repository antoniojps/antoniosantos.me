import React from "react";
import { ImageArticleProps } from "./types";
import { ImageWrapper } from "./styles";

export const ImageArticle = ({ src, alt }: ImageArticleProps) => {
  return (
    <ImageWrapper>
      <img src={src} alt={alt} />
    </ImageWrapper>
  );
};

export default ImageArticle;
