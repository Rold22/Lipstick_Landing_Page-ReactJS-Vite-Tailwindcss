import React from 'react'
import { FaStar } from "react-icons/fa6";

const reviewData = [
  {
    name: "Sofia Banner",
    icon: 5,
    desc: "This lipstick is simply stunning! It's so easy to apply, and the color is perfect for a night out. I'm completely satisfied with it!",
    img: "/src/assets/w1.jpg"
  },
  {
    name: "Isabella Grace",
    icon: 4,
    desc: "I love this lipstick! It's become my new favorite. Not only is it beautiful, but it's also very long-lasting. It stays fresh all day, and it looks perfect even after dinner!",
    img: "/src/assets/w2.jpg"
  },
  {
    name: "Savannah Rose",
    icon: 5,
    desc: "Fantastic product! I feel amazing wearing it. The color is gorgeous, and it goes on so smoothly. I feel like I'm on the runway all day! I'm very happy with it.",
    img: "/src/assets/w3.jpg"
  }
]

const Reviews = () => {
  return (
    <div className='" h-[100%] overflow-hidden w-full bg-zinc-900  relative"'>
      <h1 className='text'>Reviews</h1>
      <div className="gradient1 h-[5px] w-[200px] rounded-sm mx-[43%] mt-[2px] mb-[2.5rem] sm-max:ml-[9rem]"></div>
      {/* REVIEW */}
      <div className='flex gap-[4rem] justify-center mb-[5rem]  sm-max:block   sm-max:ml-[20%]'>
        {reviewData.map((rev, index) => {
          //STARS LOGIC//
          const stars = Array.from({ length: rev.icon }, (_, i) => (
            <FaStar key={i} style={{ color: "#ff0000"}} />
          ));
          return (
            <div key={index}
              className=
              'w-[300px] h-[400px] bg-white rounded-md flex flex-col  items-center justify-center hover:hover1 hover:gradient2 hover:text-white  sm-max:mb-[1.5rem]' 
            >
                <img src={rev.img}
                  className="w-[100px] h-[100px] object-cover rounded-full mt-6"
                alt="" />
              <h1 className="text-center mt-4 font-bold  " >{rev.name}</h1>
              <div className='flex justify-center mt-2 p-1'>
                {stars}
              </div>
              <p className='p-6 text-center mt-[-10px]'>
                {rev.desc}
              </p>
              </div>
          )
      })}
      </div>
    </div>
  )
}

/*    <div className='grid justify-center'>
        <div className='w-[300px] h-[400px] bg-white rounded-md flex flex-col items-center justify-center'>
          <img src="/src/assets/w2.jpg"
            className="w-[100px] h-[100px] object-cover rounded-full mt-6"
            alt="" />
          <h1 className="text-center mt-4 font-bold" >Sofia Banner</h1>
          <div className='flex justify-center mt-2 p-1'>
            <FaStar style={{ color: "#ff0000"}}/>
            <FaStar style={{ color: "#ff0000"}}/>
            <FaStar style={{ color: "#ff0000"}}/>
            <FaStar style={{ color: "#ff0000"}} />
          </div>
          <p className='p-6 text-center mt-[-10px]'>
            {"This lipstick is simply stunning! It's so easy to apply, and the color is perfect for a night out. I'm completely satisfied with it!"}
          </p>
        </div>
      </div> */

export default Reviews