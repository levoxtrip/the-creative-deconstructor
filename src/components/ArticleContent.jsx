
import MarkdownRenderer from './MarkdownRenderer';
function ArticleContent({content}){
    if(!content){
        return <p>Please select an article ...</p>
    }
    return(
        <div className="article-content">
            <MarkdownRenderer content={content}/>
        </div>
    )
}
export default ArticleContent;