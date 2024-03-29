import React from "react";
import { Aside } from "./styles";
import {
  ContentGrid,
  Logo,
  TechStack,
  ContentSplit,
  WrittenContent,
  HeaderLink,
  AsideNote,
} from "../../components";
import { BaseLayout } from "../Base";
import { formatDistanceStrict } from "date-fns";
import Link from "next/link";

const JAVASCRIPT_DATE = "2017-01-01";
const DOGGIE_DATE = "2020-12-25";

export const HomeLayout = () => {
  const distanceJavascript = formatDistanceStrict(new Date(), new Date(JAVASCRIPT_DATE), {
    unit: "year",
  });
  const distanceDoggie = formatDistanceStrict(new Date(), new Date(DOGGIE_DATE), {
    unit: "year",
  });

  return (
    <BaseLayout>
      <header>
        <WrittenContent>
          <Logo marginBottom="var(--space-7)" />
          <h1>I&apos;m Antonio, a software developer</h1>
          <p>Hello! Thanks for taking interest in me and my profile.</p>
          <p>
            Currently I am a software developer based in <b>Portugal</b>.
          </p>
          <p>
            I enjoy diving my head into{" "}
            <Link href="/portfolio" passHref>
              challenging projects
            </Link>{" "}
            and to freshen myself up I love going for a quick surf session.
          </p>
          <p>
            I really value my time and therefore everyone’s time, so I’ve gone to the effort of
            clarifying the{" "}
            <Link href="/faq" passHref>
              <a>usual round of questions.</a>
            </Link>
          </p>
        </WrittenContent>
      </header>
      <Aside>
        <ContentGrid />
      </Aside>
      <WrittenContent>
        <HeaderLink>Technology</HeaderLink>
        <p>
          My passion is in the web. I have solid fundamentals in HTML, CSS and have made{" "}
          <b>Javascript </b>
          (Typescript) my main focus for the past {distanceJavascript}. I like building challenging
          interfaces mainly with <b>React</b> and have experience with Vue. As for the backend, I
          enjoy creating APIs (REST & GraphQL) with <b>Node.js (Express.js)</b> and PostgreSQL.
        </p>
        <AsideNote>The javascript experience is calculated on every website build.</AsideNote>
      </WrittenContent>
      <TechStack />
      <WrittenContent>
        <HeaderLink>Sectors I have worked in</HeaderLink>
        <p>
          I’m currently working for a web streaming platform delivering products with challenging
          experiences to thousands of users. I’ve worked with a large academic organization creating
          a custom CMS, in the e-commerce world and the betting industry.
        </p>

        <HeaderLink>My personality</HeaderLink>
        <p>
          I like to think of myself as someone who is communicative, empathic, flexible and easy to
          get along with.
        </p>
        <p>
          I’ve taken the 16Personalities test,{" "}
          <a
            href="https://www.16personalities.com/profiles/0375c1de2ed18"
            target="_blank"
            rel="noreferrer"
          >
            here are my results.
          </a>
        </p>

        <HeaderLink>My interests</HeaderLink>
        <p>
          I love tuning into podcasts and diving into anything related to cinematography.{" "}
          <b>Surfing</b> has been my true passion since I was 10, and for the past three years,
          I&apos;ve been enjoying leisurely walks with my dog, <i>Swell</i>.
        </p>
      </WrittenContent>
      <ContentSplit />
    </BaseLayout>
  );
};

export default HomeLayout;
