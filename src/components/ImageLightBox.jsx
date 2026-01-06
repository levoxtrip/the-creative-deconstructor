import { useEffect } from "react";
import { overlay } from "three/tsl";

function ImageLightbox({src,alt,onClose}){
	//Close on escape key
	useEffect(()=>{
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose()
		}

		window.addEventListener('keydown',handleKeyDown)
		return ()=> window.removeEventListener('keydown',handleKeyDown)
	
	},[onClose])

	return (
	
	<div className="lightbox-overlay" onClick={onClose}>
		<button className="lightbox-close" onClick={onClose}>x</button>
		<img src={src}
		alt={alt}
		className="lightbox-image"
		onClick={(e)=>e.stopPropagation()}//dont close when clicking the image
		/>
	</div>	
	)			
}
export default ImageLightbox;