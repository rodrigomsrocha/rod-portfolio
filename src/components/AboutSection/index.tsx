import { motion } from 'framer-motion';

const imgVariant = {
  initial: { y: 0, filter: 'grayscale(100%)' },
  onHover: { y: -20, filter: 'grayscale(0%)' },
};

export function AboutSection() {
  return (
    <div id="about" className="min-h-screen flex items-center">
      <div className="text-gray-600">
        <h1 className="text-violet-500 text-4xl font-mono mb-8">
          {'<'}
          <span className="text-gray-900">Who am i?</span> {'/>'}
        </h1>
        <div className="text-lg flex flex-col gap-3 mb-4">
          <p>
            Hello! my name is Rodrigo Marques, I always liked to create my own
            thinngs for the internet so I decided to enter into the dev word and
            became into a front-end developer.
          </p>
          <p>
            Everything started with python in a course I made on Youtube, then I
            stopped for some months. After this I started again by studying the
            trinity: HTML, CSS and Javascript.
          </p>
          <p>Currently I&apos;m working with my favorite framework React.</p>
          <p>Here are some of the techs I&apos;ve been working with:</p>
        </div>
        <ul className="flex gap-12">
          <div>
            <li className="flex items-center gap-2">
              <div className="text-violet-500">{'>'}</div>
              Javascript
            </li>
            <li className="flex items-center gap-2">
              <div className="text-violet-500">{'>'}</div>
              React
            </li>
            <li className="flex items-center gap-2">
              <div className="text-violet-500">{'>'}</div>
              NodeJS
            </li>
          </div>
          <div>
            <li className="flex items-center gap-2">
              <div className="text-violet-500">{'>'}</div>
              Typescript
            </li>
            <li className="flex items-center gap-2">
              <div className="text-violet-500">{'>'}</div>
              NestJS
            </li>
            <li className="flex items-center gap-2">
              <div className="text-violet-500">{'>'}</div>
              TailwindCSS
            </li>
          </div>
        </ul>
      </div>
      <div className="w-full flex flex-col items-center gap-8">
        <motion.img
          initial="initial"
          whileHover="onHover"
          variants={imgVariant}
          src="/rod.png"
          alt="avatar"
          className="bg-violet-500 w-80 rounded-xl border-4 border-purple-200"
        />
      </div>
    </div>
  );
}
