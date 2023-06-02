import React from 'react'
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className='mx-auto max-w-3xl md:max-w-6xl md:mt-20 mt-10'>
        <hr className='w-full h-0.5 mx-auto mt-0 bg-neutral-200 border-0' />
        <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
          <div className='text-neutral-500 dark:text-neutral-100'>© 2023 Muneeb Ur Rehman</div>
          <div className='flex flex-row items-center justify-center space-x-3 mb-1'>
            <a href="https://github.com/muneeb786-pixel" target="_blank">
              <AiOutlineGithub
              className='hover:-trasnlate-y-1 transition-transform cursor-pointer text-teal-600'
              size={30}
              />
            </a>
            <a href="https://www.linkedin.com/in/muneeb-ur-rehman-/" target="_blank">
              <AiOutlineLinkedin
              className='hover:-trasnlate-y-1 transition-transform cursor-pointer text-teal-600'
              size={30}
              />
            </a>
            <a href="https://web.facebook.com/muneeb.rehman.39982/" target="_blank">
              <AiOutlineFacebook
              className='hover:-trasnlate-y-1 transition-transform cursor-pointer text-teal-600'
              size={30}
              />
            </a>
          </div>
        </div>
    </footer>
  )
}
