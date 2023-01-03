'use client'
import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { projects } from "../../projects"

const Projects = (): JSX.Element => {

  interface projectId {
    id: number
  }

  projects.sort((a: projectId, b: projectId) => b.id - a.id)

  return (
    <div className='flex items-center justify-center w-full h-full min-h-screen bg-[#202020] pt-20 pb-4'>
      <div className="grid gap-8 md:grid-cols-2 md:w-[90%] lg:w-[60%] lg:min-w-[900px] px-4">
        {
          projects && projects.map((project) => (
            <div key={project.id}>
              <ProjectCard
                id={project.id}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                stack={project.stack}
                github={project.github}
                deploy={project.deploy}
                image={project.image}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Projects