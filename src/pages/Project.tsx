import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb, Trophy, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectsPage = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const currentIndex = projects.findIndex(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prev => (prev === (project?.images.length ?? 1) - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(timer);
  }, [project]);

  if (!project) {
    return (
      <div className='min-h-screen bg-zinc-900 text-white flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-4'>Projet non trouvé</h1>
          <Link to='/' className='text-zinc-400 hover:text-white'>
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-zinc-900 text-white py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className='mb-8'>
          <Link to='/' className='inline-flex items-center text-zinc-400 hover:text-white transition-colors'>
            <ArrowLeft className='w-5 h-5 mr-2' />
            Retour à l'accueil
          </Link>
        </motion.div>

        <div className='flex justify-between mb-8'>
          {currentIndex === 0 ? (
            <div className='flex-grow' />
          ) : (
            <Link
              to={`/projects/${projects[currentIndex - 1].id}`}
              className='flex items-center justify-center border-2 border-zinc-500 bg-zinc-800 hover:bg-zinc-700 rounded-full p-4 mx-2 transition-colors'
            >
              <ArrowLeft className='w-5 h-5 text-zinc-400' />
            </Link>
          )}
          {currentIndex < projects.length - 1 && (
            <Link
              to={`/projects/${projects[currentIndex + 1].id}`}
              className='flex items-center justify-center border-2 border-zinc-500 bg-zinc-800 hover:bg-zinc-700 rounded-full p-4 mx-2 transition-colors'
            >
              <ArrowRight className='w-5 h-5 text-zinc-400' />
            </Link>
          )}
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='space-y-4'>
            <div className='relative h-[400px]'>
              {project.images.map((image, index) => (
                <motion.img
                  key={image}
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className='w-full h-[400px] object-cover rounded-xl absolute top-0 left-0'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>

            <div className='flex justify-center gap-2'>
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-zinc-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='space-y-6'
          >
            <h1 className='text-4xl font-bold'>{project.title}</h1>
            <p className='text-zinc-400 text-lg'>{project.fullDescription}</p>

            <div className='flex flex-wrap gap-2'>
              {project.tech.map(tech => (
                <span key={tech} className='px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300'>
                  {tech}
                </span>
              ))}
            </div>

            {/* <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-white bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition-colors'
            >
              Voir le code <ExternalLink size={16} />
            </a> */}
          </motion.div>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mt-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='space-y-4'
          >
            <div className='flex items-center gap-2 text-xl font-semibold'>
              <CheckCircle2 className='text-green-500' />
              Fonctionnalités
            </div>
            <ul className='space-y-2 text-zinc-400'>
              {project.features.map((feature, index) => (
                <li key={index} className='flex items-start gap-2'>
                  <span className='min-w-[1.5rem]'>•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className='space-y-4'
          >
            <div className='flex items-center gap-2 text-xl font-semibold'>
              <XCircle className='text-red-500' />
              Défis
            </div>
            <ul className='space-y-2 text-zinc-400'>
              {project.challenges.map((challenge, index) => (
                <li key={index} className='flex items-start gap-2'>
                  <span className='min-w-[1.5rem]'>•</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className='space-y-4'
          >
            <div className='flex items-center gap-2 text-xl font-semibold'>
              <Lightbulb className='text-yellow-500' />
              Solutions
            </div>
            <ul className='space-y-2 text-zinc-400'>
              {project.solutions.map((solution, index) => (
                <li key={index} className='flex items-start gap-2'>
                  <span className='min-w-[1.5rem]'>•</span>
                  {solution}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className='space-y-4'
          >
            <div className='flex items-center gap-2 text-xl font-semibold'>
              <Trophy className='text-blue-500' />
              Résultats
            </div>
            <ul className='space-y-2 text-zinc-400'>
              {project.results.map((result, index) => (
                <li key={index} className='flex items-start gap-2'>
                  <span className='min-w-[1.5rem]'>•</span>
                  {result}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
