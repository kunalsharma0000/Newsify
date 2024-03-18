import React, { useEffect, useState } from 'react'
import home from '../../assests/home_1.jpg'
import './News.css'
import {Image} from 'antd'
import json from './JSON/Apple.JSON'
import jsons from './JSON/topbusiness.JSON'
import teslas from './JSON/tesla.JSON'
// import home from '../../assests/home_1.jpg'

export default function Sportlight() {
    const [tesla,setTesla] = useState([])
    useEffect(()=>{
        let response = fetch(teslas)
        .then(response=>{
            return  response.json();
        })
        .then(data=>{
            setTesla(data.articles)
            console.log(tesla)
        })
    },[])
    const[us,setUs]=useState([])
    useEffect(()=>{
        let ress= fetch(jsons)
        .then(ress=>{
            return ress.json();
        })
        .then(data=>{
            setUs(data.articles)
            // console.log(us)
        })
    },[])

    const[sportlight,setSport] = useState([])
       useEffect(()=>{
        let res = fetch(json)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setSport(data.articles)
            // console.log(sportlight)
        })
       },[])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                    <div className="sport-section">
                        <div className="card shadow-lg ">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="card-title text-red-600 font-bold">About Top MNC</div>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-8 col-sm-6">
                                                <div className="rotate-img">
                                                    <Image
                                                    src={sportlight[3]?.urlToImage}
                                                    />  
                                                </div>
                                                <h2 className='mt-3 text-primary mb-2'>
                                                   {sportlight[3]?.title} 
                                                </h2>
                                                <p className='my-3 fs-15'>
                                                   {sportlight[3]?.description}
                                                </p>
                                                <a href={sportlight[3]?.url} target='blank' className='font-bold fs-16 text-red-700'>Read More</a>
                                                {/*  */}

                                                <div className="rotate-img">
                                                    <Image
                                                    src={sportlight[6]?.urlToImage}
                                                    />
                                                </div>
                                                <h2 className='mt-3 text-primary mb-2'>
                                                   {sportlight[6]?.title} 
                                                </h2>
                                                <p className='my-3 fs-15'>
                                                   {sportlight[6]?.description}
                                                </p>
                                                <a href={sportlight[6]?.url} target='blank' className='font-bold fs-16 text-red-700'>Read More</a>
                                            </div>
                                            <div className="col-xl-6 col-lg-8 col-sm-6">
                                                <div className="border-bottom pb-3 mb-3">
                                                    <h3 className='font-bold mb-0'>{sportlight[0]?.title} </h3>
                                                    <p className='mb-0 pt-4'>{sportlight[0]?.description}</p>
                                                </div>
                                                <div className="border-bottom pb-3 mb-3">
                                                    <h3 className='font-bold mb-0'>{sportlight[1]?.title} </h3>
                                                    <p className='mb-0 pt-4'>{sportlight[1]?.description}</p>
                                                </div>
                                                <div className="border-bottom pb-3 mb-3">
                                                    <h3 className='font-bold mb-0'>{sportlight[2]?.title} </h3>
                                                    <p className='mb-0 pt-4'>{sportlight[2]?.description}</p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-xl-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="card-title text-red-600 font-bold">Us Market</div>
                                                <div className="border-bottom pb-3">
                                                    <div className="rotate-img">
                                                        <Image
                                                        src={us[0]?.urlToImage || home}
                                                        />
                                                    </div>
                                                    <p className=' font-bold mb-0 mt-3'>
                                                        {us[0]?.title || 'Author'}
                                                    </p>
                                                </div>
                                                <div className="border-bottom pb-3">
                                                    <div className="rotate-img">
                                                        <Image
                                                        src={us[1]?.urlToImage || home}
                                                        />
                                                    </div>
                                                    <p className=' font-bold mb-0 mt-3'>
                                                    {us[1]?.title || 'Author'}

                                                    </p>
                                                </div>
                                                <div className="border-bottom pb-3">
                                                    <div className="rotate-img">
                                                        {/* <img src={home} alt="" /> */}
                                                        <Image
                                                        src={us[2]?.urlToImage || home}
                                                        />
                                                    </div>
                                                    <p className=' font-bold mb-0 mt-3'>
                                                    {us[1]?.title || 'Author'}

                                                    </p>
                                                </div>

                                            </div>
                                            <div className="col-sm-6">
                                                <div className="card-title">About Tesla</div>
                                                <div className="row">
                                                    <div className="col-sm-12 p-0">
                                                        <div className="border-bottom pb-3">
                                                            <div className="row">
                                                                <div className="col-sm-5 pr-2">
                                                                    <div className="rotate-img">
                                                                        {/* <img src={home} alt="" width={150} /> */}
                                                                   <Image 
                                                                   src={tesla[1]?.urlToImage}
                                                                   />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-7 pl-2">
                                                                    <p className=' font-bold mb-0'> {tesla[1]?.title}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 p-0">
                                                        <div className="border-bottom pb-3">
                                                            <div className="row">
                                                                <div className="col-sm-5 pr-2">
                                                                    <div className="rotate-img">
                                                                        {/* <img src={home} alt="" width={150} /> */}
                                                                   <Image
                                                                   src ={tesla[2]?.urlToImage || home}
                                                                   />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-7 pl-2">
                                                                    <p className=' font-bold mb-0'>{tesla[2]?.title}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 p-0">
                                                        <div className="border-bottom pb-3">
                                                            <div className="row">
                                                                <div className="col-sm-5 pr-2">
                                                                    <div className="rotate-img">
                                                                        {/* <img src={home} alt="" width={150} /> */}
                                                              <Image
                                                              src={tesla[5]?.urlToImage || home}
                                                              />     
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-7 pl-2">
                                                                    <p className=' font-bold mb-0'>{tesla[5]?.title}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 p-0">
                                                        <div className="border-bottom pb-3">
                                                            <div className="row">
                                                                <div className="col-sm-5">
                                                                    <div className="rotate-img">
                                                                        {/* <img src={home} alt="" width={150} /> */}
                                                             <Image 
                                                             src={tesla[7]?.urlToImage || home}
                                                             />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-7">
                                                                    <p className=' font-bold mb-0'>{tesla[7]?.title}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*  */}
                                                <div className="row">
                                                    <div className="col-sm-12 p-0">
                                                        <div className="border-bottom pb-3">
                                                            <div className="row">
                                                                <div className="col-sm-5 ">
                                                                    <div className="rotate-img">
                                                                        {/* <img src={home} alt="" width={150} /> */}
                                                             <Image 
                                                             src={tesla[8]?.urlToImage || home}
                                                             />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-7  ">
                                                                    <p className=' font-bold p-0 m-0'>{tesla[8]?.title}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*  */}
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="border-bottom pb-3">
                                                            <div className="row">
                                                                <div className="col-sm-5 ">
                                                                    <div className="rotate-img">
                                                                        {/* <img src={home} alt="" width={150} /> */}
                                                             <Image 
                                                             src={tesla[12]?.urlToImage || home}
                                                             />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-7 ">
                                                                    <p className=' font-bold mb-0'>{tesla[12]?.title}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*  */}
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="border-bottom pb-3">
                                                            <div className="row">
                                                                <div className="col-sm-5 ">
                                                                    <div className="rotate-img">
                                                                        {/* <img src={home} alt="" width={150} /> */}
                                                             <Image 
                                                             src={tesla[10]?.urlToImage || home}
                                                             />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-7 ">
                                                                    <p className='font-bold mb-0'>{tesla[10]?.title}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

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
