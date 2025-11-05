import styles from "./loginPage.module.css"
import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext"

const LoginPage = () => {
  const {theme} = () =>useContext(ThemeContext)
  return (

    
    <div className={styles.container}>
      <div className={styles.wrapper} style={{ 
        border: theme === 'dark' ? "none" : "3px solid rgba(0, 0, 0, 0.05)",
        boxShadow: theme === 'dark' ? "none" : "0 2px 8px rgba(0, 0, 0, 0.47)"}}>
        <div className={styles.socialButton}>Sign in with Google</div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>

      </div>

    </div>
  )
}

export default LoginPage