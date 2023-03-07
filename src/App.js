
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Card from './Card'

function App() {
  const[posts,setPosts]= useState([]);
  const fetchPost=async ()=>{
    const response=await axios.get("https://dummyjson.com/posts");
    setPosts(response.data.posts);
    console.log(response.data.posts)
  }
  useEffect(()=>{
    fetchPost();
  },[]);

  return (
    <div className="App">
      {
        posts.map((post,index)=>{
            return <Card post={post} key={index}/>
          })
      }
    </div>
  );
}

export default App;
