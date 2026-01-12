// Extract YouTube video ID from various URL formats
export function getYouTubeId(url) {
  if (!url) return null

  // Handle different YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,  // youtu.be/ID or youtube.com/watch?v=ID
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,                    // youtube.com/embed/ID
    /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/                         // youtube.com/v/ID
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }

  return null
}

// Check if URL is a YouTube link
export function isYouTubeUrl(url) {
  if (!url) return false
  return /(?:youtube\.com|youtu\.be)/.test(url)
}