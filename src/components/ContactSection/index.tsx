import { Title } from "../Title";
import { motion } from "framer-motion"

const linkVariation = {
  initial: { width: '0%' },
  onHover: { width: '100%' },
}

export function ContactSection() {
  return (
    <div id="contact" className="min-h-screen flex flex-col justify-center">
      <Title>Contact me!</Title>
      <span className="mt-4">
        Stay in touch our send me a email at{" "}
        <motion.a
          initial="initial"
          whileHover="onHover"
          className="text-violet-500 inline-block font-bold"
          href="mailto:rodrigomtc82@gmail.com"
        >
          <span>rodrigomtc82@gmail.com</span>
          <motion.div variants={linkVariation} className="h-[2px] bg-violet-500" />
        </motion.a>
      </span>
      <form className="mt-12 flex flex-col items-start gap-4 max-w-lg">
        <label className="w-full" htmlFor="name">
          <input
            className="w-full border border-gray-200 py-2 px-4 rounded-md outline-none hover:border-violet-500 focus:border-violet-500 transition-all"
            type="text"
            id="name"
            placeholder="Name"
          />
        </label>
        <label className="w-full" htmlFor="email">
          <input
            className="w-full border border-gray-200 py-2 px-4 rounded-md outline-none hover:border-violet-500 focus:border-violet-500 transition-all"
            type="email"
            id="email"
            placeholder="email@email.com"
          />
        </label>
        <label className="w-full" htmlFor="message">
          <textarea
            rows={5}
            placeholder="Message"
            className="resize-y w-full border border-gray-200 py-2 px-4 rounded-md outline-none hover:border-violet-500 focus:border-violet-500 transition-colors"
            id="message"
          />
        </label>
        <button
          type="submit"
          className="border border-violet-500 text-violet-500 p-4 rounded-md hover:bg-violet-200 transition-all"
        >
          Send message
        </button>
      </form>
    </div>
  )
}
