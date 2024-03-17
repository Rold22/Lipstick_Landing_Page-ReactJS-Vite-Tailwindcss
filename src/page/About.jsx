

const About = () => {
  return (
    <div className=" h-[100vh] overflow-hidden w-[100%] bg-zinc-900  relative" id="about">
      <div className=" flex gap-8  " >
        <div className="flex ml-[5rem]" >
          <img src="/src/assets/cbg.png"
            className="w-[650px] h-[650px] mt-[2rem] sm-max:hidden"
            alt="" />
        </div>
        <div className=" ml-[2rem] mt-[2rem] sm-max:ml-[-40px]">
          <h3 className=" mt-[5rem] text-4xl font-bold text-white tracking-[5px] uppercase  text-center z-10 sm-max:ml-[-40px]  ">About</h3>
          <div className="gradient1 h-[5px] w-[200px] bg-zinc-50 rounded-sm mx-[34%] mt-1 sm-max:ml-[5rem]"></div>
          <p className="p-text mt-[4rem] ">
            <span className=" font-bold">LUSCIOUS COMFORT:</span>
          <br/>
          - Formulated with 80% conditioning ingredients
          </p>
          <p className="p-text mt-7">
            <span className="font-bold">SOFT, FULLER-LOOKING LIPS:</span>
            <br/>
            -Glides on smoothly to visibly minimize lines for soft, fuller-looking lips
          </p>
          <p className="p-text  mt-7">
            <span className="font-bold">MORE SHADES, MORE PLAY:</span>
            <br/>
            -6 NEW colors, 72 iconic shades in all
          </p>
        </div>
            {/* Animated Blob */}
        <div className=" ball h-[300px] w-[350px] rounded-full absolute top-[20rem] left-[1100px] blur-3xl opacity-50">
          
        </div>
    
      </div>
    </div>
  )
}

export default About