"use client";

import { useState, type FormEvent } from "react";

export function NewsletterFR() {
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

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-4">
      <div className="rounded-xl border border-[#e0e4e6] bg-[#F7F8FC] p-8 text-center">
        <h3 className="text-xl font-semibold text-[#0D0D0D]">
          Recevez nos insights B2B chaque semaine
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-sm text-[#4A4A4A]">
          Strat&eacute;gies outbound concr&egrave;tes, automatisation IA et
          intelligence du march&eacute; suisse. Pas de blabla — uniquement ce
          qui fonctionne.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            className="flex-1 rounded-md border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#0D0D0D] placeholder:text-[#8C8C8C] focus:border-[#074f74] focus:outline-none focus:ring-1 focus:ring-[#074f74]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-md bg-[#074f74] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a3a54] disabled:opacity-50"
          >
            {status === "loading" ? "..." : "S\u2019abonner"}
          </button>
        </form>
        {status === "success" && (
          <p className="mt-3 text-sm text-green-600">
            Merci ! Vous recevrez nos prochains insights.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">
            Une erreur est survenue. R&eacute;essayez.
          </p>
        )}
      </div>
    </section>
  );
}
