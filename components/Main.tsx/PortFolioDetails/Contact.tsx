'use client'

import { useState } from "react";
import {RiRefreshLine} from 'react-icons/ri'
import {HiOutlineThumbUp} from 'react-icons/hi'

import { useRef } from 'react';
import emailjs from 'emailjs-com';


interface Iprop {
  fontFamily?: any;

}

const Contact:React.FC<Iprop> = ({fontFamily}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [load, setLoad] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setMessageSent(true);
    setButtonDisabled(true);
    setLoad(true);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_KEY as string,
        process.env.NEXT_PUBLIC_TEMPLATE as string,
        formRef.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS as string
      );
      
    } catch (error) {
      console.error(error);
    }

    setLoad(false);
    setMessageSent(false);
    setButtonDisabled(false);
    formRef.current?.reset();
  };

  return (
    <section id='contact' className='px-[62px] max-xlg:px-[20px] flex flex-col justify-between h-full'>
        <div className={`${fontFamily} flex items-center gap-8 mb-4  max-md:flex-col max-md:items-start max-md:gap-1`}>
            <h2 className='text-[40px] tracking-[2.5%] leading-[40px] font-semibold max-md:text-[32px] uppercase' >Let's talk</h2>
            <div className='bg-btngradient w-[250px] h-[2px] rounded-[20px] max-md:w-[160px]'></div>
        </div>
        <div className="flex gap-1 max-lg:my-5">
           <div className="relative bg-white rounded-lg border border-gray-300 shadow-md p-4 max-w-lg mx-auto">
            <div className="absolute top-0 -mt-3 w-6 h-6 transform rotate-45 bg-white border border-gray-300"></div>
            <p className="text-gray-700 text-sm leading-tight max-xxsm:text-center">
             Let's transform your business ideas into captivating online experiences 
             </p>
          </div>
        </div>

      <div
        className='relative gap-6 bg-[#ed240a38] max-xsm:bg-transparent max-xxsm:px-5 max-xsm:px-0 rounded-[20px] p-8'
      >
        <img src='girl.svg' alt='' className='absolute top-[-90px] left-[-10px] w-[75px] h-[146px] max-md:hidden' />
       
        <form ref={formRef} onSubmit={(e)=>sendEmail(e)} className='flex flex-col gap-6 '>
          <input type='text' name='name' placeholder='Your Full Name' required className='form-input ' />
          <input type='email' name='email' placeholder='Your email address' required className='form-input ' />
          <input type='text' name='subject' placeholder='Subject' required className='form-input ' />
          <textarea rows={4} name='message' placeholder='Leave a Message' required className='form-input  resize-none' />
          <button type='submit' 
          disabled={buttonDisabled}
          className='btn h-[50px] rounded-[20px] text-white  transition-transform font-semibold'>
              {messageSent ? (
                load ? (
                  <span className='flex justify-center text-[25px] spinner'>
                    <RiRefreshLine />
                  </span>
                ) : (
                  <span className='text-white flex justify-center items-center gap-1'>Message Sent <span><HiOutlineThumbUp/></span></span>
                )
              ) : (
                'Send Message'
              )}
              </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
