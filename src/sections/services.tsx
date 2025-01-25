import { motion } from 'framer-motion';
import { Brain, Code, Database, Layout } from 'lucide-react';

const services = [
  {
    icon: <Layout className='w-12 h-12' />,
    title: 'Frontend Engineering',
    description: "Création d'interfaces modernes et responsives",
  },
  {
    icon: <Database className='w-12 h-12' />,
    title: 'Backend Engineering',
    description: 'Architecture robuste et APIs performantes',
  },
  {
    icon: <Code className='w-12 h-12' />,
    title: 'Développement',
    description: 'Solutions sur mesure avec les dernières technologies',
  },
  {
    icon: <Brain className='w-12 h-12' />,
    title: 'Problem Solving',
    description: 'Résolution créative de problèmes complexes',
  },
];

const Services = () => {
  return (
    <section id='services' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl font-bold mb-4'>Services</h2>
          {/* <h3 className='text-xl font-semibold mb-2'>Des solutions complètes pour vos projets digitaux.</h3>
          <p className='text-zinc-600 max-w-2xl mx-auto'>
            Je vous propose des solutions sur mesure sur les technologies qui correspondent à vos besoins et à vos
            projets.
          </p> */}
          <p className='text-zinc-600 max-w-2xl mx-auto'>Des solutions complètes pour vos projets.</p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className='bg-zinc-50 p-6 rounded-xl hover:shadow-lg transition-shadow'
            >
              <div className='text-zinc-900 mb-4'>{service.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-zinc-600'>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
