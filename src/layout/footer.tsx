import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-zinc-900 text-white py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          <div className='text-zinc-400'>© {new Date().getFullYear()} Matthieu REUNGOAT. Tous droits réservés.</div>
          <div className='flex space-x-6'>
            <motion.a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ y: -3 }}
              className='text-zinc-400 hover:text-white transition-colors'
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ y: -3 }}
              className='text-zinc-400 hover:text-white transition-colors'
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
