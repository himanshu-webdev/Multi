import React, { useRef, useState } from 'react';
import logo from '../assets/logo.png';
import { AiOutlineCamera, AiOutlineRight } from "react-icons/ai";

function Welcome({ nextStep, prevStep, handleChange, values }) {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChooseImage = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values); // Handle form submission logic here
    nextStep(); // Proceed to the next step
  };

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen bg-[#FFFFFF] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="mt-4 flex items-center justify-between w-full">
        <img src={logo} className="object-cover w-24 h-20" alt="Logo" />
      </div>
      <div className="ml-4 pt-10  md:pt-20 lg:pt-16 xl:pt-14 w-full h-full max-w-[600px]">
        <div className="text-2xl  md:text-4xl font-bold mb-8">Welcome! Let's create your profile</div>
        <div className="text-gray-500 text-lg md:text-xl font-medium mb-4  md:pb-4 md:mt-[-10px] lg:pb-6 xl:pb-8 ml-1">Let others get to know you better! You can do these later</div>
        
        <div className="flex flex-col space-y-8 md:space-y-10">
          <div className="flex items-center  space-x-4  relative">
            <div className="flex text-lg md:text-2xl  font-bold absolute top-[-15px]">Add an avatar</div>
            <div className="w-32 md:w-40 h-32 md:h-40  rounded-full relative md:mt-10 lg:mt-10 xl:mt-10">
              {selectedImage ? (
                <img 
                  src={selectedImage} 
                  alt="Selected Avatar" 
                  className="w-full h-full rounded-full object-cover" 
                  style={{ objectFit: 'cover' }} 
                />
              ) : (
                <div className="w-full h-full rounded-full border-4 border-dashed border-[#E2E2E2] flex items-center justify-center md:mr-4">
                  <AiOutlineCamera onClick={handleChooseImage} className="text-[#545454] cursor-pointer " size={28}  />
                </div>
              )}
            </div>
            <div className='relative'> 
              <button onClick={handleChooseImage} className="mb-4 md:mb-0 ml-4 md:ml-8 px-4 py-2  border-2 text-black rounded-md font-bold">Choose image</button>
              <input type="file" ref={fileInputRef} className="hidden" onChange={handleImageChange} />
              <AiOutlineRight onClick={handleSubmit} className="text-gray-600 font-extrabold absolute mx-auto ml-4 mt-4 md:ml-8" size={18} />
              <p className='text-gray-500 font-semibold transform translate-x-14 translate-y-3 cursor-pointer'>Or choose one of our defaults</p>
            </div>
          </div>

          <div className='flex flex-col justify-between space-y-4'>
            <div className="text-lg md:text-2xl tracking-tight  font-bold">Add your location</div>
            <input type="text" className="px-4 py-2 bg-transparent border-b border-gray-300 w-full focus:outline-none" placeholder="Enter a location" />
          </div>
        </div>

        <button type="submit" onClick={handleSubmit} className="w-full md:w-1/5 lg:w-1/4 xl:w-1/4 mt-10 mx-auto bg-[#EA4B8B] text-white py-2 rounded-md hover:bg-orange-400 transition duration-300 ">Next</button>
        
      </div>
    </div>
  );
}

export default Welcome;
