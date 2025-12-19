function Tabbar({currentSection,onSectionChange}){
    return(
       <div className='tabbar'>
      <button onClick={()=>onSectionChange('home')}
        className={currentSection === 'home' ? 'section-tab active' : 'section-tab'}
        >Home</button>

      <button onClick={()=>onSectionChange('blog')}
        className={currentSection === 'blog' ? 'section-tab active' : 'section-tab'}>blog</button>
      <button onClick={()=>onSectionChange('articles')}
        className={currentSection === 'articles' ? 'section-tab active' : 'section-tab'}>articles</button>
      <button onClick={()=>onSectionChange('knowledge-base')}
        className={currentSection === 'knowledge-base' ? 'section-tab active' : 'section-tab'}>knowledge</button>
    </div>
    )
}
export default Tabbar