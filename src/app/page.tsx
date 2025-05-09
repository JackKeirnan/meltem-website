'use client';

import Head from 'next/head';

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

            <img
              src="/Images/atelier.jpg" // replace with your image path
              alt="Atelier Logo"
              className="absolute top-4 left-4 w-16 h-16 object-contain z-10"
            />
            
            <header className="absolute inset-0 flex justify-center items-center text-white text-xl text-center px-4">
              <div className="flex flex-col items-center">
                <span>CONSTRUCTING A FUTURE FOR SUSTAINABLE DESIGNS</span>
                <div className="mt-2 w-full h-[2px] bg-white"></div>
              </div>
            </header>
        </section>

        <section className="flex min-h-[20vh] max-h-screen text-left items-center justify-center">
          <div className="space-y-2 md:w-1/4 p-5 space-y-4">
            <header className='text-3xl text-sub-purple'>Who we are</header>
            <p className='text-neutral-600 italic'>
              Atelier Lavender is a Design & Construction Consultancy firm based in London. We provide the most innovative, cutting-edge, state-of-the-art design solutions tailored to our clients’ needs and environmental factors. We are rooted in technical excellence, driven by imagination, and focused on a solitary goal: to deliver inspiring solutions for people and communities in Architecture & Interior Design.
              <br />
              <br />
              Our mission is to help construction professionals and end-users achieve excellence in both designs and build processes by providing construction and project management consultancy.
            </p>
          </div>
          <p className="md:w-1/4 text-neutral-600 italic">Our goal is to be recognized as one of the best construction consultancy firms, providing world-class solutions that drive sustainable builds, boost productivity, and encourage innovation.</p>
        </section>


        {/* Services */}
        <section className="min-h-[80vh] max-h-screen text-center bg-neutral-100">
          <div className='h-[15vh] md:w-[40%] m-auto flex flex-col justify-center space-y-2'>
            <header className='text-2xl text-sub-purple'>What We Do</header>
            <p className='text-neutral-600 italic'>FEASIBILITY STUDIES | PRE-PLANNING ADVICE | ARCHITECTURE & INTERIOR DESIGN | OUTLINE AND FULL PLANNING APPLICATIONS | DESIGN AND BUILD | CONTRACT ADMINISTRATION | PROJECT MANAGEMENT | CONSTRUCTION MANAGEMENT</p>
          </div>

          <div className="md:max-w-screen-xl mx-auto px-4 py-8 space-y-8">
            <div className="flex flex-col lg:flex-row items-stretch gap-x-6">
              <div className="flex justify-start w-auto">
                <img src="/Images/IMG-2.jpg" alt="Architecture" className="w-[300px] object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-center text-left">
                <h3 className="text-2xl mb-2 text-sub-purple">Design</h3>
                <p className='text-neutral-600 italic'>
                  Architecture is the cornerstone of Atelier Lavender’s design practice. We can design any building with an optimum spacing layout that fulfils clients' needs, with extraordinary results.
                </p>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-stretch gap-x-6">
              <div className="flex-1 flex flex-col justify-center text-right">
                <h3 className="text-2xl mb-2 text-sub-purple">Project Management</h3>
                <p className='text-neutral-600 italic '>
                  Atelier Lavender caters customized and holistic project management solutions that cover the entire life cycle of a project.
                </p>
              </div>
              <div className="flex justify-end w-auto">
                <img src="/Images/IMG-5.jpg" alt="Service" className="w-[300px] object-cover" />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-stretch gap-x-6">
              <div className="flex justify-start w-auto">
                <img src="/Images/IMG-4.jpg" alt="Service" className="w-[300px] object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-center text-left">
                <h3 className="text-2xl mb-2 text-sub-purple">Site Supervision</h3>
                <p className='text-neutral-600 italic '>
                  We assist clients in preparing construction contracts and supervise their construction works on-site as per design documents, specifications and schedule.
                </p>
              </div>
            </div>
          </div>

        </section>


        {/* About */}
        <section className='flex min-h-[20vh] max-h-screen'>
          <div className='flex flex-col text-left items-center justify-center space-y-3'>
            <h3 className='text-2xl text-sub-purple'>About Director</h3>
            <p className='md:w-[40%] text-sm text-neutral-600 italic '>Mrs. Meltem Ustay is a highly-skilled professional with more than 30 years of design and construction management experience. She has successfully delivered the development and design projects in the Gulf Cooperation Council (GCC) and Turkey with world-class investment, development, contracting and consulting companies. As an architect, consultant & client representative, her construction exposure ranges from individual buildings & factories to mega structures & complex projects. Her education in the field of architecture and extensive experience in the same industry are the key strengths of Lavender Ltd to develop and excel in the UK’s construction market.</p>
          </div>

        </section>


        {/* Contact */}
        <section className='flex text-center h-[30vh] bg-neutral-200'>
          <div className='flex flex-1 flex-col justify-center items-center'>
            <h2 className="text-2xl mb-3 text-sub-purple">Contact Us</h2>
            <p className="max-w-2xl mx-auto mb-8 text-neutral-600 italic ">
              If you wish to contact us you can do so via the email provided.
            </p>
            <div className='flex justify-center gap-3'>
              <a href="mailto:jackkeirnan@gmail.com" className="btn w-[8rem] h-[3rem] flex justify-center items-center text-neutral-600 italic bg-sub-purple">Email</a>
            </div>
          </div>

        </section>

        {/* Footer */}
        <section className='text-center bg-sub-purple'>
          <footer className="py-6 text-center text-gray-600">
            <p>&copy; 2025 Jack Keirnan. Built with NextJS and Tailwind, hosted by Vercel. Uses DaisyUI for some components.</p>
          </footer>
        </section>

      </div>
    </>
  );
}
