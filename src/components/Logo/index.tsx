import React from "react";
import Image from "next/image";
import { AvatarContainer, LogoWrapper } from "./styles";
import { AntonioSantosLogo } from "./AntonioSantosLogo";
import { SpaceProps } from "styled-system";
import Link from "next/link";

export const Logo = (props: SpaceProps) => {
  return (
    <Link href="/" passHref>
      <LogoWrapper {...props}>
        <AvatarContainer>
          <Image src="/antonio-santos.png" alt="me" width="30" height="30" />
        </AvatarContainer>
        <AntonioSantosLogo />
      </LogoWrapper>
    </Link>
  );
};

export default Logo;
