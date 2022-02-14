import fs from "fs";
import matter from "gray-matter";
import prism from "remark-prism";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { FrontMatter, FrontMatterBase } from "~/types";
import { calculateMinutesToRead } from "./";

export const POSTS_PATH = path.join(process.cwd(), "src/data/notes");
export const DATA_PATH = path.join(process.cwd(), "src/data");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const getNotesAsPaths = () =>
  fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

export const getNoteBySlugSerialized = async (slug?: string | string[]) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);
  const minutesToRead = calculateMinutesToRead(content);
  const dataSerializable = { ...data, date: data.date.toISOString(), slug };

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [prism],
      rehypePlugins: [],
    },
    scope: dataSerializable,
  });

  return {
    source: mdxSource,
    frontMatter: {
      ...dataSerializable,
      minutesToRead,
    } as FrontMatter,
  };
};

export function getNoteFrontMatterBySlug(slug: string): FrontMatterBase {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(POSTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    ...data,
    date: data.date.toISOString(),
    slug: realSlug,
  } as FrontMatterBase;
}

export function getAllNotesFrontMatter() {
  const posts = postFilePaths
    .map((slug) => getNoteFrontMatterBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
