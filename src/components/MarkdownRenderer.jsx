import ReactMarkdown from 'react-markdown'
import P5Sketch from './P5Sketch'
import GLSLShader from './GLSLShader'

// Custom renderer that handles special code blocks
const IMAGE_BASE_PATH = '..assets/img'
function MarkdownRenderer({ content }) {
  return (
    <ReactMarkdown
      components={{
        img: ({ src, alt, ...props }) => {
          let resolvedSrc = src
          
          // Transform ./VCV/foo.png → /img/VCV/foo.png
          if (src && src.startsWith('./')) {
            resolvedSrc = `/img${src.slice(1)}`  // removes the dot
          }
          
          return <img className="markdown-img" src={resolvedSrc} alt={alt} {...props} />
        },
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '')
          const language = match ? match[1] : ''
          
          // Render p5js blocks as interactive
          if (!inline && language === 'p5js') {
            return <P5Sketch code={String(children).replace(/\n$/, '')} />
          }

          if (!inline && language === 'glsl') {
            return <GLSLShader code={String(children).replace(/\n$/, '')} />
          }
          
          // Regular code blocks
          return (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownRenderer