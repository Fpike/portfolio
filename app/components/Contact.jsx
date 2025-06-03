import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "196cdf31-c974-4e8f-8408-a282655d5fab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h3 className='text-center mb-2'>Contact me</h3>
      <p className='text-center max-w-2x1 mx-auto mt-5 mb-12'>Please reach out to me with questions or opportunities!</p>
    
    <form onSubmit={onSubmit} className='max-w-2x1 mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
            <input type='text' placeholder='Name' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name="name"></input>
            <input type='email' placeholder='Email' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name="email"></input>
        </div>
        <textarea rows='6' placeholder='Enter your message' required className='w-full p-4  outline-none
        border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
        <button type='submit' className='py-3 px-8 w-max flex items-center justify-between
        gap-2 bg-greenCustom text-white rounded-full mx-auto hover:bg-black duration-500' name="message">
            Submit
            <Image src={assets.right_arrow_white} alt='' className='w-4'/></button>
            <p className='mt-4'>{result}</p>
    </form>
    </div>
  )
}

export default Contact
