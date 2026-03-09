# Google Search Console — Actions post-audit sitemap

## 1. Resoumettre le sitemap

1. Aller dans **GSC → Sitemaps**
2. Supprimer l'ancien sitemap si présent
3. Soumettre : `https://devlo.ch/sitemap.xml`
4. Vérifier que le nombre d'URLs indexées correspond (~172 URLs attendues, contre ~256 avant)

## 2. Demander la suppression des URLs mortes

Aller dans **GSC → Suppressions → Nouvelle demande** et soumettre les URLs suivantes (préfixe `https://devlo.ch`) :

### Articles WordPress legacy (FR root)

- `/2020-b2b-sales-leaders-teams`
- `/5-raisons-pour-lesquelles-la-prospection-commerciale-b2b-est-cruciale`
- `/5-reasons-why-b2b-sales-prospecting-is-essential`
- `/academy-our-call`
- `/academy-terms-conditions`
- `/akademie-unser-ruf`
- `/ausbildung-prospektion-b2b`
- `/courriel-quelquun-vendre-quelque-chose`
- `/developpement-ventes-peche-au-harpon`
- `/devlo-b2b-lead-generation-partner`
- `/eliminated-kpis-in-2020`
- `/externaliser-le-developpement-des-ventes-b2b-comment-eviter-les-depenses-excessives`
- `/indicateurs-de-performance-elimines-2020`
- `/lancement-devlo-partenaire-de-confiance-generation-de-prospects`
- `/mark-roberge-predictions-prescriptions-2021`
- `/oui-a-reduction-friction-commerciale`
- `/outsourcing-b2b-sales-development-avoid-overspending`
- `/personalisation-digitalisation-are-so-important`
- `/personalized-b2b-sales-sequences`
- `/personnalisation-digitalisation-sont-si-importantes`
- `/privacy-policy`
- `/prospection-commerciale-b2b`
- `/sales-development-is-like-spearfishing`
- `/telefonanruf`
- `/ultimativer-verkaufstrainingskurs`
- `/unser-termin`
- `/yes-to-reducing-sales-friction`

### Anciens hubs (utiliser suppression par préfixe)

- `/casestudy` (préfixe — couvre `/casestudy/*`)
- `/resultats-cas-etudes`
- `/results_cas_studies`
- `/ergebnisse_fall_studien` (préfixe — couvre `/ergebnisse_fall_studien/*`)
- `/fallstudien` (préfixe — couvre `/fallstudien/*`)

## 3. Forcer un re-crawl des pages clés

Dans **GSC → Inspection de l'URL**, inspecter et demander l'indexation pour :

- `https://devlo.ch/sitemap.xml`
- `https://devlo.ch/blog`
- `https://devlo.ch/blog/cold-email-b2b-guide-complet`
- `https://devlo.ch/blog/externaliser-prospection-commerciale`
- `https://devlo.ch/blog/intent-data-prospects-prets-acheter`
- `https://devlo.ch/prospection-commerciale-suisse`
- `https://devlo.ch/prospection-commerciale-belgique`
- `https://devlo.ch/prospection-commerciale-france`

## 4. Vérifier après 48-72h

- Vérifier dans **Couverture** que les URLs supprimées ne sont plus indexées
- Vérifier que les nouvelles URLs (blog, geo pages) apparaissent comme "Valide"
- Vérifier qu'il n'y a pas de nouvelles erreurs soft 404
