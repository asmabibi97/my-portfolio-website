import React from 'react'
import Image from 'next/image'
import calculatorimage from '../../public/Images/calculator.png'
import atm from '../../public/Images/atm.png'
import todo from '../../public/Images/todo.png'
import Link from 'next/link'
import cli from '../../public/Images/cli.png'
import figma from '../../public/Images/figma.png'
import resume from '../../public/Images/resume.png'
function home() {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Building Creative 
        <br className="hidden lg:inline-block"/> <p>& Functional Web Experiences</p>
      </h1>
      <p className="mb-8 leading-relaxed">Hi, I &#34;m Asma Bibi, A passionate web developer with a knack for crafting visually stunning, user-friendly websites. I specialize in turning creative ideas into fully responsive, dynamic web applications that not only look great but also provide a seamless user experience. Whether you need a personal portfolio, a robust e-commerce platform, or a custom web solution, I'm here to bring your vision to life with clean code and modern design.</p>
      <div className="flex justify-center">
      <a href="https://github.com/asmabibi97" target="_blank" rel="noopener noreferrer">
      <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">View my work</button>
</a>
    <Link href="/contact-us">
        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Get in touch</button> </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded w-5/6" alt="hero" src={"/Images/hero.PNG"}/>
    </div>
  </div>
</section>
{/* {SECOND SECTION} */}
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Why Work With Me?</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">I take pride in delivering top-notch web development services that meet your business needs. From creating responsive designs to optimizing for performance and accessibility, my approach ensures your website is not only visually appealing but also highly functional. Here are the key features that set my work apart:</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">Custom & Responsive Design</h2>
          <p className="leading-relaxed text-base">Every project I build is tailored to your specific needs and optimized for all devices. Whether it's a sleek mobile interface or a detailed desktop layout, I ensure your website provides a seamless experience across screens.</p>
          <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">Clean Code & Best Practices</h2>
          <p className="leading-relaxed text-base">I follow industry best practices to write clean, maintainable code. This means faster load times, better performance, and easier scalability for future updates, helping your website stay relevant and functional in the long run.</p>
          <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">SEO & Performance Optimized</h2>
          <p className="leading-relaxed text-base">Your website won’t just look great—it’ll perform well too. I focus on optimizing your site for search engines and speed, ensuring that users and search engines alike will appreciate your site’s performance.

</p>
          <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn More About My Services</button>
  </div>
</section>
{/* {3rd section} */}
<section className='text-gray-400 bg-gray-900 body-font'>
  <div className='grid grid-cols-3 gap-6 grid-row  container px-5 py-24 mx-auto'>
    <div className='bg-slate-100 border-0 rounded-3xl p-5 place-content-center flex flex-col items-center'>
      <Image className='items-center '
      src={calculatorimage}
      width={200}
      height={200}
     alt='calculatorimage'
/>
<h1 className='text-center font-bold text-xl py-2'>calculator project</h1>
  <p className='text-center font-normal text-lg py-2'>A simple calculator using typescript </p>
  <a href='https://github.com/asmabibi97/calculator' target="_blank" rel="noopener noreferrer">
  <button className='text-center bg-purple-500 text-white py-2 px-4 flex items-center rounded text-lg'>click here</button>
  </a>
    </div>
    {/* 2nd box */}
    <div className='bg-slate-100 border-0 rounded-3xl p-5 place-content-center flex flex-col items-center'>
      <Image className='items-center '
      src={atm}
      width={200}
      height={200}
     alt='atm'
/>
<h1 className='text-center font-bold text-xl py-2'>ATM machiene</h1>
  <p className='text-center font-normal text-lg py-2'>A simple atm machiene  using typescript </p>
  <a href='https://github.com/asmabibi97/atm-machine' target="_blank" rel="noopener noreferrer">
  <button className='text-center bg-purple-500 text-white py-2 px-4 flex items-center rounded text-lg'>click here</button>
     </a>
  </div>
    {/* 3nd box */}
    <div className='bg-slate-100 border-0 rounded-3xl p-5 place-content-center flex flex-col items-center'>
      <Image className='items-center '
      src={todo}
      width={200}
      height={200}
     alt='todo'
/>
<h1 className='text-center font-bold text-xl py-2'>A todo list </h1>
  <p className='text-center font-normal text-lg py-2'>A todo list  using typescript </p>
  <a href='https://github.com/asmabibi97/to-do-list-project' target="_blank" rel="noopener noreferrer">
  <button className='text-center bg-purple-500 text-white py-2 px-4 flex items-center rounded text-lg'>click here</button>
  </a>
  </div>
  <div className='bg-slate-100 border-0 rounded-3xl p-5 place-content-center flex flex-col items-center'>
      <Image className='items-center '
      src={cli}
      width={200}
      height={200}
     alt='cli'
/>
<h1 className='text-center font-bold text-xl py-2'>Number guesing game</h1>
  <p className='text-center font-normal text-lg py-2'>A simple number guesing game using typescript</p>
  <a href='https://github.com/asmabibi97/cli-number-guesing' target="_blank" rel="noopener noreferrer">
  <button className='text-center bg-purple-500 text-white py-2 px-4 flex items-center rounded text-lg'>click here</button>
  </a>
    </div>
    {/* 2nd box */}
    <div className='bg-slate-100 border-0 rounded-3xl p-5 place-content-center flex flex-col items-center'>
      <Image className='items-center '
      src={figma}
      width={200}
      height={200}
     alt='figma'
/>
<h1 className='text-center font-bold text-xl py-2'>FIGMA project</h1>
  <p className='text-center font-normal text-lg py-2'>A simple project design from figma to Next.js </p>
  <a href='https://github.com/asmabibi97/figma-assignment' target="_blank" rel="noopener noreferrer">
  <button className='text-center bg-purple-500 text-white py-2 px-4 flex items-center rounded text-lg'>click here</button>
  </a>
  </div>
    {/* 3nd box */}
    <div className='bg-slate-100 border-0 rounded-3xl p-5 place-content-center flex flex-col items-center'>
      <Image className='items-center '
      src={resume}
      width={200}
      height={200}
     alt='resume'
/>
<h1 className='text-center font-bold text-xl py-2'>Editable dynamic  Resum builder </h1>
  <p className='text-center font-normal text-lg py-2'>A simple editable Resume builder using typescript </p>
  <a href='https://github.com/asmabibi97/hackathon-milestone5-by-asma-bibi' target="_blank" rel="noopener noreferrer">
  <button className='text-center bg-purple-500 text-white py-2 px-4 flex items-center rounded text-lg'>click here</button>
  </a>
  </div>
  </div>
</section>
    </div>
  )
}

export default home
