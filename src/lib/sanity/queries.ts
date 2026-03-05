export const localizedPageByIdQuery = `
  coalesce(
    *[_type in ["page", "service", "caseStudy"] && pageId == $pageId && _id match "localizedPage.*"]
      | order(_updatedAt desc)[0],
    *[_type in ["page", "service", "caseStudy"] && pageId == $pageId]
      | order(_updatedAt desc)[0]
  ){
    _id,
    _type,
    pageId,
    title,
    description,
    seoTitle,
    seoDescription,
    slug,
    ogImage,
    body,
    updatedAt
  }
`;
