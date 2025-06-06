'use client';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Atelier Lavender</title>
        <meta name="Atelier Lavender" content="We are Atelier Lavender" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white text-black">

        {/* Header/Banner */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <img
            src="/Images/Banner.png"
            alt="Banner"
            className="w-full h-full object-cover brightness-60"
          />

            <img
              src="/Images/atelier.png" // replace with your image path
              alt="Atelier Logo"
              className="absolute top-2 left-5 w-40 h-40 object-contain z-10"
            />
            
            <header className="absolute inset-0 flex justify-center items-center text-white text-xl text-center px-4">
              <div className="flex flex-col items-center">
                <span>CONSTRUCTING A FUTURE FOR SUSTAINABLE DESIGNS</span>
                <div className="mt-2 w-full h-[2px] bg-white"></div>
              </div>
            </header>
        </section>


        {/* Intro */}
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
        <section className="text-center bg-neutral-100 py-12">
          <div className='w-full md:w-[40%] mx-auto flex flex-col justify-center space-y-4 px-8'>
            <header className='text-2xl text-sub-purple'>What We Do</header>
            <p className='text-neutral-600 italic text-sm sm:text-base'>
              FEASIBILITY STUDIES | PRE-PLANNING ADVICE | ARCHITECTURE & INTERIOR DESIGN | OUTLINE AND FULL PLANNING APPLICATIONS | DESIGN AND BUILD | CONTRACT ADMINISTRATION | PROJECT MANAGEMENT | CONSTRUCTION MANAGEMENT
            </p>
          </div>

          <div className="max-w-screen-xl mx-auto px-4 py-15 space-y-16">
            {/* Design */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
              <div className="w-full lg:w-auto">
                <img src="/Images/IMG-2.jpg" alt="Architecture" className="w-full max-w-xs mx-auto object-cover rounded" />
              </div>
              <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
                <h3 className="text-2xl mb-2 text-sub-purple">Design</h3>
                <p className='text-neutral-600 italic'>
                  Architecture is the cornerstone of Atelier Lavender’s design practice. We can design any building with an optimum spacing layout that fulfils clients' needs, with extraordinary results.
                </p>
              </div>
            </div>

            {/* Project Management */}
            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-6">
              <div className="flex-1 flex flex-col justify-center text-center lg:text-right">
                <h3 className="text-2xl mb-2 text-sub-purple">Project Management</h3>
                <p className='text-neutral-600 italic'>
                  Atelier Lavender caters customized and holistic project management solutions that cover the entire life cycle of a project.
                </p>
              </div>
              <div className="w-full lg:w-auto">
                <img src="/Images/IMG-5.jpg" alt="Service" className="w-full max-w-xs mx-auto object-cover rounded" />
              </div>
            </div>

            {/* Site Supervision */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
              <div className="w-full lg:w-auto">
                <img src="/Images/IMG-4.jpg" alt="Service" className="w-full max-w-xs mx-auto object-cover rounded" />
              </div>
              <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
                <h3 className="text-2xl mb-2 text-sub-purple">Site Supervision</h3>
                <p className='text-neutral-600 italic'>
                  We assist clients in preparing construction contracts and supervise their construction works on-site as per design documents, specifications and schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className='flex w-full py-10'>
          <div className='flex flex-col text-left items-center justify-center space-y-3 w-full'>
            <h3 className='text-2xl text-sub-purple'>About Director</h3>
            <p className='md:w-[40%] text-sm text-neutral-600 italic px-4 text-center'>
              Mrs. Meltem Ustay is a highly-skilled professional with more than 30 years of design and construction management experience. She has successfully delivered the development and design projects in the Gulf Cooperation Council (GCC) and Turkey with world-class investment, development, contracting and consulting companies. As an architect, consultant & client representative, her construction exposure ranges from individual buildings & factories to mega structures & complex projects. Her education in the field of architecture and extensive experience in the same industry are the key strengths of Lavender Ltd to develop and excel in the UK’s construction market.
            </p>

            {/* Images */}
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-4 pb-6 px-4'>
              <img src='/Images/IMG-6.jpg' alt='Image 1' className='w-80 h-60 object-cover rounded' />
              <img src='/Images/APA-IMG.jpg' alt='Image 2' className='w-80 h-60 object-cover rounded' />
              <img src='/Images/IMG-8.jpg' alt='Image 3' className='w-80 h-60 object-cover rounded' />
            </div>
          </div>
        </section>

        <section className="bg-neutral-300 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">

              {/* Left Card with Text & Links */}
              <div className="flex-1 bg-white p-6 rounded shadow-md w-full max-w-xl text-center">
                <h1 className="text-2xl text-sub-purple mb-4">Get in Touch</h1>
                <p className="text-neutral-600 italic mb-6">
                  We'd love to hear from you! Reach out to us directly using the contact info below.
                </p>

                <div className="space-y-4">
                  <p className="text-sm text-neutral-600">
                    📞 Phone:{" "}
                    <a href="tel:+447493802246" className="text-sub-purple hover:underline">
                      +44 7493 802246
                    </a>
                  </p>

                  <p className="text-sm text-neutral-600">
                    📧 Email:{" "}
                    <a href="mailto:Meltem@atelierlavender.co.uk" className="text-sub-purple hover:underline">
                      Meltem@atelierlavender.co.uk
                    </a>
                  </p>

                  <a
                    href="mailto:Meltem@atelierlavender.co.uk"
                    className="inline-block mt-6 text-white bg-sub-purple hover:bg-sub-purple/80 px-6 py-2 rounded transition-all"
                  >
                    Send an Email
                  </a>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="hidden md:block flex-1">
                <img
                  src="/Images/IMG-3.webp"
                  alt="Contact illustration"
                  className="w-full h-auto object-cover rounded"
                />
              </div>

            </div>
          </div>
        </section>


        {/* Footer */}
        <section className='text-center bg-sub-purple'>
          <footer className="py-6 text-center text-neutral-600">
            <p>&copy; 2025 Atelier Lavender. Website built with NextJS and Tailwind, hosted by Vercel.</p>
          </footer>
        </section>


      </div>
    </>
  );
}
