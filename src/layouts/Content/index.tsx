import React from "react";
import { Logo, WrittenContent } from "../../components";
import { ContentLayoutProps } from "./types";
import { BaseLayout } from "../Base";

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <BaseLayout>
      <header>
        <WrittenContent>
          <Logo marginBottom="var(--space-7)" />
          <h1>{title}</h1>
        </WrittenContent>
      </header>
      <WrittenContent>{children}</WrittenContent>
    </BaseLayout>
  );
};

export default ContentLayout;
