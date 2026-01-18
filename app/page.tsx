import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="container max-w-4xl mx-auto px-6 py-16">
      <section className="grid grid-cols-1 gap-4">
        {posts.map((p) => {
          const postDate = new Date(p.meta.date);
          return (
            <article key={p.slug}>
              <div className="flex flex-col">
                <time
                  dateTime={p.meta.date}
                  className="text-muted-foreground text-xl"
                >
                  {new Intl.DateTimeFormat('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  }).format(postDate)}
                </time>
                <Link
                  href={`/posts/${p.slug}`}
                  className="text-primary text-2xl md:text-3xl tracking-tight hover:underline"
                >
                  {p.meta.title}
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
