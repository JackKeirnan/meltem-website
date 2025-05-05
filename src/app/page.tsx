'use client';

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Temp</title>
        <meta name="description" content="Temp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header/Banner */}
        <section className='flex min-h-[20vh] bg-neutral-500'>
          <div className="flex-1 flex justify-center items-center">
            <header className=''>Text</header>
          </div>
        </section>


        {/* Intro */}
        <section className='flex text-center min-h-[20vh] justify-center items-center '>
          <div className="flex-1 flex flex-col">
            <header className='flex-1'>Who we are</header>
            <p className='flex-2'>Text</p>
          </div>
          <div className="flex-2 flex justify-center items-center">
            <p className=''>Text</p>
          </div>
        </section>


        {/* Services */}
        <section className='py-10 text-center min-h-[80vh] bg-neutral-200'>
          <div>
            
          </div>

        </section>


        {/* About */}
        <section className='py-10 text-center min-h-[20vh]'>

        </section>


        {/* Contact */}
        <section className='py-10 text-center min-h-[30vh] bg-neutral-400'>

        </section>

        {/* Footer */}
        <section className='py-10 text-center bg-neutral-500'>

        </section>

      </div>
    </>
  );
}
