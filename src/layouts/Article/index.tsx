import React from "react";
import { format } from "date-fns";
import { Logo, WrittenContent, HeaderLink, Link, Experience, ImageArticle } from "../../components";
import { ArticleLayoutProps } from "./types";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { BaseLayout } from "../Base";
import { Information } from "./styles";

// Custom components/renderers to pass to MDX.
const components = {
  Head,
  Experience,
  img: ImageArticle,
  h2: HeaderLink,
  h3: HeaderLink,
  h4: HeaderLink,
  h5: HeaderLink,
  a: Link,
};

export const ArticleLayout = ({ content, title, date, minutesToRead }: ArticleLayoutProps) => {
  const readTimeMessage = minutesToRead + ` min${minutesToRead > 1 ? "s" : ""} read`;
  const dateMessage = format(new Date(date), "MMMM do, yyyy");

  return (
    <BaseLayout>
      <header>
        <WrittenContent>
          <Logo marginBottom="var(--space-7)" />
          <h1>{title}</h1>
          <Information>
            {dateMessage} • {readTimeMessage}
          </Information>
        </WrittenContent>
      </header>
      <WrittenContent>
        <MDXRemote {...content} components={components} />
      </WrittenContent>
    </BaseLayout>
  );
};

export default ArticleLayout;
