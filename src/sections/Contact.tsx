import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl font-bold mb-4'>Contactez-moi</h2>
          <p className='text-zinc-600'>Discutons de votre projet et voyons comment je peux vous aider à le réaliser.</p>
        </motion.div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
