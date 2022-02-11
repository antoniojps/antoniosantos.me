import React from "react";
import { Logo, WrittenContent } from "../../components";
import { NoteLayoutProps } from "./types";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { BaseLayout } from "../Base";

// Custom components/renderers to pass to MDX.
const components = {
  Head,
};

export const NoteLayout = ({ content, title, description }: NoteLayoutProps) => {
  return (
    <BaseLayout>
      <header>
        <WrittenContent>
          <Logo marginBottom="var(--space-7)" />
          <h1>{title}</h1>
        </WrittenContent>
      </header>
      <WrittenContent>
        <MDXRemote {...content} components={components} />
      </WrittenContent>
    </BaseLayout>
  );
};

export default NoteLayout;
