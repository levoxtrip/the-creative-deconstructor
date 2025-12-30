export async function loadArticle(){
    const files = import.meta.glob('../content/**/*.md', {
        query: '?raw',
        import: 'default'
    })

    const articles = []

    for(const path in files){
        const rawContent = await files[path]()

        // Parse frontmatter to separate metadata from content
        const { metadata, content } = parseFrontmatter(rawContent)

        const parts = path.split('/')
        const filename = parts[parts.length-1].replace('.md','')
        const category = parts[parts.length-2]
        const categoryPath = parts.slice(3,-1)
        const section = parts[2]
        const title = metadata.title || filename.replace(/-/g, ' ')
     
        articles.push({
            id: path,
            title: title,
            description: metadata.description || '',
            section: section,
            category: category,
            categoryPath: categoryPath,
            content: content,  // Clean content without frontmatter
            path: path
        })
    }
    
    return articles
}

// Parse frontmatter helper
function parseFrontmatter(rawContent) {
    // Check if content starts with ---
    if (!rawContent.startsWith('---')) {
        return { 
            metadata: {}, 
            content: rawContent 
        }
    }

    // Split by ---
    const parts = rawContent.split('---')
    
    if (parts.length < 3) {
        return { 
            metadata: {}, 
            content: rawContent 
        }
    }

    const frontmatterText = parts[1]
    const content = parts.slice(2).join('---').trim()

    // Parse frontmatter into object
    const metadata = {}
    const lines = frontmatterText.split('\n')
    
    lines.forEach(line => {
        const match = line.match(/^(\w+):\s*(.+)$/)
        if (match) {
            const key = match[1].toLowerCase()
            const value = match[2].trim()
            metadata[key] = value
        }
    })

    return { metadata, content }
}