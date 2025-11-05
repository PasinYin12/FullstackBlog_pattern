"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AuthLinks from "@/components/authLinks/AuthLinks";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("notauthenticated");

  return (
    <nav className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" width={24} height={24} alt="facebook" />
        <Image src="/instagram.png" width={24} height={24} alt="instagram" />
        <Image src="/x.png" width={24} height={24} alt="x" />
        <Image src="/youtube.png" width={24} height={24} alt="youtube" />
      </div>

      <div className={styles.logo}>
        <Link href="/">MyBlog</Link>
      </div>

      <div className={styles.linksWrapper}>
        <ThemeToggle />
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Desktop auth + theme toggle */}
        <div className={styles.auth}>
          <AuthLinks />
        </div>

        {/* Burger button (visible on mobile) */}
        <button
          className={styles.burger}
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mobileMenu} onClick={() => setOpen(false)}>
          <div className={styles.mobileInner} onClick={(e) => e.stopPropagation()}>
            <Link href="/" className={styles.mobileLink}>Home</Link>
            <Link href="/about" className={styles.mobileLink}>About</Link>
            <Link href="/contact" className={styles.mobileLink}>Contact</Link>
            <Link
              href={status === "notauthenticated" ? "/login" : "/write"}
              className={styles.mobileLink}
            >
              {status === "notauthenticated" ? "Login" : "Write"}
            </Link>
            <ThemeToggle />
            {/* Close button */}
            <button className={styles.close} style={{ backgroundColor: ThemeToggle.theme === 'dark' ? "rgba(255, 255, 255, 0.97)" : "rgba(248, 246, 246, 0.98)" }} onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
}
