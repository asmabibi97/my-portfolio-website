import React from 'react';
import Image from 'next/image';
import calculatorimage from '../../public/Images/calculator.png';
import atm from '../../public/Images/atm.png';
import todo from '../../public/Images/todo.png';
import Link from 'next/link';
import cli from '../../public/Images/cli.png';
import figma from '../../public/Images/figma.png';
import resume from '../../public/Images/resume.png';

function Home() {
  return (
    <div>
      <section className="text-gray-100 bg-gray-800 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">
              Building Creative <br className="hidden lg:inline-block" />& Functional Web Experiences
            </h1>
            <p className="mb-8 leading-relaxed text-gray-300">
              Hi, I’m Asma Bibi, a passionate web developer skilled in creating visually engaging, user-friendly
              websites. I turn ideas into responsive web applications that balance form and function. Whether you need a
              personal portfolio, an e-commerce platform, or a custom solution, I bring your vision to life with clean
              code and modern design.
            </p>
            <div className="flex justify-center">
              <a href="https://github.com/asmabibi97" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-lg text-lg shadow-md transition-all duration-300 ease-in-out">
                  View my work
                </button>
              </a>
              <Link href="/contact-us">
                <button className="ml-4 inline-flex text-gray-300 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded-lg text-lg shadow-md transition-all duration-300 ease-in-out">
                  Get in touch
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded-lg shadow-lg" alt="hero" src="/Images/hero.PNG" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="text-gray-200 bg-gray-800 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-semibold title-font text-white mb-4">Why Work With Me?</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
              I take pride in delivering top-notch web development services that meet your business needs. From
              responsive design to performance optimization, I ensure your website is visually appealing and highly
              functional.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <FeatureCard
              title="Custom & Responsive Design"
              description="Every project is tailored to your needs and optimized for all devices, providing a seamless experience across screens."
              iconPath="M22 12h-4l-3 9L9 3l-3 9H2"
            />
            <FeatureCard
              title="Clean Code & Best Practices"
              description="Following industry best practices, I write clean, maintainable code for faster load times and scalability."
              iconPath="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
            />
            <FeatureCard
              title="SEO & Performance Optimized"
              description="Your website won’t just look great—it’ll perform well too, with optimizations for search engines and speed."
              iconPath="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
            />
          </div>
          <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg shadow-md transition-all duration-300 ease-in-out">
            Learn More About My Services
          </button>
        </div>
      </section>

      {/* Project Section */}
      <section className="text-gray-300 bg-gray-800 body-font">
        <div className="container px-5 py-24 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            imageSrc={calculatorimage}
            title="Calculator Project"
            description="A simple calculator using TypeScript"
            link="https://github.com/asmabibi97/calculator"
          />
          <ProjectCard
            imageSrc={atm}
            title="ATM Machine"
            description="A simple ATM machine using TypeScript"
            link="https://github.com/asmabibi97/atm-machine"
          />
          <ProjectCard
            imageSrc={todo}
            title="Todo List"
            description="A todo list using TypeScript"
            link="https://github.com/asmabibi97/to-do-list-project"
          />
          <ProjectCard
            imageSrc={cli}
            title="Number Guessing Game"
            description="A number guessing game using TypeScript"
            link="https://github.com/asmabibi97/cli-number-guesing"
          />
          <ProjectCard
            imageSrc={figma}
            title="Figma Project"
            description="A project from Figma to Next.js"
            link="https://github.com/asmabibi97/figma-assignment"
          />
          <ProjectCard
            imageSrc={resume}
            title="Dynamic Resume Builder"
            description="A resume builder using TypeScript"
            link="https://github.com/asmabibi97/hackathon-milestone5-by-asma-bibi"
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, iconPath }) {
  return (
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-700 text-blue-500 mb-5">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
          <path d={iconPath}></path>
        </svg>
      </div>
      <div className="flex-grow">
        <h2 className="text-white text-lg title-font font-semibold mb-3">{title}</h2>
        <p className="leading-relaxed text-base">{description}</p>
      </div>
    </div>
  );
}

function ProjectCard({ imageSrc, title, description, link }) {
  return (
    <div className="bg-gray-700 border-0 rounded-3xl p-5 place-content-center flex flex-col items-center">
      <Image className="object-cover object-center rounded-lg shadow-md mb-4" src={imageSrc} width={200} height={200} alt={title} />
      <h1 className="text-center font-bold text-xl text-white mb-2">{title}</h1>
      <p className="text-center font-normal text-gray-300 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="text-center bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out">
          Click Here
        </button>
      </a>
    </div>
  );
}

export default Home;
