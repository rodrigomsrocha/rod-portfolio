import { Logo } from './Logo';

export function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-12">
      <div>
        <Logo />
      </div>
      <nav className="flex items-center gap-6">
        <ul className="flex items-center gap-4 font-mono">
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
        <button className="border border-violet-500 rounded-md px-4 py-2 text-violet-500 hover:bg-violet-200 transition-all font-mono">
          Resume
        </button>
      </nav>
    </header>
  );
}
