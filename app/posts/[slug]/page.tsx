import { Footer } from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { format } from "date-fns";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: post.meta.title,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article className="container max-w-4xl mx-auto px-6 py-12">
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

      <Footer />
    </article>
  );
}
