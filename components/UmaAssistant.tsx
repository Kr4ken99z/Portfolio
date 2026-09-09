"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  X,
  Send,
  ExternalLink,
  Bot,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "uma";
  text: string;
  timestamp: string;
  links?: { label: string; url: string; external?: boolean }[];
}

const PRESET_QUESTIONS = [
  {
    label: "Top Projects",
    prompt: "What are Koustav's most notable projects?",
  },
  {
    label: "Core Tech Stack",
    prompt: "What technologies and frameworks does Koustav specialize in?",
  },
  {
    label: "Background & Education",
    prompt: "Tell me about Koustav's engineering and academic background.",
  },
  {
    label: "Hiring & Contact",
    prompt: "Is Koustav open to full-time roles and how can I contact him?",
  },
];

function getUmaAnswer(query: string): { text: string; links?: { label: string; url: string; external?: boolean }[] } {
  const q = query.toLowerCase();

  if (
    q.includes("project") ||
    q.includes("work") ||
    q.includes("built") ||
    q.includes("notable")
  ) {
    return {
      text: `Koustav has engineered several production-grade full-stack and AI applications:\n\n1. **UMA AI Chatbot** — Conversational AI powered by Gemini 1.5, Node.js, and streaming SSE responses.\n2. **LocalX (Hyperlocal Platform)** — Scalable community network with real-time discovery and geospatial routing.\n3. **Expense Tracker** — Full-stack finance management platform with interactive analytics and REST architecture.\n4. **JobX** — Automated job-matching ecosystem with ATS-friendly filtering.\n5. **Smart City Lighting** — IoT-driven energy optimization using embedded microcontrollers.`,
      links: [
        { label: "View All Projects", url: "#projects" },
        { label: "Launch Full UMA App ↗", url: "https://uma-chatbot.vercel.app", external: true },
      ],
    };
  }

  if (
    q.includes("stack") ||
    q.includes("skill") ||
    q.includes("technolog") ||
    q.includes("language") ||
    q.includes("tool")
  ) {
    return {
      text: `Koustav is a full-stack software engineer with expertise across:\n\n• **Languages:** TypeScript, JavaScript, Python, C, Java, SQL\n• **Frontend:** Next.js 15, React 19, Tailwind CSS, Redux, HTML5/CSS3\n• **Backend & APIs:** Node.js, Express.js, RESTful API architecture, SSE streaming\n• **Databases:** PostgreSQL, MongoDB, MySQL\n• **DevOps & Tools:** Docker, Git, GitHub, Postman, Vercel\n• **Hardware:** Embedded IoT & Arduino microcontroller interfacing.`,
      links: [{ label: "Inspect Tech Stack", url: "#stack" }],
    };
  }

  if (
    q.includes("background") ||
    q.includes("education") ||
    q.includes("college") ||
    q.includes("degree") ||
    q.includes("study") ||
    q.includes("about")
  ) {
    return {
      text: `Koustav is pursuing his **B.Tech in Electronics and Communication Engineering (ECE)** at **Academy of Technology** ('22–'26).\n\nHis engineering foundation bridges low-level hardware architecture with modern full-stack web systems and scalable REST APIs. He also holds credentials in IoT, embedded systems, and software engineering.`,
      links: [
        { label: "View Education Details", url: "#education" },
        { label: "Read Bio", url: "#about" },
      ],
    };
  }

  if (
    q.includes("hire") ||
    q.includes("contact") ||
    q.includes("job") ||
    q.includes("role") ||
    q.includes("email") ||
    q.includes("reach") ||
    q.includes("open")
  ) {
    return {
      text: `Yes! Koustav is **actively open to full-stack software engineering and developer opportunities**.\n\nYou can reach him directly at:\n• **Email:** koustavmondal9641@gmail.com\n• **GitHub:** github.com/Kr4ken99z\n• **LinkedIn:** linkedin.com/in/koustav07/`,
      links: [
        { label: "Send Message Now", url: "#contact" },
        {
          label: "Compose in Gmail ↗",
          url: "https://mail.google.com/mail/?view=cm&to=koustavmondal9641@gmail.com",
          external: true,
        },
      ],
    };
  }

  if (
    q.includes("uma") ||
    q.includes("who are you") ||
    q.includes("what is uma")
  ) {
    return {
      text: `I am **UMA (Unified Multimodal Assistant)**, Koustav's flagship AI project. I am integrated directly into his portfolio to help recruiters, engineering leads, and collaborators explore his technical accomplishments in real time.`,
      links: [
        { label: "Launch Full UMA Web App ↗", url: "https://uma-chatbot.vercel.app", external: true },
        { label: "View GitHub Source ⑂", url: "https://github.com/Kr4ken99z/Uma-Chatbot", external: true },
      ],
    };
  }

  // General fallback
  return {
    text: `Thanks for asking! Koustav is a full-stack engineer and B.Tech ECE undergraduate who builds scalable web platforms, AI systems, and embedded hardware. You can ask me about his **projects**, **tech stack**, **education**, or **how to contact/hire him**.`,
    links: [
      { label: "Browse Projects", url: "#projects" },
      { label: "Direct Contact", url: "#contact" },
    ],
  };
}

