interface TabProps {
  label: string;
  active: boolean;
  onActiveTabChange: (tab: string) => void;
}

export function TabLabel({ label, active, onActiveTabChange }: TabProps) {
  return (
    <li
      onClick={() => onActiveTabChange(label)}
      className={`px-4 py-2 border-l-2 ${
        active && 'border-purple-500 text-purple-500'
      } hover:bg-violet-200 hover:text-purple-500 transition cursor-pointer`}
    >
      {label}
    </li>
  );
}
