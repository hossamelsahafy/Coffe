'use client'

import React from 'react'
import PartnersSwiper from './PartnersSwiper'

const Partners = ({ locale, t }) => {
  return (
    <section className="w-full md:mt-22 flex flex-col text-base-light relative p-4 justify-center items-center">
      <div className="flex flex-col md:flex-row w-full md:justify-center items-start md:items-center gap-10 md:gap-20">
        <div className="flex flex-col justify-center ">
          <p
            className={`text-lg ${locale === 'en' ? 'text-left' : 'text-right'} lg:text-xl font-bold tracking-tighter`}
          >
            {t('title')}
          </p>
          <div className="lg:text-3xl md:block flex gap-2 text-2xl text-base-coffe">
            <p className="font-bold">{t('fresh')} </p>
            <span className="font-semibold">{t('freshSpan')}</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center gap-2 overflow-hidden">
          <p
            className={`uppercase font-semibold text-lg ${locale === 'en' ? 'text-left' : 'text-right'} `}
          >
            {t('partners')}
          </p>
          <div className="flex justify-center">
            <PartnersSwiper />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
