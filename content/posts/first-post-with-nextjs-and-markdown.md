---
title: "First post with Next.js + Markdown"
date: "2026-01-05"
---

Hello! This is my first post in my personal blog and I want to show the process of creating a blog website with Next.js and Markdown which is likely new for me to create a web blog.

## Why Next.js?

First of all, I haven't created a web blog before. But I'm good at Next.js so It's a good idea to start with something I like first.
So I have to find technologies to build my website first. I have decided to do
**static site generator (SSG)** and **Next.js** so I can use **Markdown** to write my blog posts and do dynamic routes for my pages.

After I have planned my technologies, this is my list of technologies I'm going to use:

* Next.js
    * Static site generator (SSG)
    * File-based routing `/posts/[slug]`
    * SEO via `generateMetadata`
* Markdown
    * Frontmatter for metadata (title, date)
    * Syntax highlighting

And this is my list of dependencies I have installed:

* date-fns
* gray-matter
* rehype-pretty-code
* rehype-stringify
* remark-parse
* remark-rehype
* unified
* shiki
* @tailwind/typography

So I contain my content in `content/posts` folder and I have to create a page for each post.
I'm going to use `generateStaticParams` and `generateMetadata` to generate pages for my posts.

Firstly, I have to create a type for my post metadata first: 

```ts
export type PostMeta = {
  title: string;
  date: string;
};
```

Then I have to create a function to get all posts:

```ts
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
```

Then I have to create a function to get a post by slug:

```ts
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
```

Finally, I have to create a page for each post:

```tsx
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article className="container max-w-4xl mx-auto px-6 py-16">
      <header className="mb-8 flex flex-col gap-1">
        <h1 className="text-4xl md:text-5xl text-primary tracking-tight">
          {post.meta.title}
        </h1>

        <time
          dateTime={post.meta.date}
          className="text-xl text-muted-foreground"
        >
          {format(new Date(post.meta.date), "MMMM d, yyyy")}
        </time>
      </header>

      <div className="prose md:prose-base lg:prose-lg">
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </div>
    </article>
  );
}
```

so after I have created a page for each post, I have to create a page for my blog homepage.

I decided to make it look so simple and easy to use.

```tsx
export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div className="container max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl text-primary tracking-tight">
        Blog
      </h1>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="text-xl text-muted-foreground"
            >
              {post.meta.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

After all, we get a simple blog website with Next.js and Markdown.
