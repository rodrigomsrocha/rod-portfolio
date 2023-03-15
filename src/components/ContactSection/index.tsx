import { Title } from "../Title";
import { motion } from "framer-motion"
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import emailjs from "@emailjs/browser"
import { toast } from "react-hot-toast";
import clsx from "clsx";

const schema = yup.object({
  name: yup.string().required("name is required"),
  email: yup.string().email("insert a valid email").required("email is required"),
  message: yup.string().min(5, "insert a bigger message").required("message is required")
})

type SendEmailFormData = yup.InferType<typeof schema>

const linkVariation = {
  initial: { width: '0%' },
  onHover: { width: '100%' },
}

export function ContactSection() {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<SendEmailFormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: SendEmailFormData) => {
    const serviceId = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    const publicAPIKey = import.meta.env.VITE_PUBLIC_API_KEY

    emailjs.send(
      serviceId,
      templateId,
      { ...data },
      publicAPIKey
    ).then(() => {
      toast.success("Email sended with success!")
    }).catch(() => {
      toast.error("Couldn't send the email!")
    })

    reset()
  }

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
      <form
        className="mt-12 flex flex-col items-start gap-6 max-w-lg"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label className="w-full" htmlFor="name">
          <span className="text-red-500">{errors.name?.message}</span>
          <input
            className={clsx(
              "w-full border border-gray-200 py-2 px-4 rounded-md outline-none hover:border-violet-500 focus:border-violet-500 transition-all",
              {
                "border-red-500": errors.name
              }
            )}
            type="text"
            id="name"
            placeholder="Name"
            {...register("name")}
          />
        </label>
        <label className="w-full" htmlFor="email">
          <span className="text-red-500">{errors.email?.message}</span>
          <input
            className={clsx(
              "w-full border border-gray-200 py-2 px-4 rounded-md outline-none hover:border-violet-500 focus:border-violet-500 transition-all",
              {
                "border-red-500": errors.name
              }
            )}
            type="email"
            id="email"
            placeholder="email@email.com"
            {...register('email')}
          />
        </label>
        <label className="w-full" htmlFor="message">
          <span className="text-red-500">{errors.message?.message}</span>
          <textarea
            rows={5}
            placeholder="Message"
            className={clsx(
              "resize-y w-full border border-gray-200 py-2 px-4 rounded-md outline-none hover:border-violet-500 focus:border-violet-500 transition-colors",
              {
                "border-red-500": errors.name
              }
            )}
            id="message"
            {...register("message")}
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
