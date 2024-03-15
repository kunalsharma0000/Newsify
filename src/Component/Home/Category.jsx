import React, { useEffect, useState } from 'react'
import {Image} from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';
import './News.css'
import home from '../../assests/home_1.jpg'
import json from './JSON/tesla.JSON'


export default function Category() {
    const[tesla,setTesla] = useState([])
    //fetching data from the api
    useEffect(()=>{
          let res = fetch(json)
          .then(res=>{
            return res.json()
          }).then(data=>{
            setTesla(data.articles)
            // console.log(tesla)
          })
          
    },[])
  return (
    <>
    <div className="container">
    <div className="row">
    <div class="col-lg-3" >
    <div class="card bg-black cards-section shadow-lg" id="stickyDiv">
        <div class="card-body">
            <h2 class='text-red-500 font-bold'>Category</h2>
            <ul class='vertical-menu'>
                <li><a href="#">Tesla</a></li>
                <li><a href="#">Top Business USA</a></li>
                <li><a href="#">Wall Street</a></li>
                <li><a href="#">Top MNC</a></li>
            </ul>
        </div>
    </div>
</div>


        <div className="col-lg-9 stretch-card grid-margin">
            <div className="card shadow-lg"> 
                <div className="card-body">
                <div className="row">
                    <div className="col-sm-4 grid-margin">
                        <div className="position-relative">
                            <div className="rotate-img w-72">
                                <Image className='rounded-lg'
                                src={tesla[1]?.urlToImage}
                                />
                            </div>
                            <div className="badge-positioned">
                                <span className='badge badge-danger font-bold'>Flash News</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 grid-margin">
                    <h1>{tesla[1]?.author}</h1>
                        <h2 className='mb-2 font-bold'>
                            {tesla[1]?.title}
                        </h2>
                        <p className='mb-2 font-medium text-red-600'>{tesla[1]?.description}</p>
                       <span className='mb-0 '>
                        {tesla[1]?.content}
                       </span>
                       <a href={tesla[1]?.url} target='blank'className='pl-3 font-bold'>Read More</a>
                    </div>
                </div>
                {/*  */}

                <div className="row">
                    <div className="col-sm-4 grid-margin">
                        <div className="position-relative">
                            <div className="rotate-img w-72">
                                <Image className='rounded-lg'
                                src={tesla[4]?.urlToImage}
                                />
                            </div>
                            <div className="badge-positioned">
                                <span className='badge badge-danger font-bold'>Flash News</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 grid-margin">
                    <h1>{tesla[4]?.author}</h1>
                        <h2 className='mb-2 font-bold'>
                            {tesla[4]?.title}
                        </h2>
                        <p className='mb-2 font-medium text-red-600'>{tesla[1]?.description}</p>
                       <span className='mb-0 '>
                        {tesla[4]?.content}
                       </span>
                       <a href={tesla[4]?.url} target='blank'className='pl-3 font-bold'>Read More</a>
                    </div>
                </div>
                {/*  */}
                <div className="row">
                    <div className="col-sm-4 grid-margin">
                        <div className="position-relative">
                            <div className="rotate-img w-72">
                                <Image className='rounded-lg'
                                src={tesla[5]?.urlToImage}
                                />
                            </div>
                            <div className="badge-positioned">
                                <span className='badge badge-danger font-bold'>Flash News</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 grid-margin">
                    <h1>{tesla[5]?.author}</h1>
                        <h2 className='mb-2 font-bold'>
                            {tesla[5]?.title}
                        </h2>
                        <p className='mb-2 font-medium text-red-600'>{tesla[1]?.description}</p>
                       <span className='mb-0 '>
                        {tesla[5]?.content}
                       </span>
                       <a href={tesla[5]?.url} target='blank'className='pl-3 font-bold'>Read More</a>
                    </div>
                </div>
                {/*  */}
                <div className="read-more flex justify-center">
                <a href="#" className=' bg-black p-2 text-white rounded-sm   '>Read More</a>
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
