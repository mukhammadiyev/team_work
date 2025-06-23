import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import PostCard from '../../components/postCard/PostCard'

const Home = () => {

  const [users,setUsers] = useState([])

  const fetchUSer = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await request.json()
    setUsers(data)
  }

  useEffect(()=>{
    fetchUSer()
  },[])

  return (
    <div>
        <Header/>
        <PostCard users={users}/>
    </div>
  )
}

export default Home;