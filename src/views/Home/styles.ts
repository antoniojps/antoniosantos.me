import { below } from "@/utils";
import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 48px);
  margin-left: auto;
  margin-right: auto;

  ${below.md`
    width: 100%;
  `}
`;

export const Grid = styled.div`
  display: grid;
  margin-top: 100px;
  max-width: 918px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  grid-template-rows: 1fr auto;

  ${below.md`
    margin-top: var(--space-6);
  `}
`;

export const FooterWrapper = styled.footer`
  grid-row: 2;
  margin-top: 100px;
  padding: 10px;
  ${below.md`
    padding: 0 var(--space-6);
  `}
`;

export const Main = styled.main`
  grid-row: 1;
  display: flex;
  position: relative;
  ${below.md`
    flex-direction: column;
  `}
`;

export const Nav = styled.nav`
  width: 90px;
  position: absolute;
  left: 0;

  ${below.md`
    position: initial;
    width: auto;
    padding-right: var(--space-4);
    padding-left: var(--space-4);
  `}
`;

export const Article = styled.article`
  width: 100%;
  ${below.md`
    width: auto;
    padding-right: var(--space-6);
    padding-left: var(--space-6);
  `}
`;

export const WrittenContent = styled.div`
  width: calc(100% - 119px);
  margin-left: auto;
  > * {
    max-width: 681px;
  }

  ${below.md`
    width: 100%;
    margin-right: auto;
    > * {
      max-width: 100%;
    }
  `}
`;

export const Header = styled.header``;

export const Aside = styled.aside`
  max-width: 918px;
  height: 396px;
  margin: 60px 0;
  ${below.md`
    height: auto;
    margin: 30px 0;
  `}
`;
