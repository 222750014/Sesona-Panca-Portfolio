import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Journey } from "@/components/portfolio/Journey";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Chatbot } from "@/components/portfolio/Chatbot";
import { CaseStudy } from "@/components/portfolio/CaseStudy";
import { Experience } from "@/components/portfolio/Experience";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Sesona Panca | Data Analytics, AI Prompt Engineering & ICT";
const description =
  "Portfolio of Sesona Panca, a Cape Town ICT graduate on a Data Analytics graduate programme, with skills in SQL, Python, React and AI prompt engineering.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Chatbot />
        <CaseStudy />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
