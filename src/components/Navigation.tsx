import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React from 'react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const menuItems = ['accueil', 'services', 'compétences', 'projets', 'contact'];

  return (
    <nav className='fixed w-full bg-zinc-900/90 backdrop-blur-sm z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <motion.span
            className='text-2xl font-bold text-white'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Matthieu REUNGOAT
          </motion.span>

          <div className='hidden md:flex space-x-8'>
            {menuItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item)}
                className='text-zinc-400 hover:text-white transition-colors capitalize'
              >
                {item}
              </motion.button>
            ))}
          </div>

          <button className='md:hidden text-white' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className='md:hidden bg-zinc-900 border-t border-zinc-800'
        >
          <div className='px-2 pt-2 pb-3 space-y-1'>
            {menuItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className='block w-full text-left px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg capitalize'
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
