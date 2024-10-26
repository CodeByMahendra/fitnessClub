import React from 'react'
import {Check} from 'lucide-react'
import { Link } from 'react-router-dom'

const OurServices = () => {
    const pricing = [
        {
            imgUrl:"/pricing.jpg",
            title:"QUATERLY",
            price:18000,
            length:3
        },
        {
            imgUrl:"/pricing.jpg",
            title:"HALF_YEARLY",
            price:48000,
            length:6
        },
        {
            imgUrl:"/pricing.jpg",
            title:"Yearly",
            price:67000,
            length:12
        },
    ]
  return (
       <section className='pricing'>
        <h1>THE FITNESS GYM PLANS</h1>
        <div className='wrapper'>
            {
                pricing.map(element=>{
                    return (
                        <div className='card' key={element.title}>
                        <img src={element.imgUrl} alt={element.title}/>
                        <div className='title'>
                            <h1>{element.title}</h1>
                            <h1>Package</h1>
                            <h3>Rs {element.price}</h3>
                            <p>For {element.length}</p>
                        </div>
                        <div className='description'>
                        <p>
                            <Check/> Equipment
                        </p>
                        <p>
                            <Check/> All day Free trainning
                        </p>
                        <p>
                            <Check/> Free Restroom
                        </p>
                        <p>
                            <Check/> 24/7 Skilled support
                        </p>

                        <p>
                            <Check/> 20 days Freezing Option
                        </p>
                        <Link to={"/contact"}>Join Now</Link>
                        </div>
                        </div>

                    )
                })
            }
        </div>
       </section>
  )
}

export default OurServices
