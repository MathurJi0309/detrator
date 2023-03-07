
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Card from './Card'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Navbar from './Navbar';


function App() {
  const[posts,setPosts]= useState([]);
  const [post,setPost] =useState(false);
  const [loading,setLoading]=useState(true)
  const [postdetail,setPostdetail] =useState({});
  const fetchPost=async ()=>{
    const response=await axios.get("https://dummyjson.com/posts");
    setPosts(response.data.posts);
    console.log(response.data.posts)
    setLoading(false);
  }
  useEffect(()=>{
    fetchPost();
  },[]);

  const detail= (id)=>{
    const getid=id;
    const postD=posts.filter((item)=>{
      var itemid=item.id;
      if(getid===itemid){
        return item;
      }
    })
    console.log("hi i am here in array",postD[0])
    setPostdetail(postD[0])
    setPost(true)
  }

  return (
<>
{loading &&      <div className='d-flex align-items-center m-20'>

 <Box sx={{ width: '100%' }} className='m-20'>
      <LinearProgress />
    </Box>

</div>
}
{!loading && 
<div className='mainDiv'>
  <Navbar/>
<div className='row'> 
<div className="d-flex flex-wrap col-4  m-2 justify-content-around postList">
      { posts.map((post,index)=>{
            return <Card post={post} key={index} detail={detail}/>
          })
      }
      
    </div>
    <div className='col-7 detail'>
      {
        !post && <div><h5 className='text-center'>No post will be selected</h5></div>
      }
      {
        post && <div className='detailSection'>
          <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{postdetail.title}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>  
      }
    </div>

</div>
</div>
}
</>
  );
}

export default App;
