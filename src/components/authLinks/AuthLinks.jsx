"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";

const AuthLinks = ({ onBurgerClick }) => {
  const status = "notauthenticated"; // Replace with your real auth logic

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {status === "notauthenticated" ? (
          <Link href="/login">Login</Link>
        ) : (
          <>
            <Link href="/write">Write</Link>
            <span className={styles.link}>Logout</span>
          </>
        )}
      </div>

      {/* Burger icon (mobile only) */}
      <div className={styles.burger} onClick={onBurgerClick}>
        <div className={styles.lines} onClick={onBurgerClick}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        
         <Link href="/login" className={styles.burgerText} onClick={() => onBurgerClick && onBurgerClick()}>
          Login
        </Link>

      </div>
    </div>
  );
};

export default AuthLinks;
