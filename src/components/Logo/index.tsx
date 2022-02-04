import React from "react";
import Image from "next/image";
import { AvatarContainer, LogoWrapper } from "./styles";
import { AntonioSantosLogo } from "./AntonioSantosLogo";

export const Logo = () => {
  return (
    <LogoWrapper>
      <AvatarContainer>
        <Image src="/antonio-santos.png" alt="me" width="30" height="30" />
      </AvatarContainer>
      <AntonioSantosLogo />
    </LogoWrapper>
  );
};

export default Logo;
