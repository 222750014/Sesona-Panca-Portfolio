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
export const EMAIL = "pancasesona222@gmail.com";
export const PHONE_DISPLAY = "068 420 8883";
export const PHONE_TEL = "+27684208883";
export const CV_URL = "/Sesona_Panca_CV.pdf";

/** Structured facts the assistant is allowed to state. Nothing invented. */
export const knowledgeBase = {
  identity:
    "Sesona Panca is a Software Developer and ICT professional based in Cape Town, South Africa. He completed a Diploma in ICT: Application Development at CPUT and has a broad foundation in programming, web technologies, databases, software testing and information systems. He is on a graduate programme in Data Analytics and is open to graduate and entry-level opportunities.",
  study:
    "Sesona completed a Diploma in ICT: Application Development at Cape Peninsula University of Technology (CPUT). He also earned his National Senior Certificate at Cowan High School (2017–2021).",
  bootcamp:
    "Since September 2026 he has been on a graduate programme in Data Analytics, focused on data analytics, professional development and applied AI, building practical projects such as AI-assisted web applications.",
  skills:
    "His verified technical skills include Java, Python, JavaScript, React, HTML, CSS, SQL, MySQL, MongoDB, software testing and debugging, data management, documentation, system analysis, business process improvement and information security awareness. His broader ICT capabilities include information systems, problem-solving, teamwork, communication and Microsoft Office. His projects also include data analytics and AI work.",
  projects:
    "His projects include Creative Asset Orchestrator, an AI-assisted web application built with Lovable, and Sentiment Lab, a sentiment analysis and data insights project. Together they show practical web application development and his additional work in data and AI. More programme projects are on the way.",
  certificates:
    "Sesona has verified Coursera credentials from Google, Google Cloud, IBM and DeepLearning.AI, including the five-course Google AI Essentials Specialization, Introduction to Generative AI, AI For Everyone, and Generative AI: Prompt Engineering Basics.",
  github: `You can explore his code on GitHub: ${GITHUB_URL}`,
  location: "Sesona is based in Cape Town, South Africa.",
  contact: `You can email Sesona at ${EMAIL} or call ${PHONE_DISPLAY}. The contact form at the bottom of the page works too.`,
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
  "I can answer questions about Sesona's ICT background, Application Development diploma, software development skills, certificates, projects and GitHub. Try one of the quick questions below.";

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
