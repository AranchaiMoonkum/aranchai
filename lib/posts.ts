import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

import { transformerCopyButton } from "@rehype-pretty/transformers";

const postsDir = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  title: string;
  date: string;
};

export async function getAllPosts() {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const fullPath = path.join(postsDir, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    return {
      slug,
      meta: data as PostMeta,
    };
  });

  // Sort newest first (string ISO dates recommended)
  posts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

  return posts;
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(raw);

  const processed = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "slack-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    meta: data as PostMeta,
    contentHtml: processed.toString(),
  };
}
