import React from "react";
import { NavContainer } from "./styles";
import { GithubLogo } from "./GithubLogo";
import { Button } from "..";

export const SideNav = () => {
  return (
    <NavContainer>
      <a>
        <Button>Contact</Button>
      </a>
      <a>
        <Button>Notes</Button>
      </a>
      <a>
        <Button>FAQ</Button>
      </a>
      <a>
        <Button>
          <GithubLogo />
        </Button>
      </a>
    </NavContainer>
  );
};

export default SideNav;
