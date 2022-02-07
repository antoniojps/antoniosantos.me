import React, { useMemo } from "react";
import { FooterContainer, FooterStart, FooterEnd, FooterEndInner, Message } from "./styles";
import { Button, Logo } from "../";
import { FooterIcon } from "./icon";

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
          <Button>
            <FooterIcon name="github" />
          </Button>
          <Button>
            <FooterIcon name="linkedin" />
          </Button>
          <Button>
            <FooterIcon name="youtube" />
          </Button>
        </FooterEndInner>
      </FooterEnd>
    </FooterContainer>
  );
};

export default Footer;
