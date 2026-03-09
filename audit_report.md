# Audit Sitemap devlo.ch — Rapport exécutif

**Date :** 2026-03-09
**Branche :** `feat/sitemap-audit-cleanup`

---

## Résumé

Le sitemap contenait **274 URLs** dont **~100 URLs legacy** (anciens articles WordPress, hubs obsolètes, pages DE/EN/NL dupliquées) qui retournaient un HTTP 200 via le catch-all Next.js mais affichaient du contenu vide (soft 404). Ces URLs diluaient le crawl budget Google et l'autorité SEO.

## Actions réalisées

### 1. Nettoyage de slug-map.json
- **Avant :** 89 entrées (dont 47 `page:*` legacy)
- **Après :** 43 entrées
- **Supprimées :** 47 entrées soft 404
- **Ajoutées :** 7 nouvelles (blog hub, 3 articles, 3 geo pages)

### 2. Redirects 301
- **37 règles de redirect** ajoutées dans `next.config.mjs`
- Articles blog legacy → `/blog` ou article spécifique
- Pages DE au root FR → pages FR correspondantes
- Anciens hubs case study → `/etudes-de-cas`

### 3. Nouvelles pages dans le sitemap
- `/blog`, `/blog/cold-email-b2b-guide-complet`, `/blog/externaliser-prospection-commerciale`, `/blog/intent-data-prospects-prets-acheter`
- `/prospection-commerciale-suisse`, `/prospection-commerciale-belgique`, `/prospection-commerciale-france`

## Impact attendu

| Métrique | Avant | Après |
|----------|-------|-------|
| URLs dans sitemap | ~274 | ~172 |
| URLs soft 404 | ~100 | 0 |
| Redirects 301 | ~600 | ~637 |
| Pages blog indexables | 0 | 4 |
| Pages geo indexables | 0 | 3 |

## Fichiers modifiés

| Fichier | Action |
|---------|--------|
| `src/lib/i18n/slug-map.json` | 47 entrées supprimées, 7 ajoutées |
| `next.config.mjs` | 37 redirects ajoutés |
| `sitemap_audit.json` | Créé — données brutes audit |
| `urls_removed.csv` | Créé — URLs supprimées avec raisons |
| `gsc_actions.md` | Créé — instructions GSC |
| `audit_report.md` | Créé — ce rapport |

## Prochaines étapes

1. Exécuter les actions GSC (voir `gsc_actions.md`)
2. Vérifier l'indexation après 48-72h
3. Monitorer les erreurs de couverture dans GSC
