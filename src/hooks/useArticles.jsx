import React from 'react'
import { useQuery } from 'react-query'

function useArticles() {
  return (
      useQuery('Articles', () => {
       return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json().then(data => data)
        )
     })
  )
}

export default useArticles
