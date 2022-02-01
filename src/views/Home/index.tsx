import React from "react";
import { Grid, Container, Main, Article, WrittenContent, Aside, Header, Nav, Footer } from "./styles";

export const HomeView = () => {
  return (
    <Container>
      <Grid>
        <Main>
          <Nav>Nav</Nav>
          <Article>
            <Header>
              <WrittenContent>
                <h1>I&apos;m Antonio, a software developer</h1>
                <p>Hello! Thanks for taking interest in me and my profile.</p>
                <p>Currently I am a frontend developer based in Portugal.</p>
                <p>I enjoy diving my head into challenging projects and to freshen myself up I love going for a quick surf session.</p>
                <p>I really value my time and therefore everyone’s time, so I’ve gone to the effort of clarifying the usual round of questions.</p>
              </WrittenContent>
            </Header>
            <Aside>Aside</Aside>
            <WrittenContent>
              <h2>Technology</h2>
              <p>My passion is in the frontend, eventhough I have experience with backend for personal projects. I have solid fundamentals in HTML, CSS and have made Javascript my main focus for the past 4 years. I like building challenging interfaces mainly with React and have experience with Vue.</p>
            </WrittenContent>
          </Article>
        </Main>
        <Footer>footer</Footer>
      </Grid>
    </Container>
  );
};

export default HomeView;
