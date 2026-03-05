"use client";

import { useEffect, useMemo, useState } from "react";

import { ServiceChipButton, ServicesSurfaceCard } from "@/components/services/services-ui";
import { buttonClassName } from "@/components/ui/button";
import type { ServiceConfiguratorField } from "@/content/services";
import type { SupportedLocale } from "@/lib/i18n/slug-map";

type SelectionValue = string | string[];

export type ConfiguratorLine = {
  id: string;
  label: string;
  value: string;
};

type ServiceConfiguratorProps = {
  locale?: SupportedLocale;
  title: string;
  intro: string;
  header: string;
  fields: ServiceConfiguratorField[];
  onSummaryChange?: (summary: string) => void;
  onPreviewChange?: (lines: ConfiguratorLine[]) => void;
  onContinue?: () => void;
};

const copyByLocale: Record<
  SupportedLocale,
  {
    undefinedValue: string;
    optional: string;
    step1: string;
    configure: string;
    preview: string;
    continue: string;
    canEdit: string;
  }
> = {
  fr: {
    undefinedValue: "Non défini",
    optional: "Optionnel",
    step1: "Étape 1/2",
    configure: "Configurez",
    preview: "Aperçu de votre configuration",
    continue: "Continuer",
    canEdit: "Vous pourrez modifier vos choix avant envoi.",
  },
  en: {
    undefinedValue: "Not defined",
    optional: "Optional",
    step1: "Step 1/2",
    configure: "Configure",
    preview: "Configuration preview",
    continue: "Continue",
    canEdit: "You can edit your choices before submission.",
  },
  de: {
    undefinedValue: "Nicht definiert",
    optional: "Optional",
    step1: "Schritt 1/2",
    configure: "Konfigurieren",
    preview: "Vorschau Ihrer Konfiguration",
    continue: "Weiter",
    canEdit: "Sie können Ihre Auswahl vor dem Senden ändern.",
  },
  nl: {
    undefinedValue: "Niet gedefinieerd",
    optional: "Optioneel",
    step1: "Stap 1/2",
    configure: "Configureren",
    preview: "Voorbeeld van je configuratie",
    continue: "Doorgaan",
    canEdit: "Je kunt je keuzes wijzigen vóór verzending.",
  },
};

function defaultSelectionForField(field: ServiceConfiguratorField): SelectionValue {
  if (field.type === "multi") return [];
  return "";
}

function buildLine(field: ServiceConfiguratorField, selection: SelectionValue, undefinedValue: string): ConfiguratorLine {
  if (field.type === "multi") {
    const values = Array.isArray(selection) ? selection : [];
    return {
      id: field.id,
      label: field.label,
      value: values.length ? values.join(", ") : undefinedValue,
    };
  }

  const value = typeof selection === "string" ? selection : "";
  return {
    id: field.id,
    label: field.label,
    value: value || undefinedValue,
  };
}

export function ServiceConfigurator({
  locale = "fr",
  title,
  intro,
  header,
  fields,
  onSummaryChange,
  onPreviewChange,
  onContinue,
}: ServiceConfiguratorProps) {
  const copy = copyByLocale[locale];
  const [selections, setSelections] = useState<Record<string, SelectionValue>>(() =>
    Object.fromEntries(fields.map((field) => [field.id, defaultSelectionForField(field)])),
  );

  const lines = useMemo(
    () => fields.map((field) => buildLine(field, selections[field.id], copy.undefinedValue)),
    [fields, selections, copy.undefinedValue],
  );
  const summary = useMemo(
    () => [header, ...lines.map((line) => `${line.label}: ${line.value}`)].join("\n"),
    [header, lines],
  );

  useEffect(() => {
    onSummaryChange?.(summary);
    onPreviewChange?.(lines);
  }, [lines, onPreviewChange, onSummaryChange, summary]);

  return (
    <ServicesSurfaceCard className="overflow-hidden p-5 md:p-6">
      <div className="rounded-xl border border-devlo-100 bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-devlo-700">{copy.step1} — {copy.configure}</p>
          <p className="text-xs font-semibold text-devlo-700">50%</p>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-devlo-100">
          <div className="h-full w-1/2 rounded-full bg-devlo-700" />
        </div>
      </div>

      <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-devlo-900">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{intro}</p>

      <div className="mt-5 space-y-4">
        {fields.map((field) => (
          <div key={field.id} className="rounded-xl border border-neutral-200 bg-white p-4">
            <div className="mb-2.5 flex items-center gap-2">
                <p className="text-sm font-semibold text-devlo-900">{field.label}</p>
                {field.optional ? (
                  <span className="rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-neutral-500">
                    {copy.optional}
                  </span>
                ) : null}
              </div>

            <div className="flex flex-wrap gap-1.5">
              {field.options.map((option) => {
                const currentSelection = selections[field.id];
                const isSelected =
                  field.type === "multi"
                    ? Array.isArray(currentSelection) && currentSelection.includes(option)
                    : currentSelection === option;

                return (
                  <ServiceChipButton
                    key={`${field.id}-${option}`}
                    type="button"
                    selected={isSelected}
                    onClick={() => {
                      setSelections((previous) => {
                        if (field.type === "multi") {
                          const selected = previous[field.id];
                          const current = Array.isArray(selected) ? selected.slice() : [];
                          const exists = current.includes(option);
                          return { ...previous, [field.id]: exists ? current.filter((item) => item !== option) : [...current, option] };
                        }

                        const selected = previous[field.id];
                        const nextValue = selected === option ? "" : option;
                        return { ...previous, [field.id]: nextValue };
                      });
                    }}
                  >
                    {option}
                  </ServiceChipButton>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.09em] text-devlo-700">{copy.preview}</p>
        <div className="mt-2 space-y-1.5">
          {lines.map((line) => (
            <p key={line.id} className="text-xs leading-5 text-neutral-600">
              <span className="font-semibold text-devlo-900">{line.label}:</span> {line.value}
            </p>
          ))}
        </div>
      </div>

      <div className="-mx-5 mt-5 border-t border-neutral-200 bg-white/95 px-5 pb-1 pt-4 backdrop-blur md:-mx-6 md:px-6">
        <button type="button" className={buttonClassName("primary", "w-full py-3.5 text-sm")} onClick={onContinue}>
          {copy.continue}
        </button>
        <p className="mt-2 text-center text-xs text-neutral-500">{copy.canEdit}</p>
      </div>
    </ServicesSurfaceCard>
  );
}
