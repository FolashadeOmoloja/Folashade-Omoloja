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
    <section id='contact' className='px-[62px] max-xlg:px-[20px]'>
        <div className={`${fontFamily} flex items-center gap-8 mb-4  max-sm:flex-col max-sm:items-start max-sm:gap-1`}>
            <h2 className='text-[40px] tracking-[2.5%] leading-[40px] font-semibold max-sm:text-[32px] uppercase' >Let's talk</h2>
            <div className='bg-btngradient w-[250px] h-[2px] rounded-[20px] max-sm:w-[160px]'></div>
        </div>

      <div
        className='relative gap-6 bg-[#ed240a38] rounded-[20px] p-8 mt-[30px]'
      >
        <img src='girl.svg' alt='' className='absolute top-0 left-0' />
       
        <form ref={formRef} onSubmit={(e)=>sendEmail(e)} className='flex flex-col gap-6 w-70'>
          <input type='text' name='name' placeholder='Your Full Name' required className='form-input ' />
          <input type='email' name='email' placeholder='Your email address' required className='form-input ' />
          <input type='text' name='subject' placeholder='Subject' required className='form-input ' />
          <textarea rows={5} name='message' placeholder='Leave a Message' required className='form-input  resize-none' />
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
