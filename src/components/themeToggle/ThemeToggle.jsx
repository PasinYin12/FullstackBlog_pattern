"use client"
import { useContext } from 'react';
import style from './themeToggle.module.css'
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className={style.container} onClick={toggle} style={{backgroundColor: theme === 'dark' ? "white" : "black"}}>
      <Image src="/moon.png" width={14} height={14} alt="moon" />
      <div className={style.ball} style={{
        transform: theme === 'dark' ? 'translateX(20px)' : 'translateX(0)',
        backgroundColor: theme === 'dark' ? 'black' : 'white'
      }}></div>
      <Image src="/sun.png" width={14} height={14} alt="sun" />
    </div>
  );
};

export default ThemeToggle;