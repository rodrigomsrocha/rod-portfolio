import { Title } from "../Title";
import { ArrowSquareOut, GithubLogo } from "phosphor-react"

export function ProjectsSection() {
  return (
    <div id="projects" className="min-h-screen flex flex-col justify-center">
      <Title>My projects</Title>
      <main className="flex flex-col gap-8">
        <div className="self-end flex flex-col gap-4 items-end text-right">
          <span className="text-violet-500 leading-none -mb-3">personal blog</span>
          <h3 className="text-2xl font-bold">Rodblog</h3>
          <p className="max-w-md p-4 bg-gray-100 shadow-md shadow-gray-200 rounded-md">
            Personal blog where I post things I learn, build, or
            anything about the dev world that I found interesting
          </p>
          <div className="flex gap-4 text-gray-600">
            <span>NextJS</span>
            <span>TailwindCSS</span>
            <span>Hygraph</span>
            <span>Typescript</span>
            <span>GraphQL</span>
          </div>
          <a
            href="https://github.com/rodrigomsrocha/rodblog"
            target="_blank"
            className="hover:text-violet-500 transition-all"
          >
            <GithubLogo weight="regular" size={32} />
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-violet-500 leading-none -mb-3">image hosting</span>
          <h3 className="text-2xl font-bold">UPFI</h3>
          <p className="max-w-md p-4 bg-gray-100 shadow-md shadow-gray-200 rounded-md">
            Project build in a challenge from the bootcamp I did at Rocketseat,
            in this application you can host your images, and see other user&apos;s images
          </p>
          <div className="flex gap-4 text-gray-600">
            <span>NextJS</span>
            <span>Chakra UI</span>
            <span>Fauna DB</span>
          </div>
          <a
            href="https://github.com/rodrigomsrocha/upfi"
            target="_blank"
            className="hover:text-violet-500 transition-all"
          >
            <GithubLogo weight="regular" size={32} />
          </a>
        </div>
        <div className="self-end flex flex-col gap-4 items-end text-right">
          <span className="text-violet-500 leading-none -mb-3">finacial app</span>
          <h3 className="text-2xl font-bold hover:text-violet-500 transition-all">
            <a href="https://finext.vercel.app" target="_blank">Finext</a>
          </h3>
          <p className="max-w-md p-4 bg-gray-100 shadow-md shadow-gray-200 rounded-md">
            Finance organizer, here you can sign up your withdraws and incomes and have a
            full detail of what you&apos;ve waist, what you&apos;ve gain and your current
            balance
          </p>
          <div className="flex gap-4 text-gray-600">
            <span>NextJS</span>
            <span>Chakra UI</span>
            <span>Supabase</span>
            <span>Hookform</span>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/rodrigomsrocha/finext"
              target="_blank"
              className="hover:text-violet-500 transition-all"
            >
              <GithubLogo weight="regular" size={32} />
            </a>
            <a
              href="https://finext.vercel.app"
              target="_blank"
              className="hover:text-violet-500 transition-all"
            >
              <ArrowSquareOut weight="regular" size={32} />
            </a>
          </div>
        </div>
        <a
          target="_blanck"
          href="https://github.com/rodrigomsrocha"
          className="self-center mt-8 p-4 border border-violet-500 rounded-md text-violet-500 hover:bg-violet-200 transition-all"
        >
          See more on my Github!
        </a>
      </main>
    </div>
  )
}
