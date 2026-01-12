import { useState } from 'react'

function Sidebar({ articles, onArticleSelect, currentSection }) {
  const [expandedPath, setExpandedPath] = useState([])

  const sectionArticles = articles.filter(
    a => a.section === currentSection && a.title !== 'index'
  )

  const buildTree = (articles) => {
    const tree = {}

    articles.forEach(article => {
      const path = article.categoryPath
      let current = tree

      path.forEach((folder, index) => {
        if (!current[folder]) {
          current[folder] = {
            _articles: [],
            _subfolders: {}
          }
        }
        
        if (index === path.length - 1) {
          current[folder]._articles.push(article)
        }
        
        current = current[folder]._subfolders
      })
    })

    return tree
  }

  const tree = buildTree(sectionArticles)

  // Toggle folder - closes others at same level
  const toggleFolder = (path) => {
    const pathStr = path.join('/')
    const currentStr = expandedPath.join('/')

    if (currentStr.startsWith(pathStr)) {
      // Clicking open folder or parent - close it
      setExpandedPath(path.slice(0, -1))
    } else {
      // Open this folder (closes others)
      setExpandedPath(path)
    }
  }

  const isExpanded = (path) => {
    const pathStr = path.join('/')
    const currentStr = expandedPath.join('/')
    return currentStr.startsWith(pathStr)
  }

  return (
    <div className="sidebar">
      <TreeNode 
        tree={tree} 
        onArticleSelect={onArticleSelect}
        path={[]}
        toggleFolder={toggleFolder}
        isExpanded={isExpanded}
      />
    </div>
  )
}

function TreeNode({ tree, onArticleSelect, path, toggleFolder, isExpanded }) {
  const folders = Object.keys(tree)

  if (folders.length === 0) return null

  return (
    <ul className="tree-list">
      {folders.map(folder => {
        const node = tree[folder]
        const currentPath = [...path, folder]
        const expanded = isExpanded(currentPath)
        const hasChildren = 
          Object.keys(node._subfolders).length > 0 || 
          node._articles.length > 0

        return (
          <li key={folder} className="tree-item">
            <div 
              className={`tree-folder ${expanded ? 'expanded' : ''}`}
              onClick={() => toggleFolder(currentPath)}
            >
              <span className="tree-folder-name">{folder}</span>
              {hasChildren && (
                <span className="tree-arrow">{expanded ? '−' : '+'}</span>
              )}
            </div>

            {expanded && (
              <div className="tree-children">
                {Object.keys(node._subfolders).length > 0 && (
                  <TreeNode 
                    tree={node._subfolders}
                    onArticleSelect={onArticleSelect}
                    path={currentPath}
                    toggleFolder={toggleFolder}
                    isExpanded={isExpanded}
                  />
                )}

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