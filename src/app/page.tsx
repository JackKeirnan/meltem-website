'use client';

import Head from 'next/head';
import Image from 'next/image';
import {contentData} from './Data/contentData';

export default function Home() {
  return (
    <>
      <Head>
        <title>Temp</title>
        <meta name="description" content="Temp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white text-black">

        {/* Header/Banner */}
        <section className="relative h-[30vh] w-full overflow-hidden">
          <img
            src="/Images/Banner.png"
            alt="Banner"
            className="w-full h-full object-cover brightness-75"
          />
          <header className="absolute inset-0 flex justify-center items-center text-white text-2xl font-bold">
          CONSTRUCTING A FUTURE FOR SUSTAINABLE DESIGNS
          </header>
        </section>

        <section className="flex min-h-[20vh] max-h-screen text-center items-center justify-center">
          <div className="space-y-2 md:w-1/4">
            <header>Who we are</header>
            <p>
              Atelier Lavender is a Design & Construction Consultancy firm based in London. We provide the most innovative, cutting-edge, state-of-the-art design solutions tailored to our clients’ needs and environmental factors. We are rooted in technical excellence, driven by imagination, and focused on a solitary goal: to deliver inspiring solutions for people and communities in Architecture & Interior Design.
              <br />
              <br />
              Our mission is to help construction professionals and end-users achieve excellence in both designs and build processes by providing construction and project management consultancy.
            </p>
          </div>
          <p className="md:w-1/4">Our goal is to be recognized as one of the best construction consultancy firms, providing world-class solutions that drive sustainable builds, boost productivity, and encourage innovation.</p>
        </section>


        {/* Services */}
        <section className="min-h-[80vh] max-h-screen text-center bg-neutral-200">
          <div className='h-[15vh] md:w-[50%]'>
            <header>What we do</header>
            <p>FEASIBILITY STUDIES | PRE-PLANNING ADVICE | ARCHITECTURE & INTERIOR DESIGN | OUTLINE AND FULL PLANNING APPLICATIONS | DESIGN AND BUILD | CONTRACT ADMINISTRATION | PROJECT MANAGEMENT | CONSTRUCTION MANAGEMENT</p>
          </div>

          {/* Row 1: Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row h-auto lg:h-[20vh] text-left">
            <div className="w-full lg:w-1/2 justify-center flex">
              <img src="/Images/IMG-2.jpg" alt="Architecture" className="w-[25%] h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-4 ">
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p>
                Architecture is the cornerstone of Atelier Lavender’s design practice. We can design any building with an optimum spacing layout that fulfils clients` needs, with extraordinary results.
              </p>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className="flex flex-col-reverse lg:flex-row h-auto lg:h-[20vh] text-left">
            <div className="w-2/3 flex flex-col justify-center px-6 py-4 bg-white">
              <h3 className="text-xl font-semibold mb-2">Project Management</h3>
              <p>
                Atelier Lavender caters customized and holistic project management solutions that cover the entire life cycle of a project.
              </p>
            </div>
            <div className="w-1/4 justify-center flex bg-black">
              <img src="/Images/IMG-2.jpg" alt="Service" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Row 3: Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row h-auto lg:h-[20vh] text-left">
            <div className="w-full lg:w-1/2 justify-center flex">
              <img src="/Images/IMG-2.jpg" alt="Service" className="w-[25%] h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-4">
              <h3 className="text-xl font-semibold mb-2">Site Supervision</h3>
              <p>
                We assist clients in preparing construction contracts and supervise their construction works on-site as per design documents, specifications and schedule.
              </p>
            </div>
          </div>
        </section>


        {/* About */}
        <section className='flex min-h-[20vh] max-h-screen'>
          <div className='flex-1 flex flex-col justify-center items-center '>
            <h3>About Director</h3>
            <p className='w-[50%]'>Mrs. Meltem Ustay is a highly-skilled professional with more than 30 years of design and construction management experience. She has successfully delivered the development and design projects in the Gulf Cooperation Council (GCC) and Turkey with world-class investment, development, contracting and consulting companies. As an architect, consultant & client representative, her construction exposure ranges from individual buildings & factories to mega structures & complex projects. Her education in the field of architecture and extensive experience in the same industry are the key strengths of Lavender Ltd to develop and excel in the UK’s construction market.</p>
          </div>

        </section>


        {/* Contact */}
        <section className='flex text-center h-[30vh] bg-neutral-400'>
          <div className='flex flex-1 flex-col justify-center items-center'>
            <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Feel free to reach out if you want to collaborate or just say hi!
            </p>
            <div className='flex justify-center gap-3'>
              <a href="mailto:jackkeirnan@gmail.com" className="btn w-[8rem] bg-black text-neutral-300 hover:bg-white">Email</a>
            </div>
          </div>

        </section>

        {/* Footer */}
        <section className='text-center bg-neutral-500'>
          <footer className="py-6 text-center text-gray-400">
            <p>&copy; 2025 Jack Keirnan. Built with NextJS and Tailwind, hosted by Vercel. Uses DaisyUI for some components.</p>
          </footer>
        </section>

      </div>
    </>
  );
}
