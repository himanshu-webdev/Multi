import React, { useState } from 'react';
import pic from '../assets/pic.jpg';

function Signup({ nextStep }) {
  
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    nextStep(); 
  };

  return (
    <div className="flex w-screen">
      {/* Left side with image */}
      <div className="w-[70%] bg-gray-800 m-0 p-0">
        <img src={pic} alt="Signup" className="object-cover w-full h-full" />
      </div>

      {/* Right side with signup form */}
      <div className="w-full flex justify-end ml-[90px] relative"> 
        <div className="max-w-lg w-full mt-12 p-6 mx-auto ">  
          <h2 className="text-3xl font-semibold mb-8 text-left">Sign Up to Dribble</h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-28 relative">
              <div className="flex mb-4">
                <div className="w-1/2 mr-2">
                  <label htmlFor="firstName" className='ml-0 mr-24'>Name</label>
                  <input type="text" id="firstName" name="name" className="w-full px-3 py-2 bg-[#F3F3F3] border border-gray-100 rounded-md focus:outline-none focus:border-gray-200" placeholder="Name" value={formData.name} onChange={handleChange}/>
                </div>
                <div className="w-1/2 ml-4">
                  <label htmlFor="username" className='ml-0 mr-24'>Username</label>
                  <input type="text" id="username" name="username" className="w-full px-3 py-2 bg-[#F3F3F3] border border-gray-100 rounded-md focus:outline-none focus:border-gray-200" placeholder="Username" value={formData.username} onChange={handleChange}/>
                </div>
              </div>
              <br />
              <div className='mt-6 relative'>
                <label htmlFor="email" className='absolute bottom-16'>Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-[#F3F3F3] border border-gray-100 rounded-md mb-4 focus:outline-none focus:border-gray-200" placeholder="Email" value={formData.email} onChange={handleChange}/>
              </div>
              <br />
              <div className='mt-6 relative'>
                <label htmlFor="password" className='ml-0 absolute bottom-16 mr-24'>Password</label>
                <input type="password" id="password" name="password" className="w-full px-3 py-2 bg-[#F3F3F3] border border-gray-100 rounded-md mb-4 focus:outline-none focus:border-gray-200" placeholder="6+ Characters" value={formData.password} onChange={handleChange} />
              </div>
            </div>
            <br />
            <div className='relative mt-2 w-full'>
              <input type="checkbox" className='h-6 w-5 border border-gray-200' />
              <p className='absolute top-[-2px] left-[35px] font-medium tracking-tight text-gray-400'>Creating an account means you're okay with our <span className='cursor-pointer text-[#655AA7]'>Terms of Service,Privacy Policy,</span>and our default <span className='cursor-pointer text-[#655AA7]'>Notification Settings.</span></p>
             </div>
             <br />
             <button type="submit"  className="w-1/2 mt-10 bg-[#EA4B8B] text-white py-2 rounded-md hover:bg-orange-400 transition duration-300 ">Create account</button>
          </form>
          <div className='mt-4'>
            <p className='text-sm'>This site is protected by reCAPTCHA and the Google <span className='cursor-pointer text-[#655AA7]'>Privacy Policy</span> and <span className='cursor-pointer text-[#655AA7]'>Terms of Service</span> apply</p>
          </div>
        </div>
      </div>
      <div className="text-end w-1/3 mr-6 mt-6">
        <p className='text-base'>Already a Member? <span className='cursor-pointer text-[#655AA7]'>Sign In</span></p>
       </div>
    </div>
  )
}

export default Signup;
