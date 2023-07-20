export function PUCTab() {
  return (
    <div>
      <h3 className="text-xl">
        Computer Science Bachelor{' '}
        <strong className="text-purple-500 font-bold">@PUC</strong>
      </h3>
      <span className="text-sm text-gray-700">August 2023 - Present</span>
      <ul className="mt-6 flex flex-col gap-2">
        <li className="flex items-center gap-2">
          <div className="text-violet-500">{'>'}</div>
          Database
        </li>
        <li className="flex items-center gap-2">
          <div className="text-violet-500">{'>'}</div>
          Graphics processing
        </li>
        <li className="flex items-center gap-2">
          <div className="text-violet-500">{'>'}</div>
          Software engineering
        </li>
        <li className="flex items-center gap-2">
          <div className="text-violet-500">{'>'}</div>
          Artificial inteligence
        </li>
        <li className="flex items-center gap-2">
          <div className="text-violet-500">{'>'}</div>
          Computer network
        </li>
        <li className="flex items-center gap-2">
          <div className="text-violet-500">{'>'}</div>
          Information system
        </li>
      </ul>
    </div>
  );
}
