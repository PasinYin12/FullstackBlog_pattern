"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useSession, signOut } from "next-auth/react";

const AuthLinks = ({ onBurgerClick }) => {
  const { data: session, status } = useSession();

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {status === "authenticated" ? (
          <>
            <Link href="/write">Write</Link>
            <span
              className={styles.link}
              onClick={() => signOut()}
              style={{ cursor: "pointer" }}
            >
              Logout
            </span>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>

      {/* Burger icon (mobile only) */}
      <div className={styles.burger} onClick={onBurgerClick}>
        <div className={styles.lines}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        {status === "authenticated" ? (
          <Link
            href="/write"
            className={styles.burgerText}
            onClick={() => onBurgerClick && onBurgerClick()}
          >
            Write
          </Link>
        ) : (
          <Link
            href="/login"
            className={styles.burgerText}
            onClick={() => onBurgerClick && onBurgerClick()}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default AuthLinks;
