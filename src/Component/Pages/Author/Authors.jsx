import React,{useState,useEffect} from 'react'
import home from '../../../assests/home_1.jpg'
import Apples from '../../Home/JSON/Apple.JSON'
import { useParams } from 'react-router-dom';
import{Link} from 'react-router-dom'
import '../../Home/News.css'

export default function Authors() {
  let {id} = useParams()
  console.log(id)
  const [authorss, setAuthorss] = useState([]);
  useEffect(()=>{
    let res = fetch(Apples)
    .then(res=>{
      return res.json();
    }).then(data=>{
      setAuthorss(data.articles)
    
    })
  },[])

  return (
    <>
    <section className='author'>
      <div className="container" style={{display:'flex',justifyContent:'center'}}>
        <div className="row">
          <div className="col-xl-12">
           
                 <div className="row">
                  <div className="col-xl-8" style={{display:'flex',justifyContent:'center'}}>
                  <div className="card shadow-xl flex justify-center text-center m-5" style={{display:'flex',justifyContent:'center'}}>
                  <div className="card-body flex justify-center bg-center">
                    <div className="rotate-img">
                      <img src={authorss[id]?.urlToImage || home} alt="" />
                      <h1>{authorss[id]?.title}</h1>
                      <Link to={authorss[id]?.url} className='font-bold ' target='blank'>Read More</Link>
                    </div>
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
