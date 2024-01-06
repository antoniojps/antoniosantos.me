import React from "react";
import Link from "next/link";
import { NavContainer } from "./styles";
import { GithubLogo } from "./GithubLogo";
import { Button } from "..";

export const SideNav = () => {
  return (
    <NavContainer>
      <Button as="a" href="mailto:antoniojmsps+website@gmail.com">
        Contact
      </Button>
      <Link href="/portfolio" passHref>
        <Button as="a">Portfolio</Button>
      </Link>
      <Link href="/faq" passHref>
        <Button as="a">FAQ</Button>
      </Link>
      <a href="/antonio-santos-cv.pdf">
        <Button>CV</Button>
      </a>
      <Link href="/notes" passHref>
        <Button as="a">Notes</Button>
      </Link>
      <Button as="a" href="https://github.com/antoniojps" target="_blank" rel="noreferrer">
        <GithubLogo />
      </Button>
    </NavContainer>
  );
};

export default SideNav;
