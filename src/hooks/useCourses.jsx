import React from 'react'
import { useQuery } from 'react-query'

function useCourses() {
  return useQuery('Courses',() => {
    return fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json().then(data => data)
    )
  })
}

export default useCourses
