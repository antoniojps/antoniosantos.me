import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface FrontMatter {
  title: string;
  date: string;
  description: string;
  minutesToRead: number;
}

export type MarkdownContent = MDXRemoteSerializeResult<Record<string, unknown>>;

export interface PagePostProps {
  source: MarkdownContent;
  frontMatter: FrontMatter;
}
