import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
export default function AboutPage() {
  return (
    <>
      <article className="container max-w-4xl mx-auto px-6 py-12">
        <div className="flex gap-2">
          <Image src="/profile.jpg" alt="Profile" width={128} height={128} />
          <section>
            <h1 className="text-4xl md:text-5xl text-primary tracking-tight">
              About
            </h1>

            <div className="prose md:prose-base lg:prose-lg">
              <p>
                I am Aranchai Moonkum, a software engineer who loves to code and
                building things. You can find me on{" "}
                <a href="https://github.com/AranchaiMoonkum" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>{" "}
                and{" "}
                <a
                  href="https://www.linkedin.com/in/aranchai-moonkum-57b60832b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                . Also, you can find my resume <Link href="/resume">here</Link>.
              </p>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </>
  );
}
