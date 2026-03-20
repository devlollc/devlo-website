import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildArticleSchema,
  buildHowToSchema,
} from "@/lib/seo/schema-builders";

export const metadata: Metadata = buildPageMetadata({
  title: "Voice to Content — Turn Dictation into Structured Output",
  description:
    "Set up a voice-to-content workflow in 10 minutes. Dictate ideas, get structured notes, posts, and briefs — automatically.",
  path: "/insights/voice-to-content",
  type: "article",
  datePublished: "2026-03-20",
  dateModified: "2026-03-20",
  author: "Charles Perret",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Insights", path: "/insights" },
  { name: "Voice to Content", path: "/insights/voice-to-content" },
];

const howToSteps = [
  {
    title: "Install Wispr Flow",
    description:
      "Download Wispr Flow (wispr.com). It runs in the background and transcribes everything you dictate — in any app, any language.",
  },
  {
    title: "Configure the Voice-to-Content skill",
    description:
      "Add the /vc skill to your Claude Code commands. It reads your raw dictation transcript and restructures it into the format you need.",
  },
  {
    title: "Dictate your ideas",
    description:
      "Talk naturally. Explain your thinking, describe a process, dump a brain. The transcript captures everything — messy is fine.",
  },
  {
    title: "Run the skill",
    description:
      "Type /vc in Claude Code. The skill analyzes your transcript, identifies the intent (post, brief, email, notes), and restructures the content with headings, action items, and next steps.",
  },
  {
    title: "Review and publish",
    description:
      "The output is structured, clean, and ready to use. Edit what needs editing, publish what is ready. 5 minutes of talking becomes a structured document.",
  },
];

export default function VoiceToContentPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline: "Voice to Content — Turn Dictation into Structured Output",
            description:
              "Set up a voice-to-content workflow in 10 minutes. Dictate ideas, get structured notes, posts, and briefs — automatically.",
            path: "/insights/voice-to-content",
            imagePath: "/images/CharlesPerretProfilePicture2025.webp",
            datePublished: "2026-03-20",
            dateModified: "2026-03-20",
            author: "Charles Perret",
            authorUrl: "https://www.linkedin.com/in/charlesperret-devlo/",
          }),
          buildHowToSchema("Voice to Content Setup", howToSteps),
        ]}
      />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-[#08080F] pb-16 pt-20 text-white">
        <div className="mx-auto w-full max-w-3xl px-6 text-center lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0F4EFF]">
            Insight
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight lg:text-5xl">
            Voice to Content
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
            I talk to my computer for 5 minutes. It writes structured content I
            can actually use. Here is the exact setup.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Image
              src="/images/CharlesPerretProfilePicture2025.webp"
              alt="Charles Perret"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-left text-sm">
              <p className="font-medium text-white">Charles Perret</p>
              <p className="text-white/50">March 2026 · 4 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <article className="mx-auto w-full max-w-3xl px-6 py-14 lg:px-10">
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#0D0D0D]">The problem</h2>
          <p className="text-base leading-relaxed text-[#4A4A4A]">
            You have ideas all day. In the car, on a walk, between meetings. But
            by the time you sit down to write, half of them are gone — and the
            other half feel flat on paper.
          </p>
          <p className="text-base leading-relaxed text-[#4A4A4A]">
            Voice dictation captures everything. But raw transcripts are messy,
            unstructured, and unusable. You end up with a wall of text that needs
            as much editing as writing from scratch.
          </p>
        </section>

        {/* Solution */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#0D0D0D]">The solution</h2>
          <p className="text-base leading-relaxed text-[#4A4A4A]">
            A two-tool setup that turns raw voice into structured output in under
            a minute:
          </p>
          <div className="flex items-center gap-4 rounded-lg border border-[#E5E7EB] bg-[#F7F8FC] p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#0F4EFF] text-sm font-bold text-white">
              1
            </div>
            <div>
              <p className="font-semibold text-[#0D0D0D]">Wispr Flow</p>
              <p className="mt-0.5 text-sm text-[#4A4A4A]">
                Captures your voice in any app, any language. Runs silently in
                the background.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg border border-[#E5E7EB] bg-[#F7F8FC] p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#0F4EFF] text-sm font-bold text-white">
              2
            </div>
            <div>
              <p className="font-semibold text-[#0D0D0D]">Claude Code + /vc skill</p>
              <p className="mt-0.5 text-sm text-[#4A4A4A]">
                Reads the raw transcript. Identifies intent. Restructures into
                clean, actionable output with headings and next steps.
              </p>
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#0D0D0D]">Before / After</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-red-200 bg-red-50/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
                Raw dictation
              </p>
              <p className="mt-3 text-sm italic leading-relaxed text-[#4A4A4A]">
                &ldquo;So basically what I want to say is that we should probably
                look into uh the intent signals because I think that the companies
                that are hiring sales reps right now are probably the ones that
                need our help the most and we could scrape LinkedIn for that
                and...&rdquo;
              </p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                After /vc
              </p>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-[#4A4A4A]">
                <p className="font-semibold text-[#0D0D0D]">
                  Intent Signal: Sales Hiring as Buying Signal
                </p>
                <p>
                  Companies actively hiring sales reps signal unmet pipeline
                  demand — a strong indicator for outbound services.
                </p>
                <p className="font-medium text-[#0D0D0D]">Next steps:</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>Scrape LinkedIn Jobs for sales roles in CH</li>
                  <li>Cross-reference with existing ICP list</li>
                  <li>Test outreach sequence on top 20 matches</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Step by Step */}
        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-semibold text-[#0D0D0D]">
            Setup guide — 10 minutes
          </h2>
          {howToSteps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F4EFF] text-sm font-bold text-white">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-[#0D0D0D]">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#4A4A4A]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Use cases */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#0D0D0D]">What I use it for</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "LinkedIn posts", desc: "Dictate the idea, get a structured draft" },
              { label: "Meeting debriefs", desc: "Talk through key points, get action items" },
              { label: "Client briefs", desc: "Describe the project scope, get a formatted doc" },
              { label: "Email drafts", desc: "Dictate the intent, get a clean message" },
              { label: "Strategy notes", desc: "Think out loud, get organized thinking" },
              { label: "Video scripts", desc: "Describe the narrative, get a structured script" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-[#E5E7EB] bg-white p-4"
              >
                <p className="text-sm font-semibold text-[#0D0D0D]">{item.label}</p>
                <p className="mt-1 text-xs text-[#4A4A4A]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14">
          <div className="rounded-xl bg-[#08080F] p-8 text-center text-white">
            <h2 className="text-xl font-semibold">Want to set this up?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-white/70">
              Subscribe below and I&apos;ll send you the complete setup guide
              with the skill file, configuration, and advanced tips.
            </p>
          </div>
        </section>
      </article>

      {/* Newsletter signup */}
      <NewsletterSection />
    </>
  );
}
