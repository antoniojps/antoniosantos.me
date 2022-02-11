import { ComponentMeta } from "@storybook/react";
import { WrittenContent } from "./";

export default {
  title: "WrittenContent",
  component: WrittenContent,
} as ComponentMeta<typeof WrittenContent>;

export const Base = () => (
  <WrittenContent>
    <h1>I&apos;m Antonio, a software developer</h1>
    <p>Hello! Thanks for taking interest in me and my profile.</p>
    <p>
      Currently I am a frontend developer based in <b>Portugal</b>.
    </p>
    <br />
    <p>
      I enjoy diving my head into challenging projects and to freshen myself up I love going for a
      quick surf session.
    </p>
    <br />
    <p>
      I really value my time and therefore everyone’s time, so I’ve gone to the effort of clarifying
      the usual round of questions.
    </p>
  </WrittenContent>
);