interface UmaAssistantProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function UmaAssistant({ isOpen, onClose }: UmaAssistantProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isAssistantOpen = isOpen !== undefined ? isOpen : internalOpen;

  const handleClose = () => {
    if (onClose) onClose();
    setInternalOpen(false);
  };

  useEffect(() => {
    const handleOpenEvent = () => setInternalOpen(true);
    (window as any).openUma = handleOpenEvent;
    window.addEventListener("open-uma", handleOpenEvent);
    return () => {
      delete (window as any).openUma;
      window.removeEventListener("open-uma", handleOpenEvent);
    };
  }, []);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      sender: "uma",
      text: "Hello! I am UMA, Koustav's AI assistant. Ask me anything about his technical projects, architecture stack, academic background, or availability for software engineering roles.",
      timestamp: "Just now",
      links: [
        { label: "View Projects", url: "#projects" },
        { label: "Contact Koustav", url: "#contact" },
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAssistantOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isAssistantOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isAssistantOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAssistantOpen]);

  const handleSend = (textToSend?: string) => {
    const userQuery = textToSend || input;
    if (!userQuery.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: userQuery.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getUmaAnswer(userQuery);
      const umaMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "uma",
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        links: response.links,
      };
      setMessages((prev) => [...prev, umaMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: "uma",
        text: "Conversation refreshed. What else would you like to know about Koustav?",
        timestamp: "Just now",
      },
    ]);
  };

  if (!isAssistantOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={handleClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-xl h-[85vh] max-h-[640px] flex flex-col rounded-2xl bg-surface-container-low border border-black/15 dark:border-outline-variant/60 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Assistant Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-black/10 dark:border-outline-variant/40 bg-surface-container/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-mono text-xs sm:text-sm font-semibold tracking-tight text-on-surface">
                  UMA Assistant
                </h3>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  Online
                </span>
              </div>
              <p className="font-mono text-[10px] text-text-muted">
                Portfolio AI Companion // Gemini Architecture
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleReset}
              title="Reset conversation"
              className="p-1.5 rounded-lg hover:bg-surface-container text-text-muted hover:text-on-surface transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleClose}
              title="Close (Esc)"
              className="p-1.5 rounded-lg hover:bg-surface-container text-text-muted hover:text-on-surface transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 font-mono text-xs sm:text-[13px]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.sender === "uma" && (
                <div className="w-6 h-6 rounded-md bg-surface-container border border-outline-variant/60 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[78%] rounded-xl px-3.5 py-2.5 leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-on-surface text-background font-medium"
                    : "bg-surface-container border border-black/10 dark:border-outline-variant/40 text-on-surface"
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.text}</div>

                {msg.links && msg.links.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-black/10 dark:border-outline-variant/30 flex flex-wrap gap-2">
                    {msg.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        onClick={() => {
                          if (!link.external) handleClose();
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-low border border-black/15 dark:border-outline-variant/60 text-[11px] font-mono text-on-surface hover:text-primary hover:border-primary/50 transition-colors"
                      >
                        <span>{link.label}</span>
                        {link.external ? (
                          <ExternalLink className="w-2.5 h-2.5" />
                        ) : (
                          <ArrowRight className="w-2.5 h-2.5" />
                        )}
                      </a>
                    ))}
                  </div>
                )}

                <span
                  className={`block text-[9px] mt-1 opacity-50 ${
                    msg.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2.5 items-center text-text-muted">
              <div className="w-6 h-6 rounded-md bg-surface-container border border-outline-variant/60 flex items-center justify-center shrink-0 text-primary">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container border border-black/10 dark:border-outline-variant/40">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.15s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.3s]"></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompt Chips */}
        <div className="px-4 py-2 bg-surface-container/30 border-t border-black/5 dark:border-outline-variant/20 overflow-x-auto no-scrollbar flex items-center gap-1.5">
          <span className="font-mono text-[10px] text-text-muted shrink-0 mr-1">
            Try:
          </span>
          {PRESET_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSend(q.prompt)}
              className="shrink-0 font-mono text-[11px] px-2.5 py-1 rounded-full bg-surface-container-low border border-black/10 dark:border-outline-variant/40 hover:border-primary hover:text-primary text-on-surface-variant transition-colors"
            >
              {q.label}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 sm:p-4 border-t border-black/10 dark:border-outline-variant/40 bg-surface-container/50 flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Koustav..."
            className="flex-1 bg-surface-container px-3.5 py-2.5 rounded-xl border border-black/15 dark:border-outline-variant/60 font-mono text-xs sm:text-sm text-on-surface placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="p-2.5 rounded-xl bg-on-surface text-background hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity shrink-0"
            title="Send query"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
