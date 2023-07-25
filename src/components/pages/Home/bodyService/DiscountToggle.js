import React, { useEffect, useState } from 'react'
import styles from '@/styles/components/bodyService/discountToggle.module.css'
import Switch from 'react-switch'
import StyledButton from '../../../buttons/StyledButton'
import arrow from '/public/assets/images/arrow-up-right-white.svg'
import Auth from '../../../auth/auth'
import MySession from '../mySession/MySession'
import PromoCard from './PromoCard'

const DiscountToggle = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [isCheckedTwo, setIsCheckedTwo] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPromoCardModalOpen, setIsPromoCardModalOpen] = useState(false)
  const [mode, setMode] = useState('login')

  const isLoggedIn = false

  const handleSwitchChange = (checked) => {
    setIsChecked(checked)
    if (checked) {
      setIsPromoCardModalOpen(true)
    }
  }
  useEffect(() => {
    console.log(isModalOpen, 'isModalCheck')
  }, [isModalOpen])

  const handleSwitchChangeTwo = (checkedTwo) => {
    setIsCheckedTwo(checkedTwo)
    if (checkedTwo) {
      setIsPromoCardModalOpen(true)
    }
  }

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setMode('login')
  }

  const handleModeToggle = () => {
    if (mode === 'login') {
      setMode('signup')
    } else {
      setMode('login')
    }
  }

  const handlePromoCardModalClose = () => {
    setIsPromoCardModalOpen(false)
  }

  return (
    <>
      <div className={styles.discountToggleContainer}>
        <div className={styles.discountToggleWrapper}>
          <div className={styles.discountToggles}>
            <div className={styles.discountToggleLeft}>
              <Switch
                onChange={handleSwitchChange}
                checked={isChecked}
                onColor='#E1AD9D'
                offColor='#ccc'
                checkedIcon={false}
                uncheckedIcon={false}
                height={24}
                width={48}
                handleDiameter={24}
              />
              <span className={styles.discountToggleLeftText}>
                10% Referral Discount
              </span>
            </div>
            <p className={styles.discountTogglesCenterLine}>|</p>
            <div className={styles.discountToggleLeft}>
              <Switch
                onChange={handleSwitchChangeTwo}
                checked={isCheckedTwo}
                onColor='#E1AD9D'
                offColor='#ccc'
                checkedIcon={false}
                uncheckedIcon={false}
                height={24}
                width={48}
                handleDiameter={24}
              />
              <span className={styles.discountToggleLeftText}>
                10% Student Discount
              </span>
            </div>
          </div>
          <div className={styles.bookNow}>
            <StyledButton
              color='#fff'
              backgroundColor='#E1AD9D'
              text='Book Now'
              image={arrow}
              onClick={() => handleModalOpen()}
            />
          </div>

          {isModalOpen && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalContent}>
                <Auth
                  isLoggedIn={isLoggedIn}
                  mode={mode}
                  setMode={setMode}
                  headingText={
                    mode == 'login'
                      ? 'Log in'
                      : mode == 'signup'
                      ? 'Sign Up'
                      : mode == 'forgot-password'
                      ? 'Forgot Password'
                      : 'Reset-Password'
                  }
                  buttonText={
                    mode == 'login'
                      ? 'Log in'
                      : mode == 'signup'
                      ? 'Sign Up'
                      : mode == 'forgot-password'
                      ? 'Forgot Password'
                      : 'Reset-Password'
                  }
                  onClose={handleModalClose}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {isPromoCardModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <PromoCard onClose={handlePromoCardModalClose} />
          </div>
        </div>
      )}
    </>
  )
}

export default DiscountToggle