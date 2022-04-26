import React from 'react'
import Like from './Like'

const LikeCard = () => {
 
  let Data =  JSON.parse(localStorage.getItem('sendData'))
  const deleteHandler=(param)=>{
    console.log('hii')
    Data.splice(param,1)
    localStorage.setItem('sendData',JSON.stringify(Data))
    alert(`unlike${Data[param].name}`)
   };

  return (
    <div className='dispaly-cards'>
      {
        Data.map((ele,index)=>{
          
          return (
            <div>
            <Like deleteHandler={deleteHandler} ele={ele} index={index}/>
            </div>
            )
        })

      }
    </div>
  )
}

export default LikeCard ;