import { useState, useEffect, useMemo, useRef } from 'react'
import Fuse from 'fuse.js'

export function useSearch(items, searchKeys, options = {}) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  
  // Use ref to track previous items to avoid unnecessary recreations
  const itemsRef = useRef(items)
  
  // Only recreate fuse when items actually change (by length or content)
  const fuse = useMemo(() => {
    return new Fuse(items, {
      keys: searchKeys,
      threshold: 0.4,
      ignoreLocation: true,
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
      findAllMatches: true,
      ...options
    })
  }, [items.length, JSON.stringify(searchKeys)]) // Only recreate when items length changes

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    // Debounce search slightly
    const timer = setTimeout(() => {
      const searchResults = fuse.search(query)
      setResults(searchResults.map(r => ({
        ...r.item,
        score: r.score,
        matches: r.matches
      })))
    }, 100)

    return () => clearTimeout(timer)
  }, [query, fuse])

  return {
    query,
    setQuery,
    results,
    isSearching: query.trim() !== ''
  }
}