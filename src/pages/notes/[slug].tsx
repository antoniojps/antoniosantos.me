import fs from "fs";
import matter from "gray-matter";
import prism from "remark-prism";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { postFilePaths, POSTS_PATH, calculateMinutesToRead } from "~/lib/mdx";
import { FrontMatter, PagePostProps } from "~/types/post";
import { ArticleLayout } from "~/layouts";
import { Seo } from "~/containers";

export default function PostPage({
  source,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo title={frontMatter.title} description={frontMatter.description} />
      <ArticleLayout content={source} {...frontMatter} />;
    </>
  );
}

export const getStaticProps: GetStaticProps<PagePostProps> = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);
  const minutesToRead = calculateMinutesToRead(content);
  const dataSerializable = { ...data, date: data.date.toISOString() };

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [prism],
      rehypePlugins: [],
    },
    scope: dataSerializable,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        ...dataSerializable,
        minutesToRead,
      } as FrontMatter,
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
