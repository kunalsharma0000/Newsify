import React, { useEffect, useState } from 'react'
import home from '../../../assests/home_1.jpg'
import { Link } from 'lucide-react'
import tesla from '../../Home/JSON/tesla.JSON'
import top from '../../Home/JSON/topbusiness.JSON'
import {Image} from  'antd';

export default function New() {
  const[tops,setTop]=useState([])
  useEffect(()=>{
          let response = fetch(top)
          
          .then(response=>{
            return response.json()
          })
          .then(datas=>{
            setTop(datas)
            console.log(tops)
          })
  },[])
  const[teslas,setTesla]=useState([])
  useEffect(()=>{
         let res = fetch(tesla)
         .then(res=>{
          return res.json()
         })
         .then(data=>{
          setTesla(data)
          console.log(teslas)
         })
  },[])
  return (
            <>
              <div className="container">
                <div className="row">
                <div className="col-xl-12">
                   <div className="news">
                   <div className="card">
                <div className="card-body">
                    <div className="row">
                      <div className="col-xl-6">
                      {teslas.articles?.map((item,i)=>{
                        return(
                          <div className="row">
                          <div className="col-xl-4">
                          <Image
                          src={item.urlToImage || home}
                          />
                          </div>
                          <div className="col-xl-8 text-black">
                            <p className='font-bold'>{item?.title}</p>
                            <div className="para">
                            <p>{item?.description}
                            <Link to={item?.url} target='blank' className='px-4' > Read More</Link></p>
                            </div>
                          </div>
                        </div>
                        )
                      })}
                       
                      </div>
                      {/*  */}
                      <div className="col-xl-6">
                         <div className="card bg-black shadow-lg">
                          <div className="card-body text-white">
                          {tops.articles?.map((item,i)=>{
                            return(
                              <div className="row">
                              <div className="col-xl-4">
                                <img src={item?.urlToImage || home}  alt="" />
                              </div>
                              <div className="col-xl-8">
                                <p className='text-red-600'>{item?.title}</p>
                                <div className="para">
                                  <p>{item?.description}</p>
                                </div>
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
            </>
    )
}
