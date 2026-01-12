import ReactMarkdown from 'react-markdown'
import P5Sketch from './P5Sketch'
import GLSLShader from './GLSLShader'
import ClickableImage from './ClickableImage'
import YouTubeEmbed from './YoutubeEmbed'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { getYouTubeId, isYouTubeUrl } from '../utils/youtubeHelper'

// Custom renderer that handles special code blocks
const IMAGE_BASE_PATH = '..assets/img'
function MarkdownRenderer({ content,articles,onArticleSelect,onDownloadClick }) {
  const downloadExtensions = ['.vl','.zip','.tox','.toe']
  const isDownloadLink = (href) => {
    if(!href) return false
    return downloadExtensions.some(ext=>href.toLowerCase().endsWith(ext))
  }





  const handleLinkClick = (e,href) => {
    if(!href.endsWith('.md')) return

    e.preventDefault()

    const filename = href.split('/').pop().replace('.md','')

    const targetArticle = articles.find(article => {
      const articleFilename = article.path.split('/').pop().replace('.md','')
      return articleFilename.toLowerCase() === filename.toLowerCase() || article.title.toLowerCase() === filename.toLowerCase()
    })

    if(targetArticle && onArticleSelect){
      onArticleSelect(targetArticle)
    } else {
      console.warn(`Article not found: ${href}`)
    }
  
  }

  return (
    <ReactMarkdown
      components={{
        //Handle Links
        a: ({ href, children, ...props }) => {
  // Download link (.vl, .zip, .tox, .toe)
  if (isDownloadLink(href)) {
    return (
      <a 
        href={href}
        onClick={(e) => {
          e.preventDefault()
          onDownloadClick && onDownloadClick(href)
        }}
        className="download-link"
        {...props}
      >
        {children}
      </a>
    )
  }

  // Internal .md link
  if (href && href.endsWith('.md')) {
    return (
      <a 
        href={href}
        onClick={(e) => handleLinkClick(e, href)}
        className="internal-link"
        {...props}
      >
        {children}
      </a>
    )
  }

  // YouTube link - embed video
          if (href && isYouTubeUrl(href)) {
            const videoId = getYouTubeId(href)
            if (videoId) {
              return (
                <div className="youtube-wrapper">
                  <YouTubeEmbed videoId={videoId} />
                  {children && <p className="video-caption">{children}</p>}
                </div>
              )
            }
          }
  
  // External link (http/https)
  if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="external-link"
        {...props}
      >
        {children}
      </a>
    )
  }

  // Default (anchor links, etc.)
  return (
    <a href={href} className="default-link" {...props}>
      {children}
    </a>
  )
},



        img: ({ src, alt, ...props }) => {
          let resolvedSrc = src
          
          // Transform ./VCV/foo.png → /img/VCV/foo.png
          if (src && src.startsWith('./')) {
            resolvedSrc = `/img${src.slice(1)}`  // removes the dot
          }
          return <ClickableImage src={resolvedSrc} alt={alt} {...props}/>
          
        },
code: ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '')
  const language = match ? match[1] : ''
  const codeString = String(children).replace(/\n$/, '')
  
  if (!inline && language === 'p5js') {
    return <P5Sketch code={codeString} />
  }

  if (!inline && language === 'glsl') {
    return <GLSLShader code={codeString} />
  }
  
  // Inline code only - blocks are handled by `pre`
  if (inline) {
    return (
      <code className="inline-code" {...props}>
        {children}
      </code>
    )
  }
  
  // Non-inline code (inside pre) - just return code element
  return (
    <code className={className} {...props}>
      {children}
    </code>
  )
},

// Add pre handler
pre: ({ children, ...props }) => {
  return (
    <pre className="code-block" {...props}>
      {children}
    </pre>
  )
}
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownRenderer