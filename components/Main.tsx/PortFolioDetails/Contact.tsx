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
      <img src='Group.png' alt='' className='sticker ' />
      <div
        className='container flex justify-center items-center relative gap-6 contact__container'
        style={{
          background: 'rgba(47, 47, 138, 0.6)',
          backdropFilter: 'blur(10px)',
          borderRadius: '30px',
          padding: '3.3rem 5.6rem',
          flexGrow: 1,
        }}
      >
        <div className='flex flex-col gap-6'>
          <article className='flex flex-col items-center justify-center p-3 border border-solid border-[0.7px] border-text-color-glass rounded transition-transform'>
            <div className='w-8 h-8 mb-2'>
              <img src='Mail.png' alt='' className='w-full h-full' />
            </div>
            <h5 className='text-text-color-glass'>omolojashade@gmail.com</h5>
            <a href='mailto:omolojashade@gmail.com' target='_blank'>
              Send an email
            </a>
          </article>
          <article className='flex flex-col items-center justify-center p-3 border border-solid border-[0.7px] border-text-color-glass rounded transition-transform'>
            <div className='w-8 h-8 mb-2'>
              <img src='Whatsapp.png' alt='' className='whatsapp' />
            </div>
            <h5 className='text-text-color-glass'>+234-8160537130</h5>
            <a href='https://wa.me/+2348160537130' target='_blank'>
              Let's chat
            </a>
          </article>
        </div>
        <form  className='flex flex-col gap-6 w-70'>
          <input type='text' name='name' placeholder='Your Full Name' required className='w-full p-4 rounded bg-[rgba(255,255,255,0.3)] shadow-input-shadow text-text-color' />
          <input type='email' name='email' placeholder='Your email address' required className='w-full p-4 rounded bg-[rgba(255,255,255,0.3)] shadow-input-shadow text-text-color' />
          <input type='text' name='subject' placeholder='Subject' required className='w-full p-4 rounded bg-[rgba(255,255,255,0.3)] shadow-input-shadow text-text-color' />
          <textarea rows={13} name='message' placeholder='Leave a Message' required className='w-full p-4 rounded bg-[rgba(255,255,255,0.3)] shadow-input-shadow text-text-color resize-none' />
          <button type='submit' className='btn btn-2 btn-4 transition-transform hover:font-bold'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
