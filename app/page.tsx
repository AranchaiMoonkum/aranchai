import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { format } from "date-fns";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="container max-w-4xl mx-auto px-6 py-16">
      <section className="grid grid-cols-1 gap-4">
        {posts.map((p) => (
          <article key={p.slug}>
            <div className="flex flex-col">
              <time
                dateTime={p.meta.date}
                className="text-muted-foreground text-xl"
              >
                {format(new Date(p.meta.date), "MMMM d, yyyy")}
              </time>
              <Link
                href={`/posts/${p.slug}`}
                className="text-primary text-2xl md:text-3xl tracking-tight hover:underline"
              >
                {p.meta.title}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
