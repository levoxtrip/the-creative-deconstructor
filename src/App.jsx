import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import Headline from './components/Headline'
import Tabbar from './components/Tabbar'
import Footer from './components/Footer'
import './index.css'
import Sidebar from './components/Sidebar'
import ArticleContent from './components/ArticleContent'
import CategoryPage from './components/CategoryPage'
import { loadArticle } from './utils/articleLoader'

function App() {
  const [articles,setArticles] = useState([])
  const [selectedArticle,setSelectedArticle] = useState(null);
  const [selectedCategory,setSelectedCategory] = useState(null)
  const [currentSection,setCurrentSection] = useState('home');

  useEffect(()=>{
    loadArticle().then(data => {
      setArticles(data)
      setSelectedArticle(data[0])
    })
  },[])

  useEffect(()=>{
    const indexArticle = articles.find(article => article.section === currentSection && article.title === 'index');

    if(indexArticle){
      setSelectedArticle(indexArticle);
    }
  },[currentSection])

  const sectionArticles = articles.filter(article => article.section == currentSection);

  const categoryArticles = sectionArticles.filter(article => JSON.stringify(article.categoryPath) === JSON.stringify(selectedCategory))

  const uniqueCategories = [...new Set(
  sectionArticles.map(article => JSON.stringify(article.categoryPath))
)].map(str => JSON.parse(str))

  const handleArticleSelect = (article) => {
    setSelectedArticle(article)
    setSelectedCategory(null)
  }


  return (
    <>

    <Headline/>
    <Tabbar
      currentSection={currentSection}
      onSectionChange={setCurrentSection}
    />

    <Layout
    sidebar={ currentSection!=='home' ?
      <Sidebar
      categories={uniqueCategories}
      onCategorySelect={setSelectedCategory}
      />
      :null
    }
    content ={
      selectedCategory !== null ?
      <CategoryPage
      category={selectedCategory}
      articles={categoryArticles}
      onSelect={handleArticleSelect}
      
      /> :       
       <ArticleContent content={selectedArticle?.content}/>
    }
    
    
    
    />
    <Footer/>

    </>
  )
}

export default App
