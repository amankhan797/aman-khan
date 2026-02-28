import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center px-6"
    >
      <div className="w-full max-w-3xl text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Mail size={24} className="text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Have a question or want to work together? Feel free to reach out.
        </p>
        <a
          href="mailto:hello@amankhan.dev"
          className="inline-flex items-center gap-2 glass glass-hover rounded-full px-8 py-3 text-foreground font-medium transition-colors"
        >
          <Mail size={18} />
          Say Hello
        </a>
      </div>
    </section>
  );
}
