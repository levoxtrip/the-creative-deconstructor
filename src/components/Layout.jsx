
function Layout({sidebar,content}){

    return(
        <div className="layout">
        <aside className="layout-sidebar">
        {sidebar}   
        </aside>
        <main className="layout-content">
            {content}
        </main>
        </div>
    )
}
export default Layout;