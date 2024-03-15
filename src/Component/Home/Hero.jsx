import React, { useEffect, useState } from 'react'
import './News.css'
import { ArrowUpRight, Target } from 'lucide-react'
import {Image} from 'antd'
import '../../../node_modules/antd/dist/antd';
import json from './JSON/topbusiness.JSON'
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Hero() {
  const [news, setnews] = useState([]);
  useEffect(() => {
    let res = fetch(json)
      .then(res => {
        return res.json();
      }).then(data => {
        setnews(data.articles)
      })

  }, [])
  return (
    <>
      <div className="content-wrapper">
        <div className="container">
          <div className="row aos-init aos-animate" data-aos="fade-up">
            <div className="col-xl-8 stretch-card grid-margin hero">
              <div className="position-relative relative rounded-lg ">
                <Image  className='rounded-lg' src={news[3]?.urlToImage} style={{opacity: '0.8', backgroundColor: '#f1f1f1'}}/>
                <div className="banner-content">
                  <div className="badge text-black ">{news[3]?.source.name}</div>
                  <h1 className='mb-0 fs-20 text-black'>{news[3]?.author}</h1>
                  <h4 className='mb-0 text-black'>{news[3]?.description}</h4>
                  <div className="fs-12 mb-4 mt-3 text-black">
                    <a href={news[3]?.url} target='blank' className='font-bold text-white'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 stretch-card grid-margin">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h2 className='text-red-500 font-bold'>Latest news</h2>
                  <div className="d-flex border-bottom-blue pt-3  align-items-center justify-content-between">
                    <div className="pr-3 heading">
                      <h5>{news[0]?.title}</h5>
                      <div className="fs-12">
                        <a href={news[0]?.url} target='blank' className='font-bold text-red-700'>Read More</a>

                      </div>
                    </div>
                    <div className="rotate-img w-72">
                      <Image  className='rounded-lg'  src={news[0]?.urlToImage}/>
                    </div>
                  </div>

                  <div className="d-flex border-bottom-blue  pt-4 align-items-center justify-content-between">
                    <div className="pr-3 heading">
                      <h5>{news[1]?.title}</h5>

                      <a href={news[1]?.url} target='blank' className='font-bold text-red-800'>Read More</a>
                    </div>
                    <div className="rotate-img w-96">
                      <Image  className='rounded-lg'  src={news[1]?.urlToImage}/>

                    </div>
                  </div>

                  <div
                    className="d-flex pt-4 align-items-center justify-content-between">
                    <div className="pr-3 heading">
                      <h5>{news[2]?.title}</h5>
                      <div className="fs-12">
                        <a href={news[2]?.url} target='blank' className='font-bold text-red-600'>Read More</a>

                      </div>
                    </div>
                    <div className="rotate-img w-96">
                    <Image  className='rounded-lg'  src={news[2]?.urlToImage}/>

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
