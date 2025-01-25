import { motion } from 'framer-motion';
import {
  Box,
  BrainCircuit,
  Code2,
  Command,
  Container,
  Database,
  Figma,
  FileCode,
  FolderGit,
  Image,
  Network,
  Palette,
  PenTool,
  Terminal,
  Workflow,
} from 'lucide-react';
import SkillCard from '../components/SkillCard';
const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: FileCode },
      { name: 'JavaScript | TypeScript', icon: Code2 },
      { name: 'React | Next.js', icon: Box },
      { name: 'Vue.js | Nuxt.js', icon: Box },
      { name: 'CSS | Tailwind', icon: Palette },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Symfony | Drupal', icon: FileCode },
      { name: 'Node.js | Express | Nest.js', icon: Terminal },
      { name: 'API', icon: Network },
      { name: 'SQL | Oracle | Db2', icon: Database },
      { name: 'ERP (M3)', icon: BrainCircuit },
      { name: 'Talend', icon: Workflow },
    ],
  },
  {
    category: 'Design',
    items: [
      { name: 'Figma', icon: Figma },
      { name: 'Photoshop', icon: Image },
      { name: 'Illustrator', icon: PenTool },
    ],
  },
  {
    category: 'Système & Outils',
    items: [
      { name: 'Git', icon: FolderGit },
      { name: 'Docker', icon: Container },
      { name: 'Cmd', icon: Command },
    ],
  },
];

const Skills = () => {
  return (
    <section id='compétences' className='py-20 bg-zinc-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold mb-4'>Compétences Techniques</h2>
          <p className='text-zinc-400 max-w-2xl mx-auto'>
            Une expertise approfondie dans le développement web moderne, du frontend au backend, compétences et outils
            métier, ERP.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8'>
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className='bg-zinc-800/50 p-6 rounded-xl'
            >
              <h3 className='text-xl font-semibold mb-6'>{category.category}</h3>
              <div className='grid grid-cols-2 gap-4'>
                {category.items.map((skill, skillIndex) => (
                  <SkillCard key={skill.name} name={skill.name} icon={skill.icon} delay={skillIndex * 0.1} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
