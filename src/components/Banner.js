import React from 'react';
// import Image from "../assets/avatar.svg"
import { FaGithub, FaInstagram, FaDribbble, } from 'react-icons/fa';
import { TypeAnimation } from "react-type-animation"
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {

  return (
    <section
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id="home">

      <div className='container mx-auto'>

        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

          <div className=' flex-1 text-center font-secondary lg:text-left'>

            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg-text-[110px]'>
              ALMAZ <span>NURSULTAN</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary
        font-semibold uppercase leading-[1] tex'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Beginning',
                2000,
                'Frontend',
                2000,
                'Developer',
                2000,
              ]}
                speed={50}
                className='text-cyan-600'
                wrapper='span'
                repeat={Infinity}
              />

              <p className='text-2xl mb-8 max-w-lg mx-auto lg:mx-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

            </motion.div>

            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={'show'}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'> Contact me</button>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.12)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'> <FaGithub /> </a>

              <a href='#'> <FaInstagram /> </a>

              <a href='#'> <FaDribbble /> </a>
            </motion.div>
          </div>

          {/* <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt='foto' />
        </div> */}

        </div>
      </div>
    </section>
  )
};

export default Banner;
