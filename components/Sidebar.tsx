"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Github, Linkedin, Twitter } from "lucide-react";
import { StaggeredMenu } from "./StaggeredMenu";

const sections = ["hero", "projects", "about", "contact"];

const menuItems = [
  { label: "Home", link: "#hero", ariaLabel: "Go to Home" },
  { label: "Projects", link: "#projects", ariaLabel: "Go to Projects" },
  { label: "About", link: "#about", ariaLabel: "Go to About" },
  { label: "Contact", link: "#contact", ariaLabel: "Go to Contact" },
  { label: "Blog", link: "/blog", ariaLabel: "Go to Blog" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com", icon: <Github size={18} /> },
  {
    label: "LinkedIn",
    link: "https://linkedin.com",
    icon: <Linkedin size={18} />,
  },
  {
    label: "Twitter",
    link: "https://twitter.com",
    icon: <Twitter size={18} />,
  },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("#hero");

  // Track active section on homepage using IntersectionObserver
  useEffect(() => {
    if (pathname !== "/") {
      setActiveLink(pathname);
      return;
    }

    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${id}`);
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [pathname]);

  const handleItemClick = useCallback(
    (item: { label: string; link: string }) => {
      const { link } = item;

      // Anchor link (e.g. #projects)
      if (link.startsWith("#")) {
        if (pathname !== "/") {
          // Navigate to homepage first, then scroll
          router.push("/" + link);
        } else {
          const el = document.getElementById(link.slice(1));
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
        setActiveLink(link);
        return;
      }

      // Internal page link (e.g. /blog)
      router.push(link);
      setActiveLink(link);
    },
    [pathname, router]
  );

  return (
    <StaggeredMenu
      position="left"
      colors={["rgba(255,255,255,0.06)", "rgba(255,255,255,0.03)"]}
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={false}
      isFixed={true}
      menuButtonColor="#e6edf3"
      openMenuButtonColor="#e6edf3"
      accentColor="#3fb950"
      changeMenuColorOnOpen={false}
      closeOnClickAway={true}
      onItemClick={handleItemClick}
      activeItem={activeLink}
    />
  );
}
