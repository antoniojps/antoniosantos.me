import React from "react";
import { Grid, Container, Main, Article, Nav, FooterWrapper } from "./styles";
import { Footer, SideNav } from "../../components";
import { BaseLayoutProps } from "./types";

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Container>
      <Grid>
        <Main>
          <Nav>
            <SideNav />
          </Nav>
          <Article>{children}</Article>
        </Main>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Grid>
    </Container>
  );
};

export default BaseLayout;
