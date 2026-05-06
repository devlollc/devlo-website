import { metadata, RootLayoutShell } from "../root-layout-shell";

import "../globals.css";

export { metadata };

export const revalidate = 3600;

export default function FrRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayoutShell locale="fr">{children}</RootLayoutShell>;
}
