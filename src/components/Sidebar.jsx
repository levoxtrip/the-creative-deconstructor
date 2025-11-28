
function Sidebar({articles,onSelect,selected}){
    //Group Articles

    const grouped = {}
    articles.forEach(article => {
        const category = article.category || 'uncategorized'
        //if category doesnt exist jet create new empty list entry into grouped
        if(!grouped[category]){
            grouped[category] = []
        }
        grouped[category].push(article)
    })
    
    
    return(

        <div className="sidebar">
        {Object.keys(grouped).map(category => (
            <div key={category} className="category-group">
                <h3>{category}</h3>
                {grouped[category].map(article=> (
                    <div
                    key={article.id}
                    className={article.id === selected?.id ? 'article-item active' : 'article-item'}
                    onClick={()=>onSelect(article)}
                    >
                        {article.title}
                        </div>
                ))}
            </div>
        )

        )}
        </div>

    )
}
export default Sidebar