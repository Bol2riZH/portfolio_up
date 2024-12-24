import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import ImageAvatars from '../components/Avatar';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id='accueil' className='min-h-screen bg-zinc-900 text-white relative overflow-hidden flex items-center'>
      <div className='absolute inset-0 z-0'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4, ease: 'easeInOut' }}>
          <div className='absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900/50'></div>
        </motion.div>
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className='w-full h-full'
        >
          <img
            src='pexels-singkham-178541-1108572.jpg'
            alt='arrow black and yellow'
            className='w-full h-full object-cover object-center'
          />
        </motion.div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className='space-y-8'
          >
            <div className='space-y-4'>
              <motion.h1
                className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <span>Développeur & Architecte de Solutions Métier</span>
              </motion.h1>
              <motion.p
                className='text-xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Développeur Full Stack | Architecte Digital | Facilitateur Business
              </motion.p>
            </div>

            <motion.div
              className='space-y-4 text-lg text-zinc-400'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <p>
                Développeur passionné, je transforme les concepts complexes en solutions pratiques, en mettant l'accent
                sur la valeur métier et l'expérience utilisateur.
              </p>
              <p>
                Je travaille en étroite collaboration avec le métier pour comprendre leurs besoins et créer des
                solutions qui répondent à leurs attentes en optimisant l'impact stratégique et la valeur business.
              </p>
              <div className='text-white flex items-center gap-6 space-y-6'>
                <ImageAvatars />
                <ul>
                  <li className='ml-[-10px] hover:text-green-300 transition-colors'>Communication claire</li>
                  <li className='ml-[-2px] hover:text-green-300 transition-colors'>Feedback rapide</li>
                  <li className='ml-[-10px] hover:text-green-300 transition-colors'>Valeur business</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className='flex gap-4'
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className='bg-white text-zinc-900 px-8 py-3 hover:bg-green-500 transition-colors inline-flex items-center gap-2'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Travaillons ensemble <ChevronRight size={20} />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('projets')}
                className='border border-white/20 text-white px-8 py-3 hover:bg-white/10 transition-colors'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
