import { FrontMatter, MarkdownContent } from "~/types";

export interface ArticleLayoutProps extends FrontMatter {
  content: MarkdownContent;
}
