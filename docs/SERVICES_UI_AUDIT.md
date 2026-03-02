# Audit UI de référence `/agence` (source actuelle: home `/`)

## Observation structurelle
- Il n'existe pas de route `src/app/agence/page.tsx` dans ce repo.
- Le lien "Agence" du header pointe vers `/` et la page home sert de source de vérité visuelle.

## Tokens et patterns réutilisés

### Couleurs (Tailwind / CSS vars)
- Palette primaire: `devlo-900`, `devlo-800`, `devlo-700`, `devlo-600`, `devlo-50`
- Neutres: `neutral-200`, `neutral-600`, `neutral-900`
- Fonds sections: `bg-white`, `bg-devlo-50`

### Typographie
- Font globale: `font-sans` (variable `--font-plus-jakarta`)
- Titres premium: `font-extrabold`, `tracking-tight`, `leading-[1.1..1.2]`
- Eyebrow/labels: uppercase + `tracking-[0.08em..0.15em]`

### Spacing / grille
- Container principal: `max-w-[1400px]` + `px-6 md:px-8`
- Sections: `py-16 md:py-24 lg:py-28`
- Grilles cartes: `grid` avec gaps compacts (4–6)

### Cartes / surfaces
- Radius: `rounded-2xl`
- Bordures: `border-neutral-200`
- Ombres: `shadow-soft` / `shadow-panel`
- Hover premium: légère élévation + bordure accentuée

### CTA / boutons
- Composant: `buttonClassName(...)`
- Focus visible: ring devlo conservé
