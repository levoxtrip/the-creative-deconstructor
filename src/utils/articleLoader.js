export async function loadArticle(){
        // To find all .md files
    //import.meta.glob is vite feature that finds files mathing a pattern
    // it returns an object with the file path and a functions to load the files
    // '/content/article.md': [Function] structure
    const files = import.meta.glob('../content/**/*.md', {
        query: '?raw',
        import: 'default'
    })

    const articles = []

    for(const path in files){
        const content = await files[path]()

        const parts = path.split('/')
        const filename = parts[parts.length-1].replace('.md','')
        const category = parts[parts.length-2]//foldername
        const categoryPath = parts.slice(3,-1)
        const section = parts[2]
        const title = filename.replace(/-/g, ' ')
     
        articles.push({
            id: path,
            title:title,
            section:section,
            category:category,
            categoryPath:categoryPath,
            content:content,
            path:path
        })
   
    }
    return articles;


}