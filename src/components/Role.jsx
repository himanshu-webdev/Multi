import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { AiOutlineLeft } from 'react-icons/ai';
import cardone from '../assets/card 1.jpg';
import cardtwo from '../assets/card 2.jpg';
import cardthree from '../assets/card 3.jpg';

function Role({ nextStep }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelection = (cardId) => {
    setSelectedCard(cardId);
  };

  const handleSubmit = () => {
    console.log('Selected card:', selectedCard); // Handle form submission logic here
    nextStep(); // Proceed to the next step
  };

  return (
    <div className="container w-full">
      <div className="flex items-center w-full h-full px-8 mt-4">
        <img src={logo} className="object-cover w-24 h-20" alt="Logo" />
        <div className="bg-gray-200 w-14 h-14 ml-8 flex justify-center items-center rounded-md">
          <AiOutlineLeft className=" text-base font-bold cursor-pointer" size={18} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-screen mx-auto m-0 p-0">
        <div className="text-center text-4xl font-bold ">What brings you to Dribbble?</div>
        <p className="text-gray-500 font-semibold text-xl mt-4 md:text-sm md:tracking-tighter">
          Select the options that best describe you. Don't worry, you can explore other options later.
        </p>
      </div>

      <br />

      <div className="flex justify-center flex-wrap gap-9  w-screen mt-4 ">
        <div
          className={`max-w-xs bg-white rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center ${
            selectedCard === 1 ? 'border-pink-500 border-4' : 'border-gray-500'
          }`}
          onClick={() => handleCardSelection(1)}
        >
          <img className="w-full h-56 object-cover" src={cardone} alt="Card" />
          <div className="px-6 py-4 flex flex-col justify-center items-center">
            <div className="font-bold text-xl mb-2 text-center">I'm a designer looking to share my work</div>
            <label className="flex justify-center items-center">
              <input
                type="radio"
                className="w-12 h-7 form-radio border border-gray-500"
                checked={selectedCard === 1}
                onChange={() => handleCardSelection(1)}
              />
            </label>
          </div>
        </div>
        
        <div
          className={`max-w-xs bg-white rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center ${
            selectedCard === 2 ? 'border-pink-500 border-4' : 'border-gray-500'
          }`}
          onClick={() => handleCardSelection(2)}
        >
          <img className="w-full h-56 object-cover" src={cardtwo} alt="Card" />
          <div className="px-6 py-4 flex flex-col justify-center items-center">
            <div className="font-bold text-xl mb-2 text-center">I'm looking to hire a designer</div>
            <label className="flex justify-center items-center">
              <input
                type="radio"
                className="w-12 h-7 form-radio border border-gray-500"
                checked={selectedCard === 2}
                onChange={() => handleCardSelection(2)}
              />
            </label>
          </div>
        </div>
        
        <div
          className={`max-w-xs bg-white rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center ${
            selectedCard === 3 ? 'border-pink-500 border-4' : 'border-gray-500'
          }`}
          onClick={() => handleCardSelection(3)}
        >
          <img className="w-full h-56 object-cover" src={cardthree} alt="Card" />
          <div className="px-6 py-4 flex flex-col justify-center items-center">
            <div className="font-bold text-xl mb-2 text-center">I'm looking for design inspiration</div>
            <label className="flex justify-center items-center">
              <input
                type="radio"
                className="w-12 h-7 form-radio border border-gray-500"
                checked={selectedCard === 3}
                onChange={() => handleCardSelection(3)}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-16 w-screen">
        <p className='mb-6 font-bold text-xl'>Anything else? You can select multiple</p>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-1/6 bg-[#EA4B8B] text-white py-3 rounded-md hover:bg-orange-400 transition duration-300"
        >
          Finish
        </button>
        <p className='text-gray-500 font-bold text-md mt-2'>or Press Return</p>
      </div>
    </div>
  );
}

export default Role;
