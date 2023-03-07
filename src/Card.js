import React from 'react'

const Post = (props) => {
  return (
    <div class="card m-2">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">{props.post.title}</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a onClick={()=>{props.detail(props.post.id)}} class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted">
      2 days ago
    </div>
  </div>
  )
}
export default Post;