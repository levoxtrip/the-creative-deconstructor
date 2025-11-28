
function Sidebar({categories,onCategorySelect}){
    // //Group Articles

    // const grouped = {}
    // articles.forEach(article => {
    //     const category = article.category || 'uncategorized'
    //     //if category doesnt exist jet create new empty list entry into grouped
    //     if(!grouped[category]){
    //         grouped[category] = []
    //     }
    //     grouped[category].push(article)
    // })
    
    
   return (
  <div>
    {categories.map(category => (
      <div 
        key={JSON.stringify(category)}
        onClick={() => onCategorySelect(category)}
        style={{ cursor: 'pointer', padding: '5px' }}
      >
        {category.join(' / ')}
      </div>
    ))}
  </div>
)
}
export default Sidebar