import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import Headline from './components/Headline'
import Tabbar from './components/Tabbar'
import Footer from './components/Footer'
import './index.css'
import Sidebar from './components/Sidebar'
import ArticleContent from './components/ArticleContent'
import { loadArticle } from './utils/articleLoader'

function App() {
  const [articles,setArticles] = useState([])
  const [selectedArticle,setSelected] = useState(null);
  const [selectedCategory,setSelectedCategory] = useState(null)
  const [currentSection,setCurrentSection] = useState('home');

  useEffect(()=>{
    loadArticle().then(data => {
      setArticles(data)
      setSelected(data[0])
    })
  },[])

  useEffect(()=>{
    const indexArticle = articles.find(article => article.section === currentSection && article.title === 'index');

    if(indexArticle){
      setSelected(indexArticle);
    }
  },[currentSection])

  const sectionArticles = articles.filter(article => article.section == currentSection);

  const categoryArticles = sectionArticles.filter(article => JSON.stringify(article.categoryPath) === JSON.stringify(selectedCategory))


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
      articles={sectionArticles}
      selected={selectedArticle}
      onSelect={setSelected}
      />
      :null
    }
    content ={
      selectedCategory !== null ?
      <CategoryPage
      category={selectedCategory}
      articles={categoryArticles}
      
      /> :       
       <ArticleContent content={selectedArticle?.content}/>
    }
    
    
    
    />
    <Footer/>

    </>
  )
}

export default App
