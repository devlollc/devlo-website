"use client";

import { useState, type FormEvent } from "react";

export function NewsletterSection({ variant = "inline" }: { variant?: "inline" | "footer" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#08080F] transition hover:bg-white/90 disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
        {status === "success" && <p className="mt-1 text-xs text-green-400">Subscribed!</p>}
        {status === "error" && <p className="mt-1 text-xs text-red-400">Something went wrong.</p>}
      </form>
    );
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-12">
      <div className="rounded-xl border border-stroke bg-[#F7F8FC] p-8 text-center">
        <h3 className="text-xl font-semibold text-[#0D0D0D]">
          Get weekly B2B insights
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-sm text-[#4A4A4A]">
          Practical outbound strategies, AI automation breakdowns, and Swiss market
          intelligence. No fluff — only what works.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-md border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#0D0D0D] placeholder:text-[#8C8C8C] focus:border-[#0F4EFF] focus:outline-none focus:ring-1 focus:ring-[#0F4EFF]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-md bg-[#0F4EFF] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0A38CC] disabled:opacity-50"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
        {status === "success" && (
          <p className="mt-3 text-sm text-green-600">You&apos;re in. Check your inbox.</p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">Something went wrong. Try again.</p>
        )}
      </div>
    </section>
  );
}
