import { createCanvas } from 'canvas'
import fs from 'fs'
import path from 'path'

// ===== CONFIGURATION =====
const CONFIG = {
  size: 1080,              // 1080x1080 for Instagram
  bgColor: '#1a1a1a',      // Dark background
  titleColor: '#ffffff',   // White title
  subtextColor: '#888888', // Gray subtext
  
  // Section colors
  sectionColors: {
    'blog': '#ff6b6b',           // Red
    'articles': '#4ecdc4',        // Teal
    'knowledge-base': '#ffd93d'   // Yellow
  },
  
  // Fonts
  sectionFont: 'bold 36px Arial',
  titleFont: 'bold 72px Arial',
  subtextFont: '42px Arial',
  footerFont: '32px Arial',
  
  // Layout
  padding: 80,
  sectionBarHeight: 100,
  
  // Output
  outputDir: 'public/thumbnails'
}

// Parse frontmatter from markdown
function parseFrontmatter(content) {
  if (!content.startsWith('---')) {
    return { title: null, description: null, thumbnail_text: null }
  }

  const parts = content.split('---')
  if (parts.length < 3) {
    return { title: null, description: null, thumbnail_text: null }
  }

  const frontmatter = parts[1]
  
  const titleMatch = frontmatter.match(/title:\s*(.+)/i)
  const descMatch = frontmatter.match(/description:\s*(.+)/i)
  const thumbTextMatch = frontmatter.match(/thumbnail_text:\s*(.+)/i)
  
  return {
    title: titleMatch ? titleMatch[1].trim() : null,
    description: descMatch ? descMatch[1].trim() : null,
    thumbnail_text: thumbTextMatch ? thumbTextMatch[1].trim() : null
  }
}

// Word wrap text
function wrapText(ctx, text, maxWidth) {
  const words = text.split(' ')
  const lines = []
  let currentLine = ''

  for (const word of words) {
    const testLine = currentLine + word + ' '
    const metrics = ctx.measureText(testLine)
    
    if (metrics.width > maxWidth && currentLine !== '') {
      lines.push(currentLine.trim())
      currentLine = word + ' '
    } else {
      currentLine = testLine
    }
  }
  
  if (currentLine) {
    lines.push(currentLine.trim())
  }
  
  return lines
}

// Generate thumbnail image
function generateThumbnail(section, title, subtext) {
  const canvas = createCanvas(CONFIG.size, CONFIG.size)
  const ctx = canvas.getContext('2d')

  // Get section color
  const sectionColor = CONFIG.sectionColors[section] || '#0066cc'

  // Background
  ctx.fillStyle = CONFIG.bgColor
  ctx.fillRect(0, 0, CONFIG.size, CONFIG.size)

  // Colored section bar at top
  ctx.fillStyle = sectionColor
  ctx.fillRect(0, 0, CONFIG.size, CONFIG.sectionBarHeight)

  // Section label on the colored bar (left-aligned)
  ctx.fillStyle = '#000000'  // Black text on colored background
  ctx.font = CONFIG.sectionFont
  ctx.textAlign = 'left'
  ctx.fillText(section.toUpperCase().replace('-', ' '), CONFIG.padding, 60)

  // Title (left-aligned)
  ctx.fillStyle = CONFIG.subtextColor
  ctx.font = CONFIG.titleFont
  ctx.textAlign = 'left'
  
  const maxWidth = CONFIG.size - (CONFIG.padding * 2)
  const titleLines = wrapText(ctx, title, maxWidth)
  
  // Position title below section bar
  const titleStartY = CONFIG.sectionBarHeight + 150
  
  titleLines.forEach((line, i) => {
    ctx.fillText(line, CONFIG.padding, titleStartY + (i * 90))
  })

  // Subtext (if provided, left-aligned)
  if (subtext) {
    ctx.fillStyle = CONFIG.titleColor
  ctx.font = CONFIG.titleFont
    
    const subtextLines = wrapText(ctx, subtext, maxWidth)
    const subtextStartY = titleStartY + (titleLines.length * 90) + 60
    
    subtextLines.forEach((line, i) => {
      ctx.fillText(line, CONFIG.padding, subtextStartY + (i * 90))
    })
  }

  // Footer text (left-aligned, two lines, bigger)
  ctx.fillStyle = CONFIG.subtextColor
  ctx.font = 'bold 110px Arial'
  ctx.textAlign = 'left'
ctx.fillText('The Creative', CONFIG.padding, CONFIG.size - 240)
ctx.fillText('Deconstructor', CONFIG.padding, CONFIG.size - 120) 

  return canvas.toBuffer('image/png')
}

// Get all markdown files
function getAllMarkdownFiles(dir) {
  let results = []
  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(fullPath))
    } else if (item.endsWith('.md')) {
      results.push(fullPath)
    }
  }

  return results
}

// Main process
async function generateAllThumbnails() {
  const contentDir = 'src/content'
  
  // Create output directory
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true })
  }

  // Find all markdown files
  const files = getAllMarkdownFiles(contentDir)

  console.log(`Found ${files.length} markdown files\n`)

 for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8')
  const { title, description, thumbnail_text } = parseFrontmatter(content)

  if (!title) {
    console.log(`⚠️  Skipping ${file} - no title in frontmatter`)
    continue
  }

  // Extract section and category from path
  const relativePath = path.relative(contentDir, file)
  const pathParts = relativePath.split(path.sep)
  const section = pathParts[0]  // First folder: blog, articles, knowledge-base
  const category = pathParts[1] !== path.basename(file) ? pathParts[1] : null  // Second folder: VVVV, VCVRack, etc.

  // Use custom thumbnail_text if provided, otherwise use description
  const subtext = thumbnail_text || description || ''

  // Generate output filename (flatten path)
  const outputName = relativePath
    .replace(/\\/g, '-')
    .replace(/\//g, '-')
    .replace('.md', '.png')
  const outputPath = path.join(CONFIG.outputDir, outputName)

  // Create parent directories if needed
  const outputDir = path.dirname(outputPath)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Generate thumbnail
  const buffer = generateThumbnail(section, category, title, subtext)  // ← Pass category
  fs.writeFileSync(outputPath, buffer)

  console.log(`✅ Generated: ${outputName}`)
  console.log(`   Section: ${section.toUpperCase()}`)
  if (category) console.log(`   Category: ${category.toUpperCase()}`)  // ← Show category
  console.log(`   Title: ${title}`)
  if (subtext) console.log(`   Subtext: ${subtext}`)
  console.log()
}

  console.log(`\n🎨 Done! Thumbnails saved to ${CONFIG.outputDir}/`)
}

// Run it
generateAllThumbnails()