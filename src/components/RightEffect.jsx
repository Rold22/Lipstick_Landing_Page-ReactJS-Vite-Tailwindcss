import { useState, useEffect } from 'react';

const RightEffect = () => {
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* 750px */
  return (
    <div >
      <div className=' w-[100%]  h-screen relative  '>
        <img
          src="/src/assets/cloud-b.png"
          alt="Image 1"
          className="absolute z-[30] top-[45%] w-[100%] h-[200px]  object-content"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        />
          <img
          src="/src/assets/cloud-m.png"
          alt="Image 1"
          className="absolute z-[20] top-[25%] w-[100%] h-[500px]  object-cover"
          style={{
            transform: `translateY(${scrollY * 0.7}px)`,
          }}
        />
        <img
          src="/src/assets/cloud-t.png"
          alt="Image 1"
          className="absolute z-[18] top-[2%] w-[100%] h-[700px]  object-cover"
          style={{
            transform: `translateY(${scrollY * 0.9}px)`,
          }}
        />
        <img
          src="/src/assets/red-l.png"
          alt="Image 3"
          className="absolute z-[20] top-[0%] left-[65%] w-[250px] h-[450px]  object-contain"
          style={{
            transform: `translateY(${scrollY * 0.9}px)`,
          }}
        />
      </div>
    </div>
  )
}

export default RightEffect