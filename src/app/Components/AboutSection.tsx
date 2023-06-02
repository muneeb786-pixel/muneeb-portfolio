"use client"
import Image from 'next/image'
import React from 'react'

const skills=[
    { skill: "HTML"},
    { skill: "CSS"},
    { skill: "Tailwind css"},
    { skill: "Javascript"},
    { skill: "Typecript"},
    { skill: "React"},
    { skill: "Next.js"},
    { skill: "Node js"},
    { skill: "PHP"},
    { skill: "Laravel"},
    { skill: "Livewire"},
    { skill: "Mysql"},
    { skill: "Hyperledger fabric"},
    { skill: "Docker"},
    { skill: "Git"},
]

export default function AboutSection() {
  return (
    <section id="about">
        <div className='my-8 md:pt-16 md:pb-48'>
            <h1 className='text-center font-bold text-4xl '>About me
            <hr className=' w-8 h-1 mx-auto my-4 bg-teal-500 border-0 rounded' />
            </h1>
            <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-y-0 md:space-x-10 md:text-left md:p-4   md:flex-row '>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Get to know me!</h1>
                    <p>
                        {" "}
                        Hi, my name is Muneeb and I am a {" "}
                        <span className='font-bold'>{"highly ambitious"}</span>,
                        <span className='font-bold'>{"self-motivated"}</span>, and
                        <span className='font-bold'>{"driven"}</span>, software engineer
                        based in Lahore, Pakistan 
                    </p>
                    <br />
                    <p>I graduated from Government College University, Lahore in 2023 
                        with a BS Computer Science and have  been working in the field 
                        since 2021</p>
                    <br />
                    
                    <p>I believe that you should{" "}
                    <span className='font-bold text-teal-500'>
                        never stop growing
                    </span>{" "}
                    and that&#39;s what I strive to do, I have a passion for technology and a desire
                    to alway push the limits of what is  possible, I am  excited to see where my career 
                    takes me am alway open to new opportunities.
                    </p>
                </div>  
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>My Skills</h1>
                    <div className='flex flex-wrap justify-center md:justify-start '>
                        {
                            skills.map((item,key)=>{
                                return <p
                                 key={key} 
                                 className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'
                                 >
                                    {item.skill}
                                    </p>
                            })
                        }
                    </div>
                    <Image
                    className='hidden md:block md:relative md:bottom-4 md:left-32 md:z-0' 
                    src="/hero-image.png" 
                    alt="hero image" 
                    width={200} 
                    height={200}/>
                </div>  
             </div>
        </div>
    </section>
  )
}
