import React, { useEffect } from 'react'
import  './create.css'
import { useState } from 'react'
import { useTodo } from '../../../TodoProvider'

export default function CreateNews() {
  // const[Title,Settitle] = useState('')
  // const[description,Setdescription] = useState('')
  const[field,setField] = useState({})
  // const[todo,SetTodo] = useState([])
  const{lists,setList} = useTodo()


  function valueUpdated(){
   setList([...lists,field])
  //  localStorage.setItem('todolist',JSON.stringify(field))
  
}
useEffect(()=>{
   localStorage.setItem('todo',JSON.stringify(field))
},[field])
useEffect(()=>{
 let savetodo = JSON.parse(localStorage.getItem('todo'))

  setField(savetodo)
})



  const setFieldValue = (e) => {
    setField({...field, [e.target.name]: e.target.value})
}
  // function removeactivity(i){
  //   const updateremove = lists.filter((ele,id)=> i!==id)
  //   setList(updateremove)
  // }
 
 
  return (
    <>
      <section className='createnews '>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 p-0">
              <div className="create-news text-center pt-4">
                <h1 className='pb-3'>Create Your Own News</h1>
              </div>
              <div className="card shadow-lg flex justify-center" style={{width:'900px', marginLeft:'200px'}}>
                <div className="news-create text-center pt-5 card-body ">
                <label style={{fontSize:'30px', marginRight:'20px'}} >Title:</label>
                  <input type="text" name='title' onChange={setFieldValue} placeholder='Enter Your News Title?' style={{width:'300px', textAlign:'center',height:'40px'}} /> <br />
                  <label className='pt-4'style={{fontSize:'30px', marginRight:'20px'}} >Description:</label>
                  <input type="text" name='Descriptions' onChange={setFieldValue} placeholder='Enter Your News Description' style={{width:'400px',height:'100px',textAlign:'center',marginTop:'30px'}} /> <br />
                  <label className='pt-4' style={{fontSize:'30px',marginRight:'20px'}} >Upload Image:</label>
                  <input type="file" /> <br />

                  <button className='btn-create mt-4' onClick={valueUpdated}>Create</button>
                </div>
              </div>
              {/* {lists.map((item,i)=>{
                return(
                  <>
                  <div  key={i}>
                       <h1>{item.title}</h1>
                       <h1>{item.Descriptions}</h1>
                       <button onClick={()=>removeactivity(i)}>Remove</button>
                       </div>
                       </>
                )
              })} */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
