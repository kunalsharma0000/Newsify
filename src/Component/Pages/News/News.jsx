import React, { useEffect, useState } from 'react'
import '../../Home/News.css'
import home from '../../../assests/home_1.jpg'
import {Link} from  "react-router-dom"
import { CloudCog } from 'lucide-react'
import json from '../../Home/JSON/wallstreet.JSON'
import Apple from '../../Home/JSON/Apple.JSON'
import {Image} from 'antd'
import New from './New'
import Navbar from '../../Home/Navbar'
import { useTodo } from '../../../TodoProvider'
export default function News() {   
  const{lists,setList} = useTodo()
  
 

  const [latest , setLatest] = useState([])   
  useEffect(()=>{
     let response = fetch(Apple)
     .then(response=>{
      return response.json();
     })
     .then(datas=>{
      setLatest(datas)
      // console.log(latest)
     })

  },[])
  const[news,setNews]= useState([])
  useEffect(()=>{
    let res = fetch(json)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      setNews(data)
      // console.log(news.articles)
    })
  },[])
  return (
    <>
   
  {/* <Navbar/> */}
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="news-section w-full h-full">
              <div className="card shadow-lg my-4">
                <div className="card-body">
                    <div className="row">
                      <div className="col-xl-8">
                      {lists?.map((item,i)=>{
                return(
                  <>
                  
                       <div className="row" key={i}>
                        <div className="col-xl-3">
                          <div className="rotate img">
                            <img src={item?.urlToImage || home} alt="" />
                            
                          </div>
                        </div>
                        <div className="col-xl-9">
                           <div className="heading text-black font-bold">
                            <p >{item?.title}</p></div>
                            <div className="para">
                            <p>{item?.Descriptions}
</p>
                            </div>
                        </div>
                       
                      </div>
                       </>
                )
              })}

                      {
                        news.articles?.map((items,i)=>{
                          return(
                            
                          <div className="row" key={i}>
                        <div className="col-xl-3">
                          <div className="rotate img">
                            {/* <img src={item?.urlToImage || home} alt="" /> */}
                            <Image
                            src={items?.urlToImage || home}
                            />
                          </div>
                        </div>
                        <div className="col-xl-9">
                           <div className="heading text-black font-bold">
                            <p >{items?.title}</p></div>
                            <div className="para">
                            <p>{items?.content}
                            <Link to={items?.url} target='blank' className='px-4' > Read More</Link>
</p>
                            </div>
                        </div>
                       
                      </div>
                          )
                        })
                      }
                     
                      </div>
                      {/*  */}
                      
                      <div className="col-xl-4">
                      <div className="card bg-black">
                      <div className="card-body text-white">
                       {latest.articles?.map((item,i)=>{
                                 console.log(item)
                        return(
                        <div className="row" key={i}>
                         
                         <div className="col-xl-3">
                        <Image
                        src={item?.urlToImage || home}
                        />
                        </div>
                        <div className="col-xl-9">
                          <p>{item?.title}
                             <Link to={item?.url} className='px-3' target='blank'>Read More</Link>
                          </p>
                        </div>
                       </div>
                       
                      
                        )
                       })}
                       </div>

                       </div>
                       </div>



                      {/*  */}
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <New/>

{/*  */}




 


    </>
  )
}
