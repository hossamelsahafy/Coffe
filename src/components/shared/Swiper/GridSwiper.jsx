'use client'
import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation, Autoplay } from 'swiper/modules'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import ProductCard from '@/components/ui/home/Products/ProductsCard'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'

const GridSwiper = ({ filteredProducts, renderItem }) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [navigationReady, setNavigationReady] = useState(false)

  useEffect(() => {
    setNavigationReady(true)
  }, [])

  return (
    <div className="relative w-full p-4">
      <div
        ref={prevRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 border-white border bg-base-coffe rounded-lg cursor-pointer flex items-center justify-center shadow-md"
      >
        <FiChevronsLeft size={24} />
      </div>

      {navigationReady && (
        <Swiper
          modules={[Grid, Navigation, Autoplay]}
          slidesPerView={3}
          grid={{ rows: 2, fill: 'row' }}
          spaceBetween={16}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: { slidesPerView: 1, grid: { rows: 2 } },
            640: {
              slidesPerView: 2, // مثلا شاشة نص صغيرة
              grid: { rows: 2 },
            },
            768: { slidesPerView: 2, grid: { rows: 2 } },
            1024: { slidesPerView: 3, grid: { rows: 2 } },
          }}
          className="w-full mt-10"
        >
          {filteredProducts.map((product, i) => (
            <SwiperSlide key={i}>{renderItem(product)}</SwiperSlide>
          ))}
        </Swiper>
      )}

      <div
        ref={nextRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 border-white border bg-base-coffe rounded-lg cursor-pointer flex items-center justify-center shadow-md"
      >
        <FiChevronsRight size={24} />
      </div>
    </div>
  )
}

export default GridSwiper
