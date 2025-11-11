"use client"
import styles from "./loginPage.module.css"
import { useContext, useEffect } from "react"
import { ThemeContext } from "@/context/ThemeContext"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const LoginPage = () => {
  const { theme } = useContext(ThemeContext)
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/")   // safe to navigate here
    }
  }, [status, router])

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        style={{
          border: theme === "dark" ? "none" : "3px solid rgba(0, 0, 0, 0.05)",
          boxShadow: theme === "dark" ? "none" : "0 2px 8px rgba(0, 0, 0, 0.47)",
        }}
      >
        <div
          className={styles.socialButton}
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          Sign in with Google
        </div>
        <div
          className={styles.socialButton}
          onClick={() => signIn("github", { callbackUrl: "/" })}
        >
          Sign in with Github
        </div>
        <div
          className={styles.socialButton}
          onClick={() => signIn("facebook", { callbackUrl: "/" })}
        >
          Sign in with Facebook
        </div>
      </div>
    </div>
  )
}

export default LoginPage