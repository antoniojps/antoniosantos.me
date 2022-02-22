import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getAllNotesFrontMatter } from "~/lib/mdx";
import { FrontMatterBase, PageAllPostsProps } from "~/types";
import { ContentLayout } from "~/layouts";
import { ButtonListItem } from "~/components";
import Link from "next/link";
import { Seo } from "~/containers";
import { useMemo } from "react";

interface NoteCategory {
  title: string;
  notes: FrontMatterBase[];
}

const defaultNotes: NoteCategory[] = [];
const defaultCategory = "note";
const polishTitle = (str: string) => {
  const capitalized = str.charAt(0).toLocaleUpperCase() + str.slice(1);
  return `${capitalized}s`;
};

export default function NotesListPage({ notes }: InferGetStaticPropsType<typeof getStaticProps>) {
  const notesByCategory = useMemo(
    () =>
      notes.reduce((acc, curr) => {
        const currentCategory = curr.category || defaultCategory;
        const categoryIndexInAcc = acc.findIndex((currCat) => currCat.title === currentCategory);

        // does not exist
        if (categoryIndexInAcc === -1) {
          return [
            ...acc,
            {
              title: currentCategory,
              notes: [curr],
            },
          ];
        }

        acc[categoryIndexInAcc].notes.push(curr);
        return acc;
      }, defaultNotes),
    [notes.length]
  );

  return (
    <>
      <Seo
        title="Notes"
        description="Here's where I dump my notes worth sharing. Mostly technical."
      />
      <ContentLayout title="Notes">
        {notesByCategory.map((cat) => (
          <>
            <h2>{polishTitle(cat.title)}</h2>
            {cat.notes.length > 0 ? (
              cat.notes.map((note) => (
                <Link href={`/notes/${note.slug}`} passHref key={note.slug}>
                  <ButtonListItem as="a">{note.title}</ButtonListItem>
                </Link>
              ))
            ) : (
              <p>No notes yet!</p>
            )}
          </>
        ))}
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
