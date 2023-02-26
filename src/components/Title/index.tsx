import { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <h1 className="text-violet-500 text-4xl font-mono mb-8">
      {'<'}
      <span className="text-gray-900">{children}</span> {'/>'}
    </h1>
  );
}
