import { below } from "@/utils";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export const SvgGithubLogo = styled.svg<SpaceProps>`
  ${space};
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;

  > a {
    margin-bottom: 4px;
  }

  ${below.md`
    flex-direction: row;
  `}
`;
