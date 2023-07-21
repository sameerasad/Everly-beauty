import React from 'react'
import ReactStars from 'react-stars'
import styles from '@/styles/components/testimonials.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination,Autoplay } from 'swiper/modules'
import { testimonalsCrdData } from '@/pages/api/utils'
// import SwiperCore, { Autoplay } from 'swiper'

const Testimonals = () => {
 // SwiperCore.use([Autoplay])
  return (
    <>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsWrapper}>
          <div className={styles.testimonialsHeading}>
            <h1>Testimonials</h1>
          </div>
          <div className={styles.testimonialsCards}>
            <Swiper
              style={{ width: '100%', height: '400px' }}
              spaceBetween={50}
              slidesPerView={3}
              loop={true} // Enable looped swiping
              autoplay={{
               delay: 1000,
               disableOnInteraction: false,
             }}
            
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              
            >
              {testimonalsCrdData.map((item, index) => {
                return (
                  <>
                    <SwiperSlide key={item.id}>
                      <div className={styles.testimonialsCard}>
                        <ReactStars
                          count={5}
                          edit={false}
                          value={5}
                          size={24}
                          color2={'#ffd700'}
                        />
                        <div className={styles.testimonialsCardAvatar}>
                          <Image src={item.avatar} width={100} height={100} />
                        </div>
                        <div className={styles.testimonialsCardContent}>
                          <h4>{item.name}</h4>
                          <p>{item.review}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonals