
import MarkdownRenderer from './MarkdownRenderer';
function ArticleContent({content,articles,onArticleSelect,onDownloadClick}){
    if(!content){
        return <p>Please select an article ...</p>
    }
    return(
        <div className="article-content">
            <MarkdownRenderer 
            content={content}
            articles={articles}
            onArticleSelect={onArticleSelect}
            onDownloadClick={onDownloadClick}
            
            />
        </div>
    )
}
export default ArticleContent;