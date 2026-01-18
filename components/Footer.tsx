import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer>
      <p className="flex gap-[2ch] justify-center flex-wrap">
        <a
          href="mailto:moonkum.aranchai@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
        >
          <Mail className="w-4 h-4" aria-hidden="true" />
          Get in touch
        </a>
        <a
          href="https://github.com/AranchaiMoonkum"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
        >
          <Github className="w-4 h-4" aria-hidden="true" />
          Aing
        </a>
      </p>
    </footer>
  );
}
