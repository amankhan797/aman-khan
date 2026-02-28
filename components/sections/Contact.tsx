import { Mail } from "lucide-react";
import GlassButton from "@/components/ui/GlassButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center px-6"
    >
      <div className="w-full max-w-3xl text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Mail size={24} className="text-primary" />
          <h2 className="text-3xl font-bold text-foreground uppercase">
            Get in Touch
          </h2>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Have a question or want to work together? Feel free to reach out.
        </p>
        <GlassButton href="mailto:hello@amankhan.dev" variant="green">
          <Mail size={18} />
          Say Hello
        </GlassButton>
      </div>
    </section>
  );
}
