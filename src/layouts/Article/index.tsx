import React from "react";
import { format } from "date-fns";
import {
  Logo,
  WrittenContent,
  HeaderLink,
  Link,
  Experience,
  ImageArticle,
  AsideNote,
  AsideCallout,
  CodeBlock,
} from "../../components";
import { ArticleLayoutProps } from "./types";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { BaseLayout } from "../Base";
import { Information } from "./styles";

// Custom components/renderers to pass to MDX.
const components = {
  Head,
  Experience,
  Aside: AsideCallout,
  img: ImageArticle,
  h2: HeaderLink,
  h3: (props: { children: string }) => <HeaderLink as="h3" {...props} />,
  h4: (props: { children: string }) => <HeaderLink as="h4" {...props} />,
  h5: (props: { children: string }) => <HeaderLink as="h5" {...props} />,
  pre: CodeBlock,
  a: Link,
};

export const ArticleLayout = ({
  content,
  title,
  date,
  minutesToRead,
  category,
}: ArticleLayoutProps) => {
  const readTimeMessage =
    minutesToRead > 0 ? minutesToRead + ` min${minutesToRead > 1 ? "s" : ""} read` : "quick read";
  const dateMessage = format(new Date(date), "MMMM do, yyyy");

  return (
    <BaseLayout>
      <header>
        <WrittenContent>
          <Logo marginBottom="var(--space-7)" />
          <h1>{title}</h1>
          <Information>
            {category && (
              <>
                <AsideNote>{category}</AsideNote> /{" "}
              </>
            )}
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
