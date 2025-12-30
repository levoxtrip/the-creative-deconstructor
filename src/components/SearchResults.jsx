function SearchResults({ results, query, onSelect }) {
  if (results.length === 0) {
    return <div className="no-results">No results found for "{query}"</div>
  }

  // Strip markdown syntax for cleaner snippets
  function stripMarkdown(text) {
    if (!text) return ''
    return text
      .replace(/!\[[^\]]*\]\([^)]+\)/g, '')      // images ![alt](url)
      .replace(/\[[^\]]*\]\([^)]+\)/g, '')       // links [text](url)
      .replace(/#{1,6}\s?/g, '')                 // headers
      .replace(/(\*\*|__)(.*?)\1/g, '$2')        // bold
      .replace(/(\*|_)(.*?)\1/g, '$2')           // italic
      .replace(/`{3}[\s\S]*?`{3}/g, '')          // code blocks
      .replace(/`([^`]+)`/g, '$1')               // inline code
      .replace(/>\s?/g, '')                      // blockquotes
      .replace(/\|.*\|/g, '')                    // tables
      .replace(/[-*+]\s/g, '')                   // list markers
      .replace(/\d+\.\s/g, '')                   // numbered lists
      .replace(/\n+/g, ' ')                      // newlines to spaces
      .replace(/\s+/g, ' ')                      // multiple spaces
      .trim()
  }

  // Extract a snippet around the matched term
  function getSnippet(content, searchTerm, contextLength = 60) {
    if (!content) return null
    
    // Clean the content first
    const cleanContent = stripMarkdown(content)
    
    // Find the match position (case-insensitive)
    const lowerContent = cleanContent.toLowerCase()
    const lowerTerm = searchTerm.toLowerCase()
    const matchIndex = lowerContent.indexOf(lowerTerm)
    
    if (matchIndex === -1) return null
    
    // Calculate start and end positions with context
    const start = Math.max(0, matchIndex - contextLength)
    const end = Math.min(cleanContent.length, matchIndex + searchTerm.length + contextLength)
    
    // Extract the snippet
    let snippet = cleanContent.substring(start, end)
    
    // Add ellipsis if we're not at the boundaries
    if (start > 0) snippet = '...' + snippet
    if (end < cleanContent.length) snippet = snippet + '...'
    
    return snippet
  }

  // Highlight the search term in text
  function highlightMatch(text, searchTerm) {
    if (!text || !searchTerm) return text
    
    const regex = new RegExp(`(${escapeRegex(searchTerm)})`, 'gi')
    const parts = text.split(regex)
    
    return parts.map((part, i) => 
      part.toLowerCase() === searchTerm.toLowerCase() 
        ? <mark key={i} className="search-highlight">{part}</mark>
        : part
    )
  }

  // Escape special regex characters
  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }

  return (
    <div className="search-results">
      <p className="results-count">{results.length} result{results.length !== 1 ? 's' : ''} for "{query}"</p>
      
      {results.map(article => {
        const snippet = getSnippet(article.content, query)
        
        return (
          <div 
            key={article.id} 
            className="search-result-item"
            onClick={() => onSelect(article)}
          >
            <h3>{highlightMatch(article.title, query)}</h3>
            
            {article.description && (
              <p className="result-description">
                {highlightMatch(article.description, query)}
              </p>
            )}
            
            {snippet && (
              <p className="result-snippet">
                {highlightMatch(snippet, query)}
              </p>
            )}
            
            <span className="category-badge">{article.category}</span>
          </div>
        )
      })}
    </div>
  )
}

export default SearchResults