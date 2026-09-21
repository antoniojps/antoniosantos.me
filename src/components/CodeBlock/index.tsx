import React, { ReactNode, useRef, useState } from "react";
import { Wrapper, CopyButton } from "./styles";
import { CopyIcon } from "./CopyIcon";

interface CodeBlockProps {
  children: ReactNode;
  className?: string;
}

export const CodeBlock = ({ children, ...props }: CodeBlockProps) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const code = preRef.current?.innerText;
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard is unavailable outside https, leave the code selectable instead
    }
  };

  return (
    <Wrapper>
      <pre ref={preRef} {...props}>
        {children}
      </pre>
      <CopyButton
        type="button"
        onClick={handleCopy}
        title={copied ? "Copied" : "Copy code"}
        aria-label={copied ? "Copied to clipboard" : "Copy code to clipboard"}
      >
        <CopyIcon name={copied ? "check" : "copy"} />
      </CopyButton>
    </Wrapper>
  );
};

export default CodeBlock;
