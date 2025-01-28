import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className='group relative overflow-hidden rounded-xl bg-zinc-900'
    >
      <Link to={`/projects/${project.id}`}>
        <div className='aspect-w-16 aspect-h-9 relative'>
          <img
            src={project.images[0]}
            alt={project.title}
            className='w-full h-[300px] object-cover object-center group-hover:scale-110 transition-transform duration-500'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-zinc-900/60 opacity-95'></div>
        </div>

        <div className='absolute inset-0 p-8 flex flex-col justify-end'>
          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold text-white'>{project.title}</h3>
            <p className='text-zinc-200 text-lg'>{project.description}</p>

            <div className='flex flex-wrap gap-2'>
              {project.tech.slice(0, 4).map(tech => (
                <span key={tech} className='text-sm font-medium bg-zinc-800 text-zinc-200 px-3 py-1.5 rounded-full'>
                  {tech}
                </span>
              ))}
            </div>

            <motion.div
              className='inline-flex items-center gap-2 text-white hover:text-zinc-300 transition-colors text-lg'
              whileHover={{ x: 5 }}
            >
              En savoir plus <ExternalLink size={20} />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
