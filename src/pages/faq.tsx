import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { calculateMinutesToRead, DATA_PATH } from "~/lib/mdx";
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

export const getStaticProps: GetStaticProps<PagePostProps> = async () => {
  const postFilePath = path.join(DATA_PATH, `faq.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);
  const minutesToRead = calculateMinutesToRead(content);
  const dataSerializable = { ...data, date: data.date.toISOString() };

  const mdxSource = await serialize(content, { scope: dataSerializable });

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
