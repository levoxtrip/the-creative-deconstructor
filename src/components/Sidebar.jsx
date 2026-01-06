import { useState } from 'react'

function Sidebar({ articles, onArticleSelect, currentSection }) {
  // Filter articles for current section (exclude index files)
  const sectionArticles = articles.filter(
    a => a.section === currentSection && a.title !== 'index'
  )

  // Build tree structure from flat articles
  const buildTree = (articles) => {
    const tree = {}

    articles.forEach(article => {
      const path = article.categoryPath
      let current = tree

      // Build nested structure
      path.forEach((folder, index) => {
        if (!current[folder]) {
          current[folder] = {
            _articles: [],
            _subfolders: {}
          }
        }
        
        // If last level, add article here
        if (index === path.length - 1) {
          current[folder]._articles.push(article)
        }
        
        current = current[folder]._subfolders
      })
    })

    return tree
  }

  const tree = buildTree(sectionArticles)

  return (
    <div className="sidebar">
      <TreeNode 
        tree={tree} 
        onArticleSelect={onArticleSelect}
      />
    </div>
  )
}

// Recursive tree node component
function TreeNode({ tree, onArticleSelect, level = 0 }) {
  const [expanded, setExpanded] = useState({})

  const toggleFolder = (folder) => {
    setExpanded(prev => ({
      ...prev,
      [folder]: !prev[folder]
    }))
  }

  const folders = Object.keys(tree)

  if (folders.length === 0) return null

  return (
    <ul className="tree-list" style={{ paddingLeft: level > 0 ? 16 : 0 }}>
      {folders.map(folder => {
        const node = tree[folder]
        const isExpanded = expanded[folder]
        const hasChildren = 
          Object.keys(node._subfolders).length > 0 || 
          node._articles.length > 0

        return (
          <li key={folder} className="tree-item">
            {/* Folder header */}
            <div 
              className={`tree-folder ${isExpanded ? 'expanded' : ''}`}
              onClick={() => toggleFolder(folder)}
            >
              <span className="tree-icon">
                {hasChildren ? (isExpanded ? '▼' : '▶') : ''}
              </span>
              <span className="tree-folder-name">{folder}</span>
            </div>

            {/* Children (subfolders + articles) */}
            {isExpanded && (
              <div className="tree-children">
                {/* Subfolders */}
                {Object.keys(node._subfolders).length > 0 && (
                  <TreeNode 
                    tree={node._subfolders}
                    onArticleSelect={onArticleSelect}
                    level={level + 1}
                  />
                )}

                {/* Articles in this folder */}
                {node._articles.length > 0 && (
  <ul className="tree-articles">
    {node._articles.map(article => (
      <li 
        key={article.id}
        className="tree-article"
        onClick={(e) => {
          e.stopPropagation()
          onArticleSelect(article)
        }}
      >
        {article.title}
      </li>
    ))}
  </ul>
)}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default Sidebar