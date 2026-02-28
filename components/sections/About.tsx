import { User } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center px-6"
    >
      <div className="w-full max-w-3xl">
        <div className="flex items-center gap-3 mb-10">
          <User size={24} className="text-primary" />
          <h2 className="text-3xl font-bold text-foreground">About</h2>
        </div>
        <div className="glass rounded-xl p-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hello! I&apos;m Aman Khan — a developer passionate about building
            clean, performant, and visually compelling web experiences. I enjoy
            working across the stack, from crafting pixel-perfect interfaces to
            architecting scalable backends.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open source, or writing about what
            I&apos;ve learned.
          </p>
        </div>
      </div>
    </section>
  );
}
