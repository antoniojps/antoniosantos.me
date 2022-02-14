import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export const AvatarContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const LogoWrapper = styled.a<SpaceProps>`
  display: flex;
  align-items: center;
  ${space};
`;
