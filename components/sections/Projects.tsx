import { Folder } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col items-center justify-center px-6"
    >
      <div className="w-full max-w-4xl">
        <div className="flex items-center gap-3 mb-10">
          <Folder size={24} className="text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Projects</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="glass rounded-xl p-6 transition-colors glass-hover"
            >
              <h3 className="text-lg font-semibold text-foreground">
                Project {i}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A brief description of this project and the technologies used.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
