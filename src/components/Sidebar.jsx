
function Sidebar({categories,onCategorySelect}){
    
   return (
  <div>
    {categories.map(category => (
      <div 
        key={JSON.stringify(category)}
        onClick={() => onCategorySelect(category)}
        style={{ cursor: 'pointer', padding: '5px' }}
      >
        {category.join(' / ')}
      </div>
    ))}
  </div>
)
}
export default Sidebar