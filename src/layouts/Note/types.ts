import { FrontMatter, MarkdownContent } from "~/types";

export interface NoteLayoutProps extends FrontMatter {
  content: MarkdownContent;
}
