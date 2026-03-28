'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import { useParams } from 'next/navigation'
import TextAnimation from '@/components/ui/animation/TextAnimation'
import Partners from '@/components/ui/home/Partners/Partners'
const Header = () => {
  const currentDate = new Date()
  const { locale } = useParams()
  const t = useTranslations('header')

  return (
    <div className="absolute inset-0 w-full flex flex-col justify-center items-cenetr z-10 ">
      <div className="relative w-full h-auto p-4 text-base-light flex flex-col items-center justify-center text-center">
        <div
          className={`hidden md:flex flex-col items-center gap-4 absolute ${locale === 'en' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 text-2xl font-semibold`}
        >
          <p className="rotate-90">
            {currentDate.getDate()}/{currentDate.getMonth() + 1}
          </p>
          <div className="border-l my-2 border-white h-80" />
          <p className="rotate-90">{t('title')}</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <TextAnimation locale={locale} />
        </div>
      </div>
      <Partners locale={locale} t={t} />
    </div>
  )
}

export default Header
