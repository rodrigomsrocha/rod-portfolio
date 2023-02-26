interface TabProps {
  label: string;
  active: boolean;
}

export function Tab({ label, active }: TabProps) {
  return (
    <li
      className={`px-4 py-2 border-l-2 ${
        active && 'border-purple-500 text-purple-500'
      } hover:bg-violet-200 hover:text-purple-500 transition cursor-pointer`}
    >
      {label}
    </li>
  );
}
