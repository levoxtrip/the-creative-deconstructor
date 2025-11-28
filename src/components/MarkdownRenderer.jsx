import ReactMarkdown from 'react-markdown'
import P5Sketch from './P5Sketch'

// Custom renderer that handles special code blocks

function MarkdownRenderer({ content }) {
  return (
    <ReactMarkdown
      components={{
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '')
          const language = match ? match[1] : ''
          
          // Render p5js blocks as interactive
          if (!inline && language === 'p5js') {
            return <P5Sketch code={String(children).replace(/\n$/, '')} />
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