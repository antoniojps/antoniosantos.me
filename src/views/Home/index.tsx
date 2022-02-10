import React from "react";
import {
  Grid,
  Container,
  Main,
  Article,
  WrittenContent,
  Aside,
  Header,
  Nav,
  FooterWrapper,
} from "./styles";
import { ContentGrid, Footer, Logo, SideNav, TechStack } from "../../components";

export const HomeView = () => {
  return (
    <Container>
      <Grid>
        <Main>
          <Nav>
            <SideNav />
          </Nav>
          <Article>
            <Header>
              <WrittenContent>
                <Logo marginBottom="var(--space-7)" />
                <h1>I&apos;m Antonio, a software developer</h1>
                <p>Hello! Thanks for taking interest in me and my profile.</p>
                <p>
                  Currently I am a frontend developer based in <b>Portugal</b>.
                </p>
                <br />
                <p>
                  I enjoy diving my head into challenging projects and to freshen myself up I love
                  going for a quick surf session.
                </p>
                <br />
                <p>
                  I really value my time and therefore everyone’s time, so I’ve gone to the effort
                  of clarifying the usual round of questions.
                </p>
              </WrittenContent>
            </Header>
            <Aside>
              <ContentGrid />
            </Aside>
            <WrittenContent>
              <h2>Technology</h2>
              <p>
                My passion is in the frontend, eventhough I have experience with backend for
                personal projects. I have solid fundamentals in HTML, CSS and have made{" "}
                <b>Javascript</b>
                my main focus for the past 4 years. I like building challenging interfaces mainly
                with <b>React</b> and have experience with Vue.
              </p>
            </WrittenContent>
            <TechStack />
            <WrittenContent>
              <h2>Sectors I have worked in</h2>
              <p>
                As a web developer I’ve worked with a large academic organization in the content
                management space, have worked in the e-commerce world and am currently working in
                the betting industry delivering products with challenging experiences to thousands
                of users.
              </p>

              <h2>My personality</h2>
              <p>
                I like to think of myself as someone who is communicative, empathic, flexible and
                easy to get along with.
              </p>
              <p>I’ve taken the 16Personalities test, here are my results.</p>

              <h2>My interests</h2>
              <p>
                I enjoy listening to podcasts and anything cinematography. My true passion since the
                age of 10 is in the sea, <b>surfing</b>.
              </p>
            </WrittenContent>
          </Article>
        </Main>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Grid>
    </Container>
  );
};

export default HomeView;
