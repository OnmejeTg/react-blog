import { useParams, useHistory } from 'react-router-dom'
import useFetch from './useFetch'

function BlogDetails() {
  const { id } = useParams()
  const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)
  const history = useHistory()

  const handleDelete = ()=>{
    fetch('http://localhost:8000/blogs/'+blog.id, {
      method: 'DELETE'
    }).then(()=>{
      history.push('/')
    })

  }

  return (
    <div>
      <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Wriiten by {blog.author}</p>
            <div>{blog.body}</div>
          </article>
        )}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}
export default BlogDetails
