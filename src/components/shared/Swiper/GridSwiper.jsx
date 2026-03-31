'use client'

import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation, Autoplay, Pagination } from 'swiper/modules'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const GridSwiper = ({ filteredProducts, renderItem, bg, breakpoints, loop }) => {
  console.log(bg)

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const paginationRef = useRef(null)
  const [navigationReady, setNavigationReady] = useState(false)

  useEffect(() => {
    setNavigationReady(true)
  }, [])

  const slideVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  }

  return (
    <div className="relative w-full p-4">
      {/* Previous Button */}
      <div
        ref={prevRef}
        className="hidden absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 border-white border bg-base-coffe rounded-lg cursor-pointer  md:flex items-center justify-center shadow-md"
      >
        <FiChevronsLeft size={24} />
      </div>

      {navigationReady && (
        <>
          <Swiper
            modules={[Grid, Navigation, Autoplay, Pagination]} // Pagination must be here
            slidesPerView={3}
            grid={{ rows: filteredProducts.length < 3 ? 1 : 2, fill: 'row' }}
            spaceBetween={16}
            loop={loop}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            pagination={{
              clickable: true,
              el: paginationRef.current, // <-- important
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            onBeforeInit={(swiper) => {
              if (paginationRef.current) {
                swiper.params.pagination.el = paginationRef.current // <-- bind before init
              }
            }}
            breakpoints={breakpoints}
            className="w-full mt-10"
          >
            {filteredProducts.map((product, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.5 }}
                >
                  {renderItem(product)}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={paginationRef}
            className="relative flex justify-center mt-5 md:hidden"
          ></div>{' '}
        </>
      )}
      {/* Next Button */}
      <div
        ref={nextRef}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 border-white border bg-base-coffe rounded-lg cursor-pointer items-center justify-center shadow-md"
      >
        <FiChevronsRight size={24} />
      </div>
    </div>
  )
}

export default GridSwiper
