import { motion } from 'framer-motion';

const linkVariation = {
  initial: { width: '0%' },
  onHover: { width: '100%' },
};

export function MainSection() {
  return (
    <main className="flex flex-col items-start justify-center min-h-screen">
      <span className="block text-violet-500 text-lg font-mono mb-4">
        👋 Hello there, I&apos;m
      </span>
      <h1 className="text-6xl text-gray-900">
        Rodrigo M<span className="text-violet-500">.</span>
      </h1>
      <h1 className="text-6xl text-gray-600 mb-10">
        I create things for internet
      </h1>
      <p className="text-gray-600 text-lg max-w-md mb-12">
        I&apos;m a front-end developer that creates incredible applications for
        the web. My principal goal is to take your project out of the paper with
        some of{' '}
        <motion.a
          initial="initial"
          whileHover="onHover"
          className="text-violet-500 inline-block"
          href="#about"
        >
          <span>my skills</span>
          <motion.div variants={linkVariation} className="h-px bg-violet-500" />
        </motion.a>
        .
      </p>
      <a
        target="_blanck"
        href="https://github.com/rodrigomsrocha"
        className="p-4 border border-violet-500 rounded-md text-violet-500 hover:bg-violet-200 transition-all"
      >
        Check out my Github!
      </a>
    </main>
  );
}
