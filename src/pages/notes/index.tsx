import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getAllNotesFrontMatter } from "~/lib/mdx";
import { PageAllPostsProps } from "~/types";
import { ContentLayout } from "~/layouts";
import { ButtonListItem } from "~/components";
import Link from "next/link";
import { Seo } from "~/containers";

export default function NotesListPage({ notes }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo
        title="Notes"
        description="Here's where I dump my notes worth sharing. Mostly technical."
      />
      <ContentLayout title="Notes">
        {notes.length > 0
          ? notes.map((note) => (
              <Link href={`/notes/${note.slug}`} passHref key={note.slug}>
                <ButtonListItem as="a">{note.title}</ButtonListItem>
              </Link>
            ))
          : `No posts yet!`}
      </ContentLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<PageAllPostsProps> = async () => {
  return {
    props: {
      notes: getAllNotesFrontMatter(),
    },
  };
};
