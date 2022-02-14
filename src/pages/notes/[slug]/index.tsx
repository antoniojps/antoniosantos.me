import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getNotesAsPaths, getNoteBySlugSerialized } from "~/lib/mdx";
import { PagePostProps } from "~/types/post";
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
  return {
    props: await getNoteBySlugSerialized(params?.slug),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getNotesAsPaths(),
    fallback: false,
  };
};
