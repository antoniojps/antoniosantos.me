import React from "react";

interface IconProps {
  name: "article" | "arrow-right";
}

export const ArticleIcon = ({ name }: IconProps) => {
  switch (name) {
    case "article":
      return (
        <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.586 1.752A2 2 0 0 1 4 1.167h5.333c.177 0 .347.07.472.195l4 4a.666.666 0 0 1 .195.471v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3.167a2 2 0 0 1 .586-1.415ZM4 2.5a.667.667 0 0 0-.667.667v10.666A.667.667 0 0 0 4 14.5h8a.666.666 0 0 0 .667-.667V6.11L9.057 2.5H4Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.333 1.167c.368 0 .667.298.667.666v3.334h3.333a.667.667 0 1 1 0 1.333h-4a.667.667 0 0 1-.666-.667v-4c0-.368.298-.666.666-.666ZM4.667 9.167c0-.369.298-.667.666-.667h5.334a.667.667 0 1 1 0 1.333H5.333a.667.667 0 0 1-.666-.666ZM4.667 11.833c0-.368.298-.666.666-.666h5.334a.667.667 0 1 1 0 1.333H5.333a.667.667 0 0 1-.666-.667ZM4.667 6.5c0-.368.298-.667.666-.667h1.334a.667.667 0 0 1 0 1.334H5.333a.667.667 0 0 1-.666-.667Z"
            fill="currentColor"
          />
        </svg>
      );
    case "arrow-right":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3.721 8c0-.368.32-.667.714-.667h9.995c.395 0 .714.299.714.667 0 .368-.32.667-.714.667H4.435c-.394 0-.714-.299-.714-.667z"
            clipRule="evenodd"
          ></path>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.928 2.862a.75.75 0 011.01 0l4.997 4.667a.636.636 0 010 .942l-4.997 4.667a.75.75 0 01-1.01 0 .636.636 0 010-.943L13.42 8 8.928 3.805a.636.636 0 010-.943z"
            clipRule="evenodd"
          ></path>
        </svg>
      );
    default:
      return <span>invalid icon name</span>;
  }
};

export default ArticleIcon;
