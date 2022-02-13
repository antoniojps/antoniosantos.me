import React from "react";

interface IconProps {
  name: "github" | "linkedin" | "youtube";
}

export const FooterIcon = ({ name }: IconProps) => {
  switch (name) {
    case "github":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            fill="var(--accents-5)"
            d="M10 .25a9.99 9.99 0 00-10 10c0 4.406 2.876 8.157 6.843 9.5.5.094.688-.219.688-.469v-1.687c-2.781.593-3.375-1.344-3.375-1.344-.469-1.157-1.125-1.469-1.125-1.469-.905-.625.063-.594.063-.594 1 .063 1.53 1.032 1.53 1.032.907 1.531 2.345 1.094 2.907.842.095-.655.343-1.092.625-1.342-2.219-.25-4.562-1.125-4.562-4.938 0-1.094.375-1.968 1.03-2.687-.093-.25-.437-1.281.095-2.657 0 0 .842-.281 2.75 1.032a9.65 9.65 0 012.5-.343 9.48 9.48 0 012.5.343c1.907-1.282 2.75-1.032 2.75-1.032.531 1.376.187 2.407.094 2.657.657.686 1.031 1.593 1.031 2.686 0 3.844-2.344 4.689-4.563 4.939.343.312.688.905.688 1.842v2.752c0 .281.187.593.687.468C17.126 18.406 20 14.656 20 10.25a9.99 9.99 0 00-10-10z"
          ></path>
        </svg>
      );
    case "linkedin":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.833 0H4.167A4.167 4.167 0 0 0 0 4.167v11.666C0 18.134 1.866 20 4.167 20h11.666A4.167 4.167 0 0 0 20 15.833V4.167C20 1.866 18.135 0 15.833 0ZM6.667 15.833h-2.5V6.667h2.5v9.166ZM5.417 5.61a1.465 1.465 0 0 1-1.459-1.47c0-.812.654-1.47 1.459-1.47s1.458.658 1.458 1.47c0 .812-.652 1.47-1.458 1.47Zm11.25 10.223h-2.5v-4.67c0-2.806-3.334-2.594-3.334 0v4.67h-2.5V6.667h2.5v1.47c1.164-2.155 5.834-2.314 5.834 2.064v5.632Z"
            fill="var(--accents-5)"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="14"
          fill="none"
          viewBox="0 0 20 14"
        >
          <path
            fill="var(--accents-5)"
            d="M19.087 2.414c.396 1.49.396 4.594.396 4.594s0 3.104-.396 4.594a2.35 2.35 0 01-1.677 1.66c-1.48.399-7.41.399-7.41.399s-5.93 0-7.41-.4a2.35 2.35 0 01-1.677-1.66C.517 10.113.517 7.009.517 7.009s0-3.104.396-4.594A2.38 2.38 0 012.59.727c1.48-.4 7.41-.4 7.41-.4s5.93 0 7.41.4a2.38 2.38 0 011.677 1.687zM8.059 9.827l4.955-2.819-4.955-2.82v5.64z"
          ></path>
        </svg>
      );
    default:
      return <span>invalid icon name</span>;
  }
};

export default FooterIcon;