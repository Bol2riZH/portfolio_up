import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
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
            src={project.image}
            alt={project.title}
            className='w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-90'></div>
        </div>

        <div className='absolute inset-0 p-6 flex flex-col justify-end'>
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-white'>{project.title}</h3>
            <p className='text-zinc-400'>{project.description}</p>

            <div className='flex flex-wrap gap-2'>
              {project.tech.slice(0, 4).map(tech => (
                <span key={tech} className='text-xs font-medium bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-full'>
                  {tech}
                </span>
              ))}
            </div>

            <motion.div
              className='inline-flex items-center gap-2 text-white hover:text-zinc-300 transition-colors'
              whileHover={{ x: 5 }}
            >
              En savoir plus <ExternalLink size={16} />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
