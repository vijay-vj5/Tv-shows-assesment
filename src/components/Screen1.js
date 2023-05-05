import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Screen1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
       <h1 className='text-center'>Show List</h1>
       <CardGroup className="d-flex gap-5">
       {data.map(item => (
          <list key={item.show.id}>
            <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={item.show.image?.medium} alt={item.show.name}  />
       <Card.Body>
         <Card.Title>{item.show.name}</Card.Title>
         
         <Link to={`/summary/${item.show.id}`}>summary</Link>
      
       </Card.Body>
     </Card> 
           

            
          </list>
        ))}
     
      </CardGroup>
    </div>
    
  );
}

export default Screen1;



