function SearchBar({value,onChange,placeholder}){
	return (
	<div className="search-container">
	<input 
	type="text"
	className="search-box"
	placeholder={placeholder || "Search..."}
	value={value}
	onChange={(e)=>onChange(e.target.value)}
	/>
	{value && (
	<button
	className="search-clear"
	onClick={()=>onChange('')}
	arai-label="Clear search">
	x</button>
	)}
	
	
	</div>
	)
}

export default SearchBar