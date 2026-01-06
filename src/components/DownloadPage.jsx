function DownloadPage({file,onBack}){
	//extract filename from path
	const filename = file.split('/').pop()
	const extension = filename.split('.').pop().toUpperCase()

	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = file
		link.download = filename
		link.click()
	}

	return (
	<div className="download-page">
	<button className="download-back" onClick={onBack}>← Back to article</button>
	<div className="download-card">
	<div className="download-icon">{extension}</div>

	<h2 className="download-filename">{filename}</h2>

	<p className="download-info">File type: {extension}</p>

 {/* Future paywall goes here */}
        <div className="download-access">
          <button className="download-button" onClick={handleDownload}>
            Download File
          </button>
        </div>
        
        {/* Placeholder for future paywall */}
        {/* 
        <div className="download-paywall">
          <p>This file requires a subscription</p>
          <button>Subscribe</button>
        </div>
        */}
      </div>
    </div>
  )
}

export default DownloadPage