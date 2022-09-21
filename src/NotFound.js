import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h2>Sorry</h2>
      <p>Page Could not be found</p>
      <Link to='/'>Back to Homepage</Link>
    </div>
  )
}

export default NotFound
