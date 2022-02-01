import styled, { css } from 'styled-components'

const placeholderStyles = css`
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: var(--accents-3);
`

export const Container = styled.div`
  width: calc(100% - 48px);
  margin-left: auto;
  margin-right: auto;
`

export const Grid = styled.div`
  display: grid;
  padding-top: 153px;
  max-width: 918px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;x1
  grid-template-rows: 1fr auto;
`

export const Footer = styled.footer`
  grid-row: 2;
  margin-top: 100px;
  padding: 10px;
  ${placeholderStyles};
`

export const Main = styled.main`
  grid-row: 1;
  display: flex;
  position: relative;
`

export const Nav = styled.nav`
  background-color: green;
  width: 90px;
  position: absolute;
  left: 0;
  ${placeholderStyles};
`

export const Article = styled.article`
  width: 100%;
`

export const WrittenContent = styled.div`
  width: calc(100% - 119px);
  margin-left: auto;
`

export const Header = styled.header`
`

export const Aside = styled.aside`
  max-width: 918px;
  height: 396px;
  margin: 60px 0;
  ${placeholderStyles};
`
