import React, { useEffect,useState } from 'react'
import Apple from '../../Home/JSON/Apple.JSON'
import { CloudCog, Filter } from 'lucide-react';
import {Link} from 'react-router-dom'
import tesla from '../../Home/JSON/tesla.JSON'
import '../../Home/News.css'


export default function Author() {
 
  const[tel,setTel] = useState([])
  useEffect(()=>{
    let response = fetch(tesla)
      .then(response=>{
        return response.json()
      }) .then(data=>{
        setTel(data)
        // console.log(tel)
      })     
  })
  const [author, setAuthor] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(()=>{
    let res = fetch(Apple)
    .then(res=>{
      return res.json();
    }).then(data=>{
      setAuthor(data)
    
    })
  })
  function Filter(event){
    setSearchTerm(event.target.value)
  }
 const Filterresult = author.articles?.filter((item)=>
  item.author.toLowerCase().includes(searchTerm.toLowerCase())
 )
  return (  
    <>
       <section className='author-section p-7'>
       <div className="container">
        <div className="row">
          <div className="col-xl-12 col-sm-12">
            <div className="author-search text-center">
              <input type="search" name="" id="" placeholder='Search Author' value={searchTerm} className='px-3 text-center' onChange={Filter} />
            </div>
             
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="cards py-4">
                <div className="card shadow-lg">
                  <div className="card-body">
                  <div className="row">

                  {
                    Filterresult?.map((items,i)=>
                        <div className="col-xl-3" key={i}>
                      <div className="card shadow-xl bg-black py-0 px-0 my-2">
                        <div className="card-body text-white">
                         <Link className='text-white no-underline' to={`/authors/${items?.source.id}`}> <h4 className='text-center  m-0 '>{items?.author}</h4></Link>
                        </div>
                      </div>
                    </div>
                    )
                  }
                    
                     </div>
                    

                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

       </section>
    </>
  )
}
