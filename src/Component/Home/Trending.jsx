import React, { useEffect, useState } from 'react'
import './News.css'
import{Image} from 'antd'
import { ArrowUpRight,ArrowRight, Target } from 'lucide-react'
import json from './JSON/wallstreet.JSON'



export default function Trending() {
    const[trending,setTrending] = useState([])
    useEffect(()=>{
         let res = fetch(json)
         .then(res=>{
            return res.json();
         })
         .then(data=>{
            setTrending(data.articles);
            console.log(trending)
         })
    },[])
  return (
    <>
        <div className="container">
            <div className="row">
            <h1 className='text-red-600 font-bold pt-3'> Trending News </h1>
                <div className="col-xl-12">
                    <div className="trending-section">
                        <div className="row">
                        {/*  */}
                            <div className="col-xl-3  treding">
                            <div className=" rounded-md border">
      
      <Image className=' rounded-t-md '
        src={trending[0]?.urlToImage} />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {trending[0]?.author} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-3 text-lg text-black font-bold">
          {trending[0]?.title}
        </p>
        <div className="mt-4">
        <p className="mt-3 text-sm text-gray-600">
          {trending[0]?.description}
        </p>
        </div>
        
        <a href={trending[0]?.url} target='blank' className='outline-none mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>Read More</a>
      </div>
    </div>
   </div>
                            {/*  */}
                            <div className="col-xl-3 treding">
                            <div className=" rounded-md border">
      
      <Image className=' rounded-t-md'
    
    src={trending[1]?.urlToImage}
  />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {trending[1]?.author} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-2 text-lg text-black font-bold">
          {trending[1]?.title}
        </p>
        <div className="mt-4">
        <p className="mt-4 text-sm text-gray-600">
          {trending[1]?.description}
        </p>
        </div>
        <a href={trending[1]?.url} target='blank' className='outline-none mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>Read More</a>

      </div>
    </div>
   </div>
                            {/*  */}
                            <div className="col-xl-3 treding">
                            <div className=" rounded-md border">
      
      <Image className=' rounded-t-md'
    
    src={trending[3]?.urlToImage}
  />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
        {trending[3]?.author} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p  className="mt-2 w-full text-sm text-black font-bold">
        {trending[7]?.title}
        </p>
        <div className="">
       <p  className="mt-1 text-sm text-gray-600">{trending[3]?.description}</p>
        </div>
        <a href={trending[3]?.url} target='blank' className='outline-none mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>Read More</a>

      </div>
    </div>
   </div>
                            {/*  */}
                            <div className="col-xl-3 treding">
                            <div className="rounded-md border">
      
      <Image className='rounded-t-md '
    
    src={trending[5]?.urlToImage }  />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {trending[5]?.author} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-1 text-lg font-bold text-black">
          {trending[5]?.title}
        </p>
       
              <a href={trending[5]?.url} target='blank' className='outline-none mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>Read More</a>

      </div>
    </div>
   </div>
                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
