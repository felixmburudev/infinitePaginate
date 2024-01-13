import { useEffect, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton from '../components/Skeleton';

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] =useState('')  
  const fetchData = async ()=>{   
    try {
      const response = await fetch(`http://localhost:3002/?page=${page}`);
      const newData = await response.json();
 setTimeout(()=>{
      if (newData.length === 0) {
        setHasMore(false);
      } else {     
        setItems(prevItems => [...prevItems, ...newData]);
        setPage(d => d + 1);    
      }}, 3000)
    } catch (error) {
        setError('Error fetching data:', error)      
      setHasMore(false); 
     }
    }
useEffect(()=>{
  fetchData()
}, [])
  return (<>
          <h2>REACT INFINITE SCROLLING AND PAGINATION</h2>
  <div>{
    `error ${error} and the remaing items is ${hasMore}`
}</div>
    <InfiniteScroll
      dataLength={items.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<Skeleton/>} >
      {items.map((item, index) => (
        <div key={index} style={{display:"flex", flexDirection: "column", alignItems:"center", height: '200px', border: '3px solid #ccc', margin: '10px 0' }}>        
          <h2 style={{height: '30px', width: '80%', }}>{index}</h2>
          <h4 style={{height: '30px', width: '80%', }}>{item.title}</h4>
          <p style={{height: '100%', width: '80%', }}>{item.description}</p>
        </div>
      ))}
    </InfiniteScroll></>
  );
};
export default InfiniteScrollComponent;
