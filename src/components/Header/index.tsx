import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const headerVariant = {
  visible: { y: '0%' },
  hidden: { y: '-100%' },
};

export function Header() {
  const { scrollY } = useScroll();
  const paddingY = useTransform(scrollY, [0, 20], ['2rem', '1rem']);
  const shadow = useTransform(
    scrollY,
    [0, 20],
    ['none', '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)']
  );
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const update = () => {
    if (scrollY.getPrevious() < scrollY.get()) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
  };

  useEffect(() => {
    return scrollY.onChange(update);
  }, []);

  return (
    <motion.header
      variants={headerVariant}
      animate={isHeaderVisible ? 'visible' : 'hidden'}
      style={{
        paddingTop: paddingY,
        paddingBottom: paddingY,
        boxShadow: shadow,
      }}
      className="flex items-center justify-between px-12 sticky top-0 left-0 right-0"
    >
      <a href="#">
        <img
          className="w-10 hover:bg-violet-200 rounded-[4px] transition-all"
          src="/logo.svg"
          alt="letter r"
        />
      </a>

      <nav className="flex items-center gap-6">
        <ul className="flex text-sm items-center gap-4 font-mono">
          {['Who am i?', 'Education', 'Projects', 'Contact'].map((item) => (
            <li className="text-violet-500" key={item}>
              <a href="#">
                {'<'}
                <span className="text-black hover:text-violet-500 transition-all">
                  {item}
                </span>
                {' />'}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          target="_blank"
          className="text-sm border border-violet-500 rounded-md px-4 py-2 text-violet-500 hover:bg-violet-200 transition-all font-mono cursor-pointer"
        >
          Resume
        </a>
      </nav>
    </motion.header>
  );
}
