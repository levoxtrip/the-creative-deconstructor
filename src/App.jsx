import { useEffect, useState, useCallback } from 'react'
import Layout from './components/Layout'
import Headline from './components/Headline'
import Subline from './components/Subline'
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
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/ibm-plex-sans-condensed/600.css'
import '@fontsource/ibm-plex-sans-condensed/700.css'
import DownloadPage from './components/DownloadPage'

function App() {
  const [articles, setArticles] = useState([])
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [currentSection, setCurrentSection] = useState('home')
  const [downloadFile,setDownloadFile] = useState(null)
  const [previousArticle,setPreviousArticle] = useState(null)


  const clearDownload = useCallback(() => {
  setDownloadFile(null)
  setPreviousArticle(null)
}, [])






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

const handleArticleSelect = useCallback((article) => {
  console.log('Selecting article:', article.title)
  setSelectedCategory(null)
  setSelectedArticle(article)
  setCurrentSection(article.section)
  clearDownload()              // Use helper
  search.setQuery('')
}, [search, clearDownload])

  const handleDownloadClick = (filePath) => {
    setPreviousArticle(selectedArticle)
    setDownloadFile(filePath)
  }

  const handleDownloadBack = () => {
    setSelectedArticle(previousArticle)
    setDownloadFile(null)
    setPreviousArticle(null)
  }

  
  useEffect(() => {
    loadArticle().then(data => {
      setArticles(data)
      setSelectedArticle(data[0])
    })
  }, [])

useEffect(() => {
  // Only set index if no article is selected or section changed manually
  if (selectedArticle?.section === currentSection) return
  
  const indexArticle = articles.find(
    article => article.section === currentSection && article.title === 'index'
  )

  if (indexArticle) {
    setSelectedArticle(indexArticle)
    setSelectedCategory(null)
  }
}, [currentSection, articles])

// Add this useEffect in your App.js
useEffect(() => {
  // Clear download page when section changes
  setDownloadFile(null)
  setPreviousArticle(null)
}, [currentSection])


useEffect(() => {
  clearDownload()
}, [currentSection, clearDownload])

// Clear download when searching
useEffect(() => {
  if (search.query) {
    clearDownload()
  }
}, [search.query, clearDownload])


  return (
    <>
      <Headline />
            <Tabbar
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />
      
       {/* {currentSection === 'home' && (
      <Subline/>

      )} */}
            {/* <WelcomeCanvas isHomeActive={currentSection==='home'}/> */}

<WelcomeCanvas 
  isHomeActive={currentSection === 'home'} 
  articles={articles}
  onArticleSelect={handleArticleSelect}
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
        articles={articles}
        currentSection={currentSection}
        onArticleSelect={handleArticleSelect}
      />
    ) : null
        }
        content={
        //Download page takes priority
        downloadFile ? (
        <DownloadPage
        file={downloadFile}
        onBack={handleDownloadBack}
        />
        ) :
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

            <ArticleContent
            content={selectedArticle?.content}
            articles={articles}
            onArticleSelect={handleArticleSelect} 
            onDownloadClick={handleDownloadClick}
            
            />
             ) : null
          
        }
      />
      
      <Footer />
    </>
  )
}

export default App