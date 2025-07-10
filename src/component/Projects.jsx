import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Example projects array
const projects = [
  {
    name: "GrabTheCab",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "/cab.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Code-Cast",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: "/codecast.png",
    source_code_link: "https://github.com/",
  },
];

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => (
  <Tilt
    className='w-0'
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    scale={1.05}
    transitionSpeed={200}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 1.5, 0.75)}
      className='bg-white green-pink-gradient p-5 rounded-2xl sm:w-[360px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src="/github.png"
              alt="source code"
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  </Tilt>
);


const Projects = () => {
  return (
    <div className="w-full px-0">
      <motion.div variants={textVariant()}>
        <p className='text-secondary text-[17px] uppercase tracking-wider'>My work</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Following projects showcase my skills and experience through real-world examples of my work. 
        Each project is briefly described with links to code repositories. It reflects my ability to solve complex problems and create impactful user experiences.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-110'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
