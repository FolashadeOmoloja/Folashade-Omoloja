// import { useRef } from 'react';
// import emailjs from 'emailjs-com';


interface Iprop {
  fontFamily?: any;

}

const Contact:React.FC<Iprop> = ({fontFamily}) => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_c9krp47', 'template_2654o93', form.current, 'ao3w_tPLF4KrdUp07')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });

  //   e.target.reset();
  // };

  return (
    <section id='contact' className='px-[62px] max-xlg:px-[20px]'>
        <div className={`${fontFamily} flex items-center gap-8 mb-4  max-sm:flex-col max-sm:items-start max-sm:gap-1`}>
            <h2 className='text-[40px] tracking-[2.5%] leading-[40px] font-semibold max-sm:text-[32px] uppercase' >Let's talk</h2>
            <div className='bg-btngradient w-[250px] h-[2px] rounded-[20px] max-sm:w-[160px]'></div>
        </div>
      {/* <img src='Group.png' alt='' className='sticker ' /> */}
      <div
        className='relative gap-6 bg-[#ed240a38] rounded-[20px] p-8'
      >
        <form  className='flex flex-col gap-6 w-70'>
          <input type='text' name='name' placeholder='Your Full Name' required className='form-input ' />
          <input type='email' name='email' placeholder='Your email address' required className='form-input ' />
          <input type='text' name='subject' placeholder='Subject' required className='form-input ' />
          <textarea rows={5} name='message' placeholder='Leave a Message' required className='form-input  resize-none' />
          <button type='submit' className='btn btn-2 btn-4 transition-transform hover:font-bold'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
