import { BookOpen } from "lucide-react";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 pt-24 pb-16">
      <div className="w-full max-w-3xl">
        <div className="flex items-center gap-3 mb-10">
          <BookOpen size={24} className="text-primary" />
          <h1 className="text-3xl font-bold text-foreground uppercase">Blog</h1>
        </div>
        <p className="text-muted-foreground mb-10">
          Thoughts, tutorials, and things I&apos;ve learned along the way.
        </p>
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <GlassCard key={i} className="p-6">
              <p className="text-xs text-muted-foreground mb-2">
                February {i * 5}, 2026
              </p>
              <h2 className="text-xl font-semibold text-foreground">
                Blog Post Title {i}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A short preview of this blog post content goes here. Click to
                read more.
              </p>
            </GlassCard>
          ))}
        </div>
        <Link
          href="/"
          className="inline-block mt-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Back to Home
        </Link>
      </div>
    </main>
  );
}
