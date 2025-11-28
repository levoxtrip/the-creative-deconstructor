function CategoryPage({category,articles,onSelect}){

    return(
        <div>
            <h1>{category.join('/')}</h1>
            <ul>
            {
                articles.map(article=>(
                    <li 
                    key={article.id}
                    onClick={()=>onSelect(article)}
                    style={{cursor:'pointer'}}
                    >
                        {article.title}

                    </li>
                ))}
            </ul>
        </div>
    )
}
export default CategoryPage;