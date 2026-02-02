function Tabbar({currentSection,onSectionChange}){
    return(
       <div className='tabbar'>
      <button onClick={()=>onSectionChange('home')}
        className={currentSection === 'home' ? 'section-tab active' : 'section-tab'}
        >Home</button>

      <button onClick={()=>onSectionChange('blog')}
        className={currentSection === 'blog' ? 'section-tab active' : 'section-tab'}>Blog</button>
      <button onClick={()=>onSectionChange('articles')}
        className={currentSection === 'articles' ? 'section-tab active' : 'section-tab'}>Articles</button>
      <button onClick={()=>onSectionChange('knowledge-base')}
        className={currentSection === 'knowledge-base' ? 'section-tab active' : 'section-tab'}>Knowledge</button>
    </div>
    )
}
export default Tabbar