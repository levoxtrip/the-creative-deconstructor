function YouTubeEmbed({ videoId }) {
  return (
    <div className="youtube-container">
      <iframe
        className="youtube-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default YouTubeEmbed