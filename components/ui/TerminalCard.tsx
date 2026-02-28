"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import "./TerminalCard.css";

interface TerminalLine {
  type: "input" | "output";
  content: string;
}

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  about     - Who is Aman Khan?
  skills    - Tech stack & skills
  contact   - How to reach me
  projects  - View my work
  clear     - Clear terminal
  help      - Show this message`,
  about: `Hey! I'm Aman Khan.
A developer passionate about building
clean, performant, and visually
compelling web experiences.`,
  skills: `Frontend  : React, Next.js, TypeScript
Backend   : Node.js, Python, Go
Database  : PostgreSQL, MongoDB, Redis
DevOps    : Docker, AWS, Kubernetes
Tools     : Git, Linux, Figma`,
  contact: `Email    : amankhan@example.com
GitHub   : github.com/aman-khan
LinkedIn : linkedin.com/in/aman-khan`,
  projects: `Run 'View Projects' button on the left
or scroll down to the projects section.`,
};

interface TerminalCardProps {
  user?: string;
  location?: string;
  className?: string;
}

export default function TerminalCard({
  user = "aman@dev",
  location = "~",
  className = "",
}: TerminalCardProps) {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: "Welcome to my portfolio! Type 'help' for commands." },
  ]);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  const handleSubmit = useCallback(() => {
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", content: trimmed },
    ];

    if (trimmed === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    const response = COMMANDS[trimmed];
    if (response) {
      newLines.push({ type: "output", content: response });
    } else {
      newLines.push({
        type: "output",
        content: `command not found: ${trimmed}. Type 'help' for available commands.`,
      });
    }

    setLines(newLines);
    setInput("");
  }, [input, lines]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={`terminal-container ${className}`} onClick={focusInput}>
      <div className="terminal-toolbar">
        <div className="terminal-butt">
          <span className="terminal-dot terminal-dot-red" />
          <span className="terminal-dot terminal-dot-yellow" />
          <span className="terminal-dot terminal-dot-green" />
        </div>
        <p className="terminal-title">{user}: {location}</p>
        <div className="terminal-add-tab">+</div>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {lines.map((line, i) => (
          <div key={i} className="terminal-line">
            {line.type === "input" ? (
              <div className="terminal-prompt">
                <span className="terminal-prompt-user">{user}:</span>
                <span className="terminal-prompt-location">{location}</span>
                <span className="terminal-prompt-bling">$ {line.content}</span>
              </div>
            ) : (
              <pre className="terminal-output">{line.content}</pre>
            )}
          </div>
        ))}
        {/* Active input line */}
        <div className="terminal-prompt terminal-input-line">
          <span className="terminal-prompt-user">{user}:</span>
          <span className="terminal-prompt-location">{location}</span>
          <span className="terminal-prompt-dollar">$</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
