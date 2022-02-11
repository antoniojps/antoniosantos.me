import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { postFilePaths, POSTS_PATH } from "~/lib/mdx";
import { FrontMatter, PagePostProps } from "~/types/post";
import { NoteLayout } from "~/layouts";

export default function PostPage({
  source,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <NoteLayout content={source} {...frontMatter} />;
}

export const getStaticProps: GetStaticProps<PagePostProps> = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data as FrontMatter,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
