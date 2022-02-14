import React, { useMemo } from "react";
import { FooterContainer, FooterStart, FooterEnd, FooterEndInner, Message } from "./styles";
import { Button, Logo } from "../";
import { FooterIcon } from "./Icon";

export const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <FooterContainer>
      <FooterStart>
        <Logo marginBottom={"var(--space-6)"} />
        <Message>Copyright © {year} António Santos. All rights reserved.</Message>
      </FooterStart>
      <FooterEnd>
        <FooterEndInner>
          <Button as="a" href="https://github.com/antoniojps" target="_blank" rel="noreferrer">
            <FooterIcon name="github" />
          </Button>
          <Button
            as="a"
            href="https://www.linkedin.com/in/antonio-pires-dos-santos"
            target="_blank"
            rel="noreferrer"
          >
            <FooterIcon name="linkedin" />
          </Button>
          <Button
            as="a"
            href="https://www.youtube.com/channel/UCl18p8_qTtRDIUHhcYvWAUQ"
            target="_blank"
            rel="noreferrer"
          >
            <FooterIcon name="youtube" />
          </Button>
        </FooterEndInner>
      </FooterEnd>
    </FooterContainer>
  );
};

export default Footer;
