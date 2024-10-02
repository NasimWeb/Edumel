import { useQuery } from "react-query";


function useCourse (courseId) {
    return useQuery(['SingleCourse',courseId], () => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${courseId}`).then(res => res.json()).then(data => data)
    })
}


export default useCourse