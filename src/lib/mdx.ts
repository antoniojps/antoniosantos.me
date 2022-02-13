import fs from "fs";
import path from "path";

export const POSTS_PATH = path.join(process.cwd(), "src/data/notes");
export const DATA_PATH = path.join(process.cwd(), "src/data");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
