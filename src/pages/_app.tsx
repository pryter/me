import { AnimatePresence, motion } from "framer-motion"
import { AppProps } from "next/app"
import "../styles/global.css"
import { useRouter } from "next/router"
import { initializeApp } from "@firebase/app"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCMod8PpRB5EjmSDNfbt8RwTrE5sOLgOU",
  authDomain: "whaly-97950.firebaseapp.com",
  projectId: "whaly-97950",
  storageBucket: "whaly-97950.firebasestorage.app",
  messagingSenderId: "955360581459",
  appId: "1:955360581459:web:931b61c6e18bbc9fbd73a6",
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  initializeApp(firebaseConfig)

  return (
    <AnimatePresence exitBeforeEnter={true}>
      <motion.div
        key={router.pathname}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0.1% 0 0)" }}
        exit={{ clipPath: "inset(0 0.1% 0 100%)" }}
        transition={{ duration: 0.2 }}
        className={router.pathname !== "/" ? "overflow-y-auto" : ""}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
