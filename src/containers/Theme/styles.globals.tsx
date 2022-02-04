import { createGlobalStyle } from "styled-components";

export const CssVariables = createGlobalStyle`
  /* CSS Variables */
  :root {
    --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --font-mono: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;

    /* Colors */
    --base: #000;
    --base-inverse: #fff;
    --foreground: #000;
    --background: #fff;
    --accents-1: #fafafa;
    --accents-2: #eaeaea;
    --accents-3: #999;
    --accents-4: #888;
    --accents-5: #666;
    --accents-6: #444;
    --accents-7: #333;
    --accents-8: #111;

    /* Other Colors */
    --code: #f81ce5;
    --border: #eaeaea;
    --selection: #fffb79;

    /* Spacing */
    --space-1: 4px;
    --space-2: 6px;
    --space-3: 8px;
    --space-4: 12px;
    --space-5: 16px;
    --space-6: 20px;
    --space-7: 24px;
    --space-8: 32px;

    /* font-size */
    --size-base: 1rem; // 16px
    --size-xs3: 0.5rem; // 8px
    --size-xs2: 0.75rem; // 12px
    --size-xs: 0.875rem; // 14px
    --size-s: 0.9375rem; // 15px
    --size-m: var(--size-base); // 16px
    --size-xl: 1.125rem; // 18px
    --size-xl2: 1.25rem; // 20px
    --size-xl3: 1.375rem; // 22px
    --size-xl4: 1.5rem; // 24px
    --size-xl5: 1.75rem; // 28px
    --size-xl6: 2.375rem; // 38px
    --size-xl7: 3rem; // 48px
    --size-xl8: 3.5rem; // 56px
    --size-xl9: 4rem; // 64px
    --size-xl10: 8rem; // 128px


    /* Values */
    --weight-normal: 400;
    --weight-semibold: 500;
    --weight-bold: 600;
    --z-index-s: 10;
    --z-index-m: 50;
    --z-index-l: 100;
    --z-index-xl: 200;
    --z-index-xl2: 400;
    --z-index-xl3: 600;
    --z-index-xl4: 800;
    --z-index-super: 9999;
    --radius: 5px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: var(--background);
    color: var(--base);
  }
  html {
    font-size: 16px;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    min-height: 100%;
    position: relative;
    overflow-x: hidden;
    font-family: var(--font-sans);
  }
  #__next {
    overflow-x: hidden;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    text-rendering: geometricPrecision;
    -webkit-tap-highlight-color: transparent;
  }
  p,
  small {
    font-weight: 400;
    color: inherit;
    letter-spacing: -0.005625rem;
    font-family: var(--font-sans);
  }
  p {
    margin: var(--space-4x) 0;
    font-size: var(--size-xl2);
    line-height: 1.625em;
  }
  small {
    margin: 0;
    line-height: 1.5;
    font-size: 0.875rem;
  }
  b {
    font-weight: var(--weight-bold);
    background-color: #F3FF00;
    padding: 0 4px;
    border-radius: var(--radius);
  }
  span {
    font-size: inherit;
    color: inherit;
    font-weight: inherit;
  }
  img {
    max-width: 100%;
  }
  a {
    cursor: pointer;
    font-size: inherit;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-box-align: center;
    align-items: center;
    color: var(--base);
    text-decoration: underline;
  }
  a:hover {
    text-decoration: underline;
  }
  ul,
  ol {
    padding: 0;
    list-style-type: none;
    margin: 8px 8px 8px 16px;
    color: var(--base);
  }
  ol {
    list-style-type: decimal;
  }
  li {
    margin-bottom: 0.625rem;
    font-size: 1em;
    line-height: 1.625em;
  }
  ul li:before {
    content: '–';
    display: inline-block;
    color: var(--accents-4);
    position: absolute;
    margin-left: -0.9375rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    margin: 0 0 0.625rem 0;
  }
  h1 {
    font-size: 2.5rem;
    letter-spacing: -0.066875rem;
    line-height: 1.5;
    font-weight: 700;
  }
  h2 {
    font-size: 1.75rem;
    letter-spacing: -0.020625rem;
    font-weight: 600;
  }
  h3 {
    font-size: 1.5rem;
    letter-spacing: -0.029375rem;
    font-weight: 600;
  }
  h4 {
    font-size: 1.25rem;
    letter-spacing: -0.020625rem;
    font-weight: 600;
  }
  h5 {
    font-size: 1rem;
    letter-spacing: -0.01125rem;
    font-weight: 600;
  }
  h6 {
    font-size: 0.875rem;
    letter-spacing: -0.005625rem;
    font-weight: 600;
  }
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
  }
  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
  }
  code {
    color: var(--code);
    font-family: var(--font-mono);
    font-size: 0.9em;
    white-space: pre-wrap;
  }
  code:before,
  code:after {
    content: '\`';
  }
  pre {
    border: 1px solid var(--accents-2);
    border-radius: var(--radius);
    padding: calc(16px * 0.75) 16px;
    margin: 16px 0;
    font-family: var(--font-mono);
    white-space: pre;
    overflow: auto;
    line-height: 1.5;
    text-align: left;
    font-size: 0.875rem;
    -webkit-overflow-scrolling: touch;
  }
  pre code {
    color: var(--base);
    font-size: 0.8125rem;
    line-height: 1.25rem;
    white-space: pre;
  }
  pre code:before,
  pre code:after {
    display: none;
  }
  pre :global(p) {
    margin: 0;
  }
  pre::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    background: transparent;
  }
  hr {
    border-color: var(--accents-2);
  }
  details {
    background-color: var(--accents-1);
    border: none;
  }
  details:focus,
  details:hover,
  details:active {
    outline: none;
  }
  summary {
    cursor: pointer;
    user-select: none;
    list-style: none;
    outline: none;
  }
  summary::-webkit-details-marker,
  summary::before {
    display: none;
  }
  summary::-moz-list-bullet {
    font-size: 0;
  }
  summary:focus,
  summary:hover,
  summary:active {
    outline: none;
    list-style: none;
  }
  blockquote {
    padding: calc(0.667 * 16px) 16px;
    color: var(--accents-5);
    background-color: var(--accents-1);
    border-radius: var(--radius);
    margin: 1.5rem 0;
    border: 1px solid var(--border);
  }
  blockquote :global(*:first-child) {
    margin-top: 0;
  }
  blockquote :global(*:last-child) {
    margin-bottom: 0;
  }
  ::selection {
    background-color: var(--selection);
    color: var(--base);
  }
`;
