"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

export function Header() {
  const location = usePathname();

  const isActive = useCallback((href: string) => location === href, [location]);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container max-w-4xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-2xl tracking-tight hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            aranchai
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
                isActive("/") ? "text-primary" : "text-muted-foreground",
              )}
            >
              Writing
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
                isActive("/about") ? "text-primary" : "text-muted-foreground",
              )}
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
