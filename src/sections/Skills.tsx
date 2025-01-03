import { motion } from 'framer-motion';
import {
  Blocks,
  Boxes,
  Container,
  Cpu,
  FileJson,
  FolderGit,
  GitBranch,
  Network,
  Slack as ReactLogo,
  Server,
  Terminal,
  Workflow,
} from 'lucide-react';
import SkillCard from '../components/SkillCard';
const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: Blocks },
      { name: 'CSS', icon: Blocks },
      { name: 'JavaScript | TypeScript', icon: FileJson },
      { name: 'React | Next.js', icon: ReactLogo },
      { name: 'Vue.js | Nuxt.js', icon: Blocks },
      { name: 'Tailwind', icon: Blocks },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'PHP | Symfony', icon: Boxes },
      { name: 'Node.js | Express | Nest.js', icon: Server },
      { name: 'API', icon: Network },
      { name: 'SQL', icon: Workflow },
    ],
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Déploiement', icon: Cpu },
      { name: 'Docker', icon: Container },
      { name: 'Git', icon: FolderGit },
      { name: 'CI/CD', icon: GitBranch },
    ],
  },
  {
    category: 'Administration Système',
    items: [
      { name: 'Linux', icon: Terminal },
      { name: 'Windows', icon: Terminal },
      { name: 'Bash', icon: Terminal },
      { name: 'Serveur', icon: Server },
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
            Une expertise approfondie dans le développement web moderne, du frontend au backend, en passant par
            l'administration système.
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
