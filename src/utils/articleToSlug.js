export function articleToSlug(article) {
  const parts = article.path.split('/')
  return parts.slice(3).join('/').replace('.md', '')
}

export function findArticleBySlug(articles, slug) {
  return articles.find(a => articleToSlug(a) === decodeURIComponent(slug))
}