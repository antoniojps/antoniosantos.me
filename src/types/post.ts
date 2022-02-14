import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface FrontMatterBase {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export interface FrontMatter extends FrontMatterBase {
  minutesToRead: number;
}

export type MarkdownContent = MDXRemoteSerializeResult<Record<string, unknown>>;

export interface PagePostProps {
  source: MarkdownContent;
  frontMatter: FrontMatter;
}

export interface PageAllPostsProps {
  notes: FrontMatterBase[];
}
