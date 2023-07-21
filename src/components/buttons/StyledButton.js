import React from 'react'
import styles from '@/styles/components/button.module.css'
import Image from 'next/image'
import arrow from '/public/assets/images/arrow-up-right.svg'

const StyledButton = ({ text, backgroundColor, color, image }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    border: 'none',
    fontFamily: 'Gilroy',
    fontSize: 16,
    borderRadius: 40,
    color: color,
    width: '100%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    padding: '0px 25px',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '1px 30px 50px 25px rgba(225, 173, 157, 0.2)',
  }
  return (
    <>
      <button style={buttonStyle}>
        {text} <Image src={image} width={15} height={15} />
      </button>
    </>
  )
}

export default StyledButton