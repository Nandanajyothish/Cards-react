


import React from 'react'
import { Card ,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { pdata } from './Product.data';






const Cards = () => {
  const[items,setItems]=useState(pdata);
  
  const decqty=(id)=>{
    const newItem = items.map((items)=>
    items.id === id  && items.qty > 1?{...items,qty:items.qty - 1}:items);
    setItems(newItem);
  };

  const incqty=(id)=>{
    const newItem = items.map((items)=>
    items.id === id ?{...items,qty:items.qty + 1}:items);
    setItems(newItem);
  };
  
  

  return (

    <div className='d-inline-flex'>
      
    
      {items.map((items) => (
        <div>
        
      <Card style={{width:'13rem'}}>
      <Card.Img 
      style={{height:'13rem'}}
      className='p-2'
      variant="top"
      src={require( `./Images/${items.Image}`)}/>


      <Card.Body>
        <Card.Title style={{color:'chocolate9'}}>{items.model}</Card.Title>
        <Card.Text>
          {items.desc}
        </Card.Text>
        <h5> price:{items.price}</h5>
        <div>
          <p>qty:  
            <Button
            onClick={()=>  decqty(items.id)}
            className='m-1'>-</Button>{items.qty}
            <Button 
            onClick={()=>  incqty(items.id)}
            className='m-1'>+</Button>
          </p>
        </div>
        <Button variant='primary'>Add to Cart</Button>
      </Card.Body>
    </Card>
</div>
      ))}
      
     



    </div>
  )
}

export default Cards