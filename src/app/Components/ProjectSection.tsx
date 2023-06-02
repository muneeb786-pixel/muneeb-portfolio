import React from "react";
import Image from "next/image";
import  Link  from "next/link";
import { BsGithub, BsArrowRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  github: string | undefined;
}

const project: Project[] = [
  {
    name: "Ezeebooks",
    description:
      "This is a web-base Finance application that overcome your burden with embaded crm, accounts and many more.",
    image: "/ezeebooks.png",
    link: "https://ezeebooks.ae",
    github: undefined,
  },
  {
    name: "Thestaffweb",
    description:
      "This is a web-base HR application that overcome your burden with Attendace, Payrol, Courses and many more.",
    image: "/staffweb.png",
    link: "https://thestaffweb.com/",
    github: undefined,
  },

  {
    name: "Stars of Tomorrow",
    description:
      "This is a web-base community that covers Models, Actors director are other film industries for hiring and job offer purpose",
    image: "/stars.png",
    link: "https://login.starsoftomorrow.io/",
    github: undefined,
  },
];

export default function ProjectSection() {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl ">
        Projects
        <hr className=" w-8 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>{" "}
      <div className="flex flex-col space-y-20">
        {project.map((project, index) => {
          return (
            <div key={index}>
              <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className="md:w-1/2 mt-10">
                  <Link href={project.link} target="_blank">
                  <Image
                    src={project.image}
                    alt=""
                    width={500}
                    height={500}
                    className="rounded-xl shadow-xl hover:opacity-70 w-fit h-fit object-cover"
                  />
                </Link>

                </div>
                <div className="md:w-1/2 mt-10">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link
                     href={project.github!=undefined ? project.github : '#' } 
                     target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                      </Link>
                      <Link
                      href={project.link}
                      target="_blank"
                      >
                      <BsArrowRightSquare
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                      </Link>
                  </div>
                </div>
              </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
}
