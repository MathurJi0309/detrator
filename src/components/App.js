//..........................................................import component and dependencies......................................................
import { useEffect, useState } from 'react';
import axios from 'axios'
import '../App.css';
import Card from './Card'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Navbar from './Header';
import Footer from './Footer';

//...................................................................App component .............................................................


function App() {
  const[posts,setPosts]= useState([]);
  const [loading,setLoading]=useState(true)

//................................................................Fetching with Axios.............................................................


  const fetchPost=async ()=>{
    const response=await axios.get("https://dummyjson.com/posts");
    setPosts(response.data.posts);
    console.log(response.data.posts)
    setLoading(false);
  }
  useEffect(()=>{
    fetchPost();
  },[]);

//..................................................................here is JSX of page......................................................


  return (
<>

{/* .....................................................................lazy loder............................................................ */}


{loading &&      <div className='d-flex align-items-center m-20'>




 <Box sx={{ width: '100%' }} className='m-20'>
      <LinearProgress />
    </Box>

</div>
}

{/* .....................................................................post show after fetch in the card............................................................ */}



{!loading && 
<div className='mainDiv'>
  <Navbar/>
  <div className='mainD'>
      { posts.map((post,index)=>{
            return <Card post={post} key={index}/>
          })
      }
  </div> 
  <Footer/>   
</div>
}
</>
  );
}

export default App;
