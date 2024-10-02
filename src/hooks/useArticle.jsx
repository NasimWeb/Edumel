import { useQuery } from "react-query";

function useArticle (articleId) {
   return useQuery(['singleArticle',articleId], () => {
    return (
        fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`).then(res => res.json()).then(data => data)
    )
   })
}


export default useArticle