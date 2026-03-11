import Link from "next/link";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema } from "@/lib/seo/schema-builders";
import { getAllLocalizedBlogArticles, getLocalizedBlogHub } from "@/lib/i18n/blog-content";
import { resolvePathForLocale, type SupportedLocale } from "@/lib/i18n/slug-map";

type BlogHubMasterPageProps = {
  locale?: SupportedLocale;
};

export function BlogHubMasterPage({ locale = "fr" }: BlogHubMasterPageProps) {
  const copy = getLocalizedBlogHub(locale);
  const articles = getAllLocalizedBlogArticles(locale);
  const blogPath = resolvePathForLocale("/blog", locale).path;
  const breadcrumbItems = [
    { name: copy.breadcrumbHome, path: resolvePathForLocale("/", locale).path },
    { name: copy.breadcrumbBlog, path: blogPath },
  ];

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />
      <Breadcrumb items={breadcrumbItems} />

      <section className="bg-[#074f74] pt-16 text-white">
        <div className="mx-auto w-full max-w-screen-xl px-6 pb-14 text-center lg:px-10">
          <h1 className="text-4xl font-semibold lg:text-5xl">{copy.h1}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">{copy.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-xl px-6 py-12 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => (
            <article key={article.frSlug} className="rounded-lg border border-stroke bg-white p-4 shadow-soft">
              <div
                className={`flex aspect-[16/10] items-center justify-center rounded-md text-xs font-semibold uppercase tracking-[0.13em] ${
                  index % 3 === 0
                    ? "bg-gradient-to-br from-[#865a9d] via-[#4f6aa9] to-[#2d84b5] text-white"
                    : "bg-gradient-to-br from-[#dce7f1] to-[#eef4f8] text-[#567086]"
                }`}
              >
                {article.category}
              </div>
              <h2 className="mt-4 text-lg font-semibold leading-6 text-[#153a54]">{article.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#2a4c63]/80">{article.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <time className="text-xs text-neutral-400">{article.date}</time>
                <Link
                  prefetch={false}
                  href={resolvePathForLocale(`/blog/${article.frSlug}`, locale).path}
                  className="inline-flex h-9 items-center rounded-md bg-[#0a608e] px-4 text-xs font-semibold uppercase tracking-[0.12em] text-white"
                >
                  {copy.readMore}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
