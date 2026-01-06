import { useState } from "react";
import ImageLightbox from "./ImageLightBox";

function ClickableImage({src,alt,...props}){
	const [isOpen,setIsOpen] = useState(false)

	return (
	<>
	<img
	className="markdown-img clickable"
	src={src}
	alt={alt}
	onClick={()=>setIsOpen(true)}
	{...props}
	/>

	{isOpen && (
	<ImageLightbox 
	src={src}
	alt={alt}
	onClose={()=>setIsOpen(false)}
	/>
	)}
	</>
	
	
	)

}
export default ClickableImage