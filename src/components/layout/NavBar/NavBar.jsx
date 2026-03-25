'use client'
import React from 'react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { CiSearch } from 'react-icons/ci'
import { IoPerson } from 'react-icons/io5'

const NavBar = ({ locale }) => {
  const t = useTranslations('nav')
  const otherLocale = locale === 'en' ? 'ar' : 'en'
  const [menuOpen, setMenuOpen] = useState(false)
  const [currency, setCurrency] = useState('USD')

  const localesData = {
    en: {
      label: 'English',
      flag: '/assets/usa.png',
    },
    ar: {
      label: 'العربية',
      flag: '/assets/flag.png',
    },
  }
  const navLinks = [
    { id: 4, name: t('products'), href: '/products' },
    {
      id: 1,
      name: t('collection'),
      children: [
        {
          id: 'c1',
          name: t('capsulatedCoffee'),
          href: '/collection/capsulated-coffee',
        },
        {
          id: 'c2',
          name: t('brewingTools'),
          href: '/collection/brewing-tools',
        },
        {
          id: 'c3',
          name: t('roastGrinders'),
          href: '/collection/roast-grinders',
        },
        {
          id: 'c4',
          name: t('coffee'),
          href: '/collection/coffee',
        },
      ],
    },
    { id: 2, name: t('aboutUs'), href: '/about-us' },
    { id: 6, name: t('contactUs'), href: '/contact-us' },
  ]
  const currenciesData = [
    { value: 'USD', label: 'USD', symbol: '$', flag: '/assets/usa.png' },
    { value: 'SAR', label: 'ريال سعودي', symbol: '⃁', flag: '/assets/flag.png' },
    { value: 'EGP', label: 'جنيه مصري', symbol: '£', flag: '/assets/egypt.png' },
  ]
  const item = t('item')
  const icons = [
    { name: CiSearch, href: '' },
    { name: IoPerson, href: '/account' },
  ]

  return (
    <nav className="">
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="https://res.cloudinary.com/dnszjyuxi/video/upload/v1773676530/Coffe1_tlxjvt.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
        linear-gradient(358.82deg, #040404 0.95%, rgba(106, 89, 61, 0) 83.76%),
        linear-gradient(71.98deg, #262626 -1.41%, rgba(106, 89, 61, 0) 30.34%)
      `,
          }}
        />
        <div className="hidden lg:block absolute inset-0">
          <DesktopNav
            locale={locale}
            navLinks={navLinks}
            otherLocale={otherLocale}
            localesData={localesData}
            item={item}
            currency={currency}
            currenciesData={currenciesData}
            onChangecurrency={setCurrency}
            t={t}
            icons={icons}
          />
        </div>

        <div className="block lg:hidden absolute inset-0">
          <MobileNav
            locale={locale}
            navLinks={navLinks}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            otherLocale={otherLocale}
            localesData={localesData}
            currency={currency}
            currenciesData={currenciesData}
            onChangecurrency={setCurrency}
            t={t}
            item={item}
            icons={icons}
          />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
