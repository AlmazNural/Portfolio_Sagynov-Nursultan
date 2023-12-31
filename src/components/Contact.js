import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
           variants={fadeIn("right", 0.6)}
           initial="hidden" 
           whileInView={'show'}
           viewport={{ once: false, amount: 0.3 }} 
          className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-cyan-600 font-medium mb-2
            trackibg-wide'>
                Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          
          <motion.div
           variants={fadeIn("left", 0.4)}
           initial="hidden" 
           whileInView={'show'}
           viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6
            items-start'>
            <input
              className='bg-transparent border-b py-3 outline-none w-full
          placeholder:text-white focus:border-rose-400 transition-all'
              type="text"
              placeholder='Your name' />

            <input
              className='bg-transparent border-b py-3 outline-none w-full
          placeholder:text-white focus:border-rose-400 transition-all'
              type="text"
              placeholder='Your email' />

            <textarea
              className='bg-transparent border-b py-12 outline-none w-full
          placeholder:text-white focus:border-rose-400 transition-all
          resize-none mb-12'
              placeholder='Your messege'>
            </textarea>
            <button className='btn btn-lg'>Send message</button>
          </motion.div>
        </div>
      </div>
    </section>

  )
};

export default Contact;
