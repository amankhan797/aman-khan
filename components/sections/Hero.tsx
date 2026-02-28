"use client";

import { ArrowDown } from "lucide-react";
import { LogoLoop } from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiGit,
  SiGithub,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiLinux,
  SiRedis,
  SiGraphql,
  SiAngular,
  SiVuedotjs,
  SiSvelte,
  SiExpress,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiFirebase,
  SiSupabase,
  SiAmazonwebservices,
  SiKubernetes,
  SiNginx,
  SiJest,
  SiCypress,
  SiWebpack,
  SiVite,
  SiPrisma,
  SiMysql,
  SiSqlite,
  SiElectron,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiRust,
  SiGo,
  SiCplusplus,
  SiPhp,
  SiLaravel,
  SiRuby,
  SiSass,
  SiBootstrap,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiJenkins,
  SiTerraform,
  SiGrafana,
  SiElasticsearch,
  SiRabbitmq,
  SiApachekafka,
  SiSocketdotio,
  SiStripe,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const s = 28;

const techLogos = [
  // Frontend
  { node: <SiReact size={s} color="#61DAFB" title="React" /> },
  { node: <SiNextdotjs size={s} color="#ffffff" title="Next.js" /> },
  { node: <SiAngular size={s} color="#DD0031" title="Angular" /> },
  { node: <SiVuedotjs size={s} color="#4FC08D" title="Vue.js" /> },
  { node: <SiSvelte size={s} color="#FF3E00" title="Svelte" /> },
  { node: <SiTailwindcss size={s} color="#06B6D4" title="Tailwind CSS" /> },
  { node: <SiSass size={s} color="#CC6699" title="Sass" /> },
  { node: <SiBootstrap size={s} color="#7952B3" title="Bootstrap" /> },

  // Languages
  { node: <SiTypescript size={s} color="#3178C6" title="TypeScript" /> },
  { node: <SiJavascript size={s} color="#F7DF1E" title="JavaScript" /> },
  { node: <SiPython size={s} color="#3776AB" title="Python" /> },
  { node: <SiRust size={s} color="#ffffff" title="Rust" /> },
  { node: <SiGo size={s} color="#00ADD8" title="Go" /> },
  { node: <SiCplusplus size={s} color="#00599C" title="C++" /> },
  { node: <FaJava size={s} color="#ED8B00" title="Java" /> },
  { node: <SiPhp size={s} color="#777BB4" title="PHP" /> },
  { node: <SiRuby size={s} color="#CC342D" title="Ruby" /> },
  { node: <SiKotlin size={s} color="#7F52FF" title="Kotlin" /> },
  { node: <SiSwift size={s} color="#F05138" title="Swift" /> },

  // Backend & Frameworks
  { node: <SiNodedotjs size={s} color="#5FA04E" title="Node.js" /> },
  { node: <SiExpress size={s} color="#ffffff" title="Express" /> },
  { node: <SiDjango size={s} color="#092E20" title="Django" /> },
  { node: <SiFlask size={s} color="#ffffff" title="Flask" /> },
  { node: <SiFastapi size={s} color="#009688" title="FastAPI" /> },
  { node: <SiLaravel size={s} color="#FF2D20" title="Laravel" /> },
  { node: <SiGraphql size={s} color="#E10098" title="GraphQL" /> },
  { node: <SiSocketdotio size={s} color="#ffffff" title="Socket.io" /> },

  // Databases
  { node: <SiMongodb size={s} color="#47A248" title="MongoDB" /> },
  { node: <SiPostgresql size={s} color="#4169E1" title="PostgreSQL" /> },
  { node: <SiMysql size={s} color="#4479A1" title="MySQL" /> },
  { node: <SiSqlite size={s} color="#003B57" title="SQLite" /> },
  { node: <SiRedis size={s} color="#FF4438" title="Redis" /> },
  { node: <SiPrisma size={s} color="#2D3748" title="Prisma" /> },
  { node: <SiElasticsearch size={s} color="#005571" title="Elasticsearch" /> },

  // Mobile
  { node: <SiFlutter size={s} color="#02569B" title="Flutter" /> },
  { node: <SiElectron size={s} color="#47848F" title="Electron" /> },

  // Cloud & DevOps
  { node: <SiDocker size={s} color="#2496ED" title="Docker" /> },
  { node: <SiKubernetes size={s} color="#326CE5" title="Kubernetes" /> },
  { node: <SiAmazonwebservices size={s} color="#FF9900" title="AWS" /> },
  { node: <SiFirebase size={s} color="#FFCA28" title="Firebase" /> },
  { node: <SiSupabase size={s} color="#3FCF8E" title="Supabase" /> },
  { node: <SiVercel size={s} color="#ffffff" title="Vercel" /> },
  { node: <SiNetlify size={s} color="#00C7B7" title="Netlify" /> },
  { node: <SiHeroku size={s} color="#430098" title="Heroku" /> },
  { node: <SiNginx size={s} color="#009639" title="Nginx" /> },
  { node: <SiJenkins size={s} color="#D24939" title="Jenkins" /> },
  { node: <SiTerraform size={s} color="#844FBA" title="Terraform" /> },
  { node: <SiGrafana size={s} color="#F46800" title="Grafana" /> },
  { node: <SiRabbitmq size={s} color="#FF6600" title="RabbitMQ" /> },
  { node: <SiApachekafka size={s} color="#231F20" title="Kafka" /> },

  // Tools
  { node: <SiGit size={s} color="#F05032" title="Git" /> },
  { node: <SiGithub size={s} color="#ffffff" title="GitHub" /> },
  { node: <SiFigma size={s} color="#F24E1E" title="Figma" /> },
  { node: <SiLinux size={s} color="#FCC624" title="Linux" /> },
  { node: <SiJest size={s} color="#C21325" title="Jest" /> },
  { node: <SiCypress size={s} color="#69D3A7" title="Cypress" /> },
  { node: <SiWebpack size={s} color="#8DD6F9" title="Webpack" /> },
  { node: <SiVite size={s} color="#646CFF" title="Vite" /> },
  { node: <SiStripe size={s} color="#635BFF" title="Stripe" /> },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
        Aman Khan
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Developer &bull; Designer &bull; Creator
      </p>

      <div className="mt-12 w-full max-w-2xl">
        <LogoLoop
          logos={techLogos}
          speed={60}
          gap={48}
          logoHeight={28}
          pauseOnHover
          fadeOut
          fadeOutColor="transparent"
        />
      </div>

      <a
        href="#projects"
        className="mt-10 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        Scroll down
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
