import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { BallCanvas, EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { useContextProvider } from '../useContext/UseContext'
import { footers } from '../constants'
import Footer from './Footer'

const Contact = () => {
  const { isMobile, checkMobile } = useContextProvider()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const formRef = useRef(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .send(
        'service_tmgtb5g',
        'template_yjwygvh',
        {
          from_name: form.name,
          to_name: 'Serhii',
          from_email: form.email,
          to_email: 'serhiiborodin83@gmail.com',
          message: form.message,
        },
        'iF05EyXY9xGuDgDJA'
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you, I will back to you as soon as possible.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.log(error)
          alert('Something went wrong.')
        }
      )
  }

  return (
    <div className='xl:flex-row flex-col-reverse flex gap-10 overflow-hidden relative mt-[-25px]'>
      <motion.span
        className='flex-[0.75] transparent p-8 rounded-2xl'
        variants={slideIn('left', 'tween', 0.2, 1)}
      >
        <p className={styles.heroSubText}>Get in touch</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-while font-medium mb-4 '>Your name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='What is your name?'
              className={`${
                isMobile
                  ? 'bg-tertiary border-none py-4 px-4 placeholder:text-secondary text-white rounded-lg outline-none font-medium  '
                  : 'bg-transparent border py-4 px-4 placeholder:text-secondary text-white rounded-lg outline-none font-medium'
              }`}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-while font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='What is your email?'
              className={`${
                isMobile
                  ? 'bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  : 'bg-transparent py-4 px-4 placeholder:text-secondary text-white rounded-lg outline-none border font-medium'
              }`}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-while font-medium mb-4'>Your message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className={`${
                isMobile
                  ? 'bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  : 'bg-transparent py-4 px-4 placeholder:text-secondary text-white rounded-lg outline-none border font-medium'
              }`}
            />
          </label>
          <button
            type='submit'
            className={`${
              isMobile
                ? 'bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl border-none'
                : 'bg-transparent py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl border'
            }`}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.span>

      {!isMobile && !checkMobile && (
        <motion.span
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='absolute h-full w-full z-[-1]'
        >
          <EarthCanvas />
        </motion.span>
      )}
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
