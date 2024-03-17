import { useState } from "react";
import Data from "../data"

const Product = () => {
  const [selectedColor, setSelectedColor] = useState(1); //COLOR ID:id
  const [ballColor, setBallColor] = useState(Data.product.colors[selectedColor - 1].hexCode);
  const [value, setValue] = useState(1);

   const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Find the data for the given color !!!!!!!!
  const selectedProduct = Data.product;
  //Product for lipstick data.. -
  const selectedNameInfo = selectedProduct.names.find(name => name.id === selectedColor);
  //Fin name for id..-
  const selectedImageInfo = selectedProduct.images.find(image => image.id === selectedColor);
//Find IMG for id..-
  const changeColor = (newColor) => {
    setSelectedColor(newColor);
    setBallColor(Data.product.colors[newColor - 1].hexCode);
  };

  return (
    <div id="product" 
      className=" h-[100%] overflow-hidden w-[100%] bg-zinc-900 relative text-white">
      <h1 className="text">Lipstick</h1>
      <div className="gradient1 h-[5px] w-[200px] rounded-sm mx-[43%] mt-1 sm-max:ml-[9rem]" ></div>
      
      {/* Lipstick */}
      <div className="flex justify-center gap-[5rem] sm-max:gap-0 px-5">
        {/* IMG */}
        <div className="border mt-[5rem] border-2 rounded-2 h-[450px]">
          <img src={selectedImageInfo.url} 
            className="w-[350px] h-[400px] object-contain mt-[1.5rem]"
            alt="" />
        </div>
        {/* INFO*/}
        <div className="mt-[5rem] ml-[5rem]">
          <h1 className="text2 mb-8">{selectedNameInfo.item} Lipstick</h1>
          <p className="text-white font-md tracking-[2px] mb-8">
            Long Lasting Lip Gloss, 
            <br />
            Lipstick Makeup Vintage Lipstick Cosmetics
            <br />
            Party Makeup Gift, Professional Foundation for Women 
            <br />
            Prom Party Cosplay, Special Effects Make Up
          </p>
          <div className="ml-[-15px]">
          {selectedProduct.colors.map(color => (
            <button
            className="w-[25px] h-[25px] bg-white rounded-full mb-4 cursor-pointer  ml-[10px]"
            key={color.id}
            onClick={() => changeColor(color.id)}
            style={{ backgroundColor: color.hexCode }}
          >
          </button>
          ))}
          </div>
          <br />
          <p className="font-md tracking-[2px] mb-4 uppercase font-bold">How many ?</p>
          <input type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="20"
            value={value}
            onChange={handleChange}
            className="gradient1 mb-6 bg-transparent border-black rounded-sm text-right"
          ></input>
          <p className="font-bold text-lg mb-4">${selectedProduct.price}</p>
          <button className="btn uppercase mb-[5rem]">Buy</button>
        </div>
        {/* Animate */}
        <div
          className=" h-[300px] w-[450px] rounded-full absolute top-[30rem] left-[1200px] blur-3xl opacity-500 "
          style={{ backgroundColor: ballColor }}>
        </div>
      </div>
    </div>
  )
}

export default Product

