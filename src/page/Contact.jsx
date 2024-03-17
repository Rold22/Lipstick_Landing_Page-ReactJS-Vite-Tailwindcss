
import { FaLongArrowAltRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className='bg-zinc-900  h-[200px] w-full text-white overflow-hidden sm-max:h-[350px]'>
      <h1 className='text text-center'>contact</h1>
        <div className="gradient1 h-[5px] w-[200px] rounded-sm mx-[43%] mt-[2px] sm-max:ml-[8.5rem]"></div>
      <form className='flex justify-center gap-[2rem] pt-[2.5rem] sm-max:block sm-max:ml-[10%]'>
        <input
          type="text"
          placeholder=' email@gmail.com'
          className=' bg-zinc-800  h-[40px]  outline-none  rounded-sm' 
        />
        <FaLongArrowAltRight
          className='size-8 mt-1'
          style={{ color: '#e41341' }}
        />
        <input type="text"
          placeholder=' Leave a comment..."'
          className=' bg-zinc-800  h-[40px]  outline-none  rounded-sm' 
        />
        <FaLongArrowAltRight
          className='size-8 mt-1'
          style={{ color: '#e41341' }}
        />
        <button className='btn mt-[-0.10rem] uppercase'>Send</button>
      </form>
    </div>
  )
}

export default Contact