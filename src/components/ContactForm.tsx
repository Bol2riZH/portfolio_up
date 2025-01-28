import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Matthieu REUNGOAT',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success('Message envoyé avec succès!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <label htmlFor='name' className='block text-sm font-medium text-zinc-700 mb-1'>
          Nom
        </label>
        <input
          type='text'
          id='name'
          name='name'
          required
          className='w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent bg-white'
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <label htmlFor='email' className='block text-sm font-medium text-zinc-700 mb-1'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          required
          className='w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent bg-white'
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label htmlFor='message' className='block text-sm font-medium text-zinc-700 mb-1'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          required
          rows={4}
          className='w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent bg-white'
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </motion.div>

      <motion.button
        type='submit'
        className='w-full bg-zinc-900 text-white px-6 py-3 rounded-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'} <Send size={20} />
      </motion.button>
    </form>
  );
};

export default ContactForm;
