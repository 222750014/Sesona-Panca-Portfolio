/**
 * Portfolio assistant knowledge + reply engine.
 *
 * Today this runs fully in the browser with rule-based matching over a
 * structured knowledge base. It is intentionally isolated behind
 * `getAssistantReply()` so it can later be swapped for a server function that
 * calls an LLM API. API keys must NEVER live in this file (it ships to the
 * browser) — a future implementation should call a server endpoint instead.
 */

export type AssistantMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

export const GITHUB_URL = "https://github.com/222750014";

/** Structured facts the assistant is allowed to state. Nothing invented. */
export const knowledgeBase = {
  identity:
    "Sesona Panca is an ICT Applications Development graduate based in Cape Town, South Africa, born in June 2004. He builds practical skills in artificial intelligence, prompt engineering, conversational systems, Python and software development.",
  study:
    "Sesona completed a Diploma in ICT: Application Development at Cape Peninsula University of Technology. He also earned his National Senior Certificate at Cowan High School from 2017 to 2021.",
  bootcamp:
    "He is completing a September 2026 Artificial Intelligence Bootcamp covering AI Foundations, Prompt Engineering, Applied AI Projects and Portfolio Development — across four weeks: AI foundations and chatbot development, content generation, sentiment analysis, and an end-to-end industry AI solution.",
  skills:
    "His skills span AI & Machine Learning (Generative AI, LLMs, Conversational AI), Prompt Engineering (role/context/constraints/output design, few-shot prompting, optimisation and testing), Programming (Python, JavaScript, HTML, CSS), Data (analysis, Pandas, NumPy, visualisation) and Software Development.",
  projects:
    "His portfolio includes the AI Chatbot (Week 1, built), plus the AI Content Generator, Sentiment Analysis Tool and Industry AI Solution — those three are coming soon.",
  certificates:
    "Sesona has verified Coursera credentials from Google, Google Cloud, IBM and DeepLearning.AI. They include the five-course Google AI Essentials Specialization, Introduction to AI, Maximize Productivity With AI Tools, Discover the Art of Prompting, Use AI Responsibly, Stay Ahead of the AI Curve, Introduction to Generative AI, AI For Everyone, and Generative AI: Prompt Engineering Basics.",
  github: `You can explore his code and learning journey on GitHub: ${GITHUB_URL}`,
  location: "Sesona is based in Cape Town, South Africa.",
  contact: `The best way to reach his work is through GitHub: ${GITHUB_URL}. No email or phone number is listed here.`,
} as const;

type Rule = { keywords: string[]; answer: string };

const rules: Rule[] = [
  { keywords: ["who", "about", "yourself", "sesona is"], answer: knowledgeBase.identity },
  { keywords: ["study", "studied", "qualification", "diploma", "education", "degree"], answer: knowledgeBase.study },
  { keywords: ["bootcamp", "journey", "september", "course", "week"], answer: knowledgeBase.bootcamp },
  { keywords: ["certificate", "certification", "coursera", "credential", "google", "ibm"], answer: knowledgeBase.certificates },
  { keywords: ["skill", "tech", "stack", "know", "python", "prompt"], answer: knowledgeBase.skills },
  { keywords: ["project", "portfolio", "built", "chatbot", "work"], answer: knowledgeBase.projects },
  { keywords: ["github", "code", "repo"], answer: knowledgeBase.github },
  { keywords: ["where", "location", "based", "live", "city"], answer: knowledgeBase.location },
  { keywords: ["contact", "email", "hire", "reach", "phone"], answer: knowledgeBase.contact },
];

const fallback =
  "I can answer questions about Sesona's background, his ICT Application Development diploma, certificates, September 2026 AI Bootcamp, skills, projects and GitHub. Try one of the quick questions below.";

export const quickQuestions = [
  "Who is Sesona?",
  "What did Sesona study?",
  "What certificates has he earned?",
  "What are his skills?",
  "What is his GitHub?",
];

/**
 * Single seam for the reply source. Swap the body for a `createServerFn` call
 * to an LLM when ready — the UI does not need to change.
 */
export async function getAssistantReply(input: string): Promise<string> {
  const q = input.toLowerCase();
  const match = rules.find((rule) => rule.keywords.some((k) => q.includes(k)));
  return match ? match.answer : fallback;
}
