import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer>
      <p className="flex gap-[2ch] justify-center flex-wrap">
        <a
          href="mailto:moonkum.aranchai@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center"
        >
          <Mail className="w-4 h-4" />
          Get in touch
        </a>
        <a
          href="https://github.com/AranchaiMoonkum"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center"
        >
          <Github className="w-4 h-4" />
          Aing
        </a>
      </p>
    </footer>
  );
}
