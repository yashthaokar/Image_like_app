import React,{useState} from 'react'
import './Card.css'

const Card = ({ele,state,setState}) => {

  const clickHandler=(param)=>{
    localStorage.setItem('sendData',JSON.stringify(state));
    let newDa = JSON.parse(localStorage.getItem('sendData'));
    console.log(newDa)
    setState([...newDa,param]);
    localStorage.setItem('sendData',JSON.stringify(state));
   };


  return (
    <div className="kuchv">
   <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src = {ele.image} alt="Avatar" style={{width:'300px', height:" 300px" }}/>
    </div>
    <div className="flip-card-back">
      <h1>{ele.name}</h1>
      <h4>{ele.species}</h4>
      <h4>{ele.gender}</h4>
      <h4>{ele.status}</h4>
      <h4>{ele.origin.name}</h4>
    </div>
    
  </div>
  
</div>
<button type="button" class="btn btn-warning" onClick={()=>clickHandler(ele)} >Like!!</button>

    </div>
   

  )
}

export default Card