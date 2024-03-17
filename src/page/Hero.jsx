import RightEffect from "../components/RightEffect"


const Hero = () => {
  return (
    <div
      id="home"
      className=" h-[100vh] overflow-hidden w-[100%] bg-zinc-900 relative">
      <div >
      {/*  LEFT */}
        <div className=" absolute z-[100] mt-[2%]  ml-[10rem]  sm-max:ml-4">
          <h1 className="  text-white  text-4xl font-bold tracking-[10px] uppercase rounded-sm  ">Loreom Lipstick</h1>
          <p className=" font-light font-bold text-white tracking-[5px] mt-8  ">
            <span className="bg-black ">If you use this lipstick, your beautiful lips will </span>
            <br/>
            <span className="bg-black ">will remain shiny even after the date,</span>
            <br />
            <span className="bg-black ">no matter what happens on the date...</span>
          </p>
        </div>
   {/*      Right */}
        <div className="mt-[10rem] " >
          <RightEffect/>
         {/*  <img src="/src/assets/lipscitonly.png"
            className="w-[400px] h-[350px] object-contain z-4 relative mt-[2rem] ml-[10rem]"
            alt="" /> */}
        </div>
        <div className=" ball2 h-[300px] w-[500px] from-primary to-secondary rounded-full absolute top-[10rem] left-[1000px] blur-3xl opacity-50">
            </div>
      </div>
    </div>
  )
}

export default Hero

{/* <div className="ml-[10rem] mt-[10rem]"> */}