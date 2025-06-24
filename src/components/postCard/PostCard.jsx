import React from 'react'
import "./PostCard.css"

const PostCard = ({ users}) => {

  return (
    <div>
      {users.map((user) => {
        return (
          <div className='cards' key={user.title}>
            <div className='card'>
              <h1 className='card-title'>{user.title}</h1>
              <p>{user.body}</p>
              <button>Edi</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostCard;