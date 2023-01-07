import { AppProps } from "next/app"
import { AnimatePresence, motion } from "framer-motion"
import "../styles/global.css"
import { useRouter } from "next/router"

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  return (
    <AnimatePresence exitBeforeEnter={true}>
      <motion.div
        key={router.pathname}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0.1% 0 0)" }}
        exit={{ clipPath: "inset(0 0.1% 0 100%)" }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
