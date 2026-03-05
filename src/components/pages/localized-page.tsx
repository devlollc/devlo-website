import { SectionWrapper } from "@/components/shared/section-wrapper";

type LocalizedPageProps = {
  title: string;
  description?: string;
  body?: string;
  debugKey?: string;
};

function splitParagraphs(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function LocalizedPage({ title, description, body, debugKey }: LocalizedPageProps) {
  const paragraphs = splitParagraphs(body);

  return (
    <main>
      <SectionWrapper background="white" className="py-14 md:py-16">
        <div className="max-w-4xl space-y-6">
          {debugKey ? <span className="sr-only" data-debug-key={debugKey} /> : null}
          <h1 className="text-3xl font-extrabold leading-tight text-devlo-900 md:text-5xl">{title}</h1>
          {description ? <p className="text-base leading-8 text-neutral-600 md:text-lg">{description}</p> : null}
        </div>
      </SectionWrapper>

      {paragraphs.length > 0 ? (
        <SectionWrapper background="white" className="pt-0 pb-16 md:pb-20">
          <div className="max-w-4xl space-y-4 text-base leading-8 text-neutral-700">
            {paragraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
            ))}
          </div>
        </SectionWrapper>
      ) : null}
    </main>
  );
}
