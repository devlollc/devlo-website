import { ServicesSurfaceCard } from "@/components/services/services-ui";

type ServiceBenefitsProps = {
  title: string;
  items: string[];
};

export function ServiceBenefits({ title, items }: ServiceBenefitsProps) {
  return (
    <ServicesSurfaceCard className="p-6 md:p-8">
      <h2 className="break-words text-3xl font-extrabold leading-[1.15] tracking-tight text-devlo-900 md:text-4xl">{title}</h2>
      <ul className="mt-6 space-y-3.5 text-neutral-700">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-devlo-100 text-xs font-bold text-devlo-700">
              ✓
            </span>
            <span className="break-words text-sm leading-7 md:text-base">{item}</span>
          </li>
        ))}
      </ul>
    </ServicesSurfaceCard>
  );
}
