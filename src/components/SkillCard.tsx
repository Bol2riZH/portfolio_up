import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: Icon;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: IconComponent, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center gap-3 bg-zinc-800/50 p-4 rounded-lg hover:bg-zinc-800 transition-colors"
    >
      <IconComponent className="w-6 h-6 text-white" />
      <span className="text-sm font-medium text-zinc-300">{name}</span>
    </motion.div>
  );
};

export default SkillCard;