import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.a
      href="#home"
      initial={{
        width: '3rem',
        backgroundColor: 'transparent',
      }}
      whileHover={{
        width: '8rem',
        backgroundColor: '#ddd6fe',
      }}
      className="flex font-mono items-end border-2 text-2xl font-bold text-violet-500 border-violet-500 rounded cursor-pointer overflow-hidden py-2 px-3 after:content-['odrigo'] after:opacity-0 hover:after:opacity-100 after:delay-100 after:transition-opacity"
    >
      <strong>R</strong>
    </motion.a>
  );
}
