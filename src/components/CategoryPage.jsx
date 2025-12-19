function CategoryPage({category,articles,onSelect}){

    return(
        <div className="category-page">
            <h1>{category.join('/')}</h1>
            <p>Here are all articles:</p>
            <br/>
            <ul>
            {
                articles.map(article=>(
                    
                    <p 
                    key={article.id}
                    onClick={()=>onSelect(article)}
                    style={{cursor:'pointer'}}
                    >
                        {article.title}

                    </p>
                ))}
            </ul>
        </div>
    )
}
export default CategoryPage;