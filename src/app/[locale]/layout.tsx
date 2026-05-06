import { metadata, RootLayoutShell } from "../root-layout-shell";

import "../globals.css";

export { metadata };

export const revalidate = 3600;

type LocaleLayoutParams = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleRootLayout({
  children,
  params,
}: Readonly<
  {
    children: React.ReactNode;
  } & LocaleLayoutParams
>) {
  const { locale } = await params;
  const htmlLocale = locale === "en" || locale === "de" || locale === "nl" ? locale : "fr";

  return <RootLayoutShell locale={htmlLocale}>{children}</RootLayoutShell>;
}
