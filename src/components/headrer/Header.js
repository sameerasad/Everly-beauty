import React from 'react'
import styles from '@/styles/components/header.module.css'
import Image from 'next/image'
import headerLogo from '/public/assets/images/logo.svg'
import arrow from '/public/assets/images/arrow-up-right.svg'
import StyledButton from '../buttons/StyledButton'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Header = () => {
  const router = useRouter()
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.headerLogo}>
              <Link href='/'>
                <Image src={headerLogo} alt='' width={100} height={50} />
              </Link>
            </div>
            <div className={styles.headerNavbar}>
              <Link href='/'>
                <li
                  className={`${styles.headerNavbarLink} ${
                    router.pathname === '/' ? styles.active : ''
                  }`}
                >
                  {/* {console.log(active, 'color')} */}
                  Home
                </li>
              </Link>
              <Link href='/gallery'>
                <div
                  className={`${styles.headerNavbarLink} ${
                    router.pathname === '/gallery' ? styles.active : ''
                  }`}
                >
                  Gallery
                </div>
              </Link>
              <Link href='/blog'>
                <div
                  className={`${styles.headerNavbarLink} ${
                    router.pathname === '/blog' ? styles.active : ''
                  }`}
                >
                  Blog
                </div>
              </Link>
              <Link href='/contact-us'>
                <div
                  className={`${styles.headerNavbarLink} ${
                    router.pathname === '/contact-us' ? styles.active : ''
                  }`}
                >
                  Contact Us
                </div>
              </Link>
            </div>
            <div className={styles.headerButton}>
              <Link href='/book-now'>
                <StyledButton backgroundColor='#fff' color='#000' text='Book Now' image={arrow}/>
                  
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header