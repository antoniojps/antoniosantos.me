import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface FrontMatter {
  title: string;
  description: string;
}

export type MarkdownContent = MDXRemoteSerializeResult<Record<string, unknown>>;

export interface PagePostProps {
  source: MarkdownContent;
  frontMatter: FrontMatter;
}
