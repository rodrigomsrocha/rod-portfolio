export function RocketseatTab() {
  return (
    <div>
      <h3 className="text-xl">
        React <strong className="text-purple-500 font-bold">@Rocketseat</strong>
      </h3>
      <span className="text-sm text-gray-700">
        September 2021 - September 2022
      </span>
      <ul className="mt-6 flex flex-col gap-2">
        <li className="flex items-center gap-2">
          <div className="text-violet-500">{'>'}</div>
          React fundamentals
        </li>
        <li className="flex items-center gap-2">
          <div className="text-violet-500">{'>'}</div>
          Styling with Tailwind, ChakraUI, SASS
        </li>
        <li className="flex items-center gap-2">
          <div className="text-violet-500">{'>'}</div>
          Working with CMS&apos;s
        </li>
        <li className="flex items-center gap-2">
          <div className="text-violet-500">{'>'}</div>
          Static applications with NextJS
        </li>
        <li className="flex items-center gap-2">
          <div className="text-violet-500">{'>'}</div>
          Unit tests
        </li>
      </ul>
    </div>
  );
}
