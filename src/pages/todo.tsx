import { ContentLayout } from "~/layouts";
import { Seo } from "~/containers";
import { Todo } from "~/components";

export default function TodoPage() {
  return (
    <>
      <Seo title="to-do" description="A small to-do list that lives in your browser." />
      <ContentLayout title="to-do">
        <Todo />
      </ContentLayout>
    </>
  );
}
