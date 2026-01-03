import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import Headline from './components/Headline'
import Tabbar from './components/Tabbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import './index.css'
import Sidebar from './components/Sidebar'
import ArticleContent from './components/ArticleContent'
import CategoryPage from './components/CategoryPage'
import { loadArticle } from './utils/articleLoader'
import { useSearch } from './hooks/useSearch'
import WelcomeCanvas from './components/WelcomeCanvas'

function App() {
  const [articles, setArticles] = useState([])
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    loadArticle().then(data => {
      setArticles(data)
      setSelectedArticle(data[0])
    })
  }, [])

  useEffect(() => {
    const indexArticle = articles.find(
      article => article.section === currentSection && article.title === 'index'
    )
 
    if (indexArticle) {
      setSelectedArticle(indexArticle)
      setSelectedCategory(null)
    }
    console.log(currentSection)
  }, [currentSection])



  const sectionArticles = articles.filter(
    article => article.section == currentSection
  )

  // Add search hook - searches within current section
  const search = useSearch(sectionArticles, ['title', 'description', 'content'])

  const categoryArticles = sectionArticles.filter(
    article => JSON.stringify(article.categoryPath) === JSON.stringify(selectedCategory)
  )

  const uniqueCategories = [...new Set(
    sectionArticles.map(article => JSON.stringify(article.categoryPath))
  )].map(str => JSON.parse(str))

  const handleArticleSelect = (article) => {
    setSelectedArticle(article)
    setSelectedCategory(null)
    search.setQuery('')  // Clear search when selecting article
  }

  return (
    <>
      <Headline />
      <WelcomeCanvas isHomeActive={currentSection==='home'}/>
      <Tabbar
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />

      {/* Search bar - show when not on home */}
      {currentSection !== 'home' && (
        <div className="search-wrapper">
          <SearchBar
            value={search.query}
            onChange={search.setQuery}
            placeholder={`Search ${currentSection}...`}
          />
        </div>
      )}

      <Layout
        sidebar={
          currentSection !== 'home' ? (
            <Sidebar
              categories={uniqueCategories}
              onCategorySelect={setSelectedCategory}
            />
          ) : null
        }
        content={
          // If searching, show search results
          search.isSearching ? (
            <SearchResults
              results={search.results}
              query={search.query}
              onSelect={handleArticleSelect}
            />
          ) : selectedCategory !== null ? (
            <CategoryPage
              category={selectedCategory}
              articles={categoryArticles}
              onSelect={handleArticleSelect}
            />
          ) :  currentSection !== 'home' ? (

            <ArticleContent content={selectedArticle?.content} />
             ) : null
          
        }
      />
      
      <Footer />
    </>
  )
}

export default App