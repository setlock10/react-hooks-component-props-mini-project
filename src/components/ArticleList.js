import Article from "./Article.js";

function ArticleList({posts}){

    const articles =posts.map(post=>{

        return <Article 
            key={post.id}
            date={post.date}
            title={post.title}
            preview={post.preview}
         />

    })


    
    return (
        <main> 
            {articles}
        </main>
    )
}

export default ArticleList;