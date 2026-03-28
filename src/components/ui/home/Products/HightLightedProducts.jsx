'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ProductCard from './ProductsCard'
import GridSwiper from '@/components/shared/Swiper/GridSwiper'

const HightLightedProducts = () => {
  let { locale } = useParams()

  const products = [
    // ================== Roasted Coffee (6) ==================
    {
      title: 'Lavazza',
      titleAr: 'لافاتزا',
      subtitle: 'Ethiopian Yirgacheffe',
      subtitleAr: 'قهوة إثيوبية يرغاشيف',
      category: 'Roasted coffee',
      type: 'Specialty Coffee',
      typeAr: 'قهوة مختصة',
      images: ['https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=300&h=300&fit=crop'],
      priceAfter: 180,
      priceBefore: 220,
      choices: [
        {
          name: { en: 'Kind', ar: 'النوع' },
          options: [
            {
              value: 'Vanilla',
              image:
                'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=300&h=300&fit=crop',
              price: 190,
            },
            {
              value: 'Hazelnut',
              image:
                'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=300&h=300&fit=crop',
              price: 200,
            },
            {
              value: 'Caramel',
              image:
                'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=300&fit=crop',
              price: 210,
            },
          ],
        },
      ],
    },
    {
      title: 'Nescafe',
      titleAr: 'نسكافيه',
      subtitle: 'Colombian Supremo',
      subtitleAr: 'قهوة كولومبية',
      category: 'Roasted coffee',
      type: 'Medium Roast',
      typeAr: 'تحميص متوسط',
      images: ['https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=300&h=300&fit=crop'],
      priceAfter: 150,
      priceBefore: 190,
      choices: [
        {
          name: { en: 'Kind', ar: 'النوع' },
          options: [
            {
              value: 'Classic',
              image:
                'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=300&h=300&fit=crop',
              price: 150,
            },
            {
              value: 'Mocha',
              image:
                'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=300&fit=crop',
              price: 170,
            },
            {
              value: 'Vanilla',
              image:
                'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=300&h=300&fit=crop',
              price: 160,
            },
          ],
        },
      ],
    },
    {
      title: 'Illy',
      titleAr: 'إيلي',
      subtitle: 'Brazil Santos',
      subtitleAr: 'قهوة برازيلية',
      category: 'Roasted coffee',
      type: 'Dark Roast',
      typeAr: 'تحميص غامق',
      images: ['https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=300&h=300&fit=crop'],
      priceAfter: 140,
      priceBefore: 175,
      choices: [
        {
          name: { en: 'Kind', ar: 'النوع' },
          options: [
            {
              value: 'Espresso',
              image:
                'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=300&fit=crop',
              price: 150,
            },
            {
              value: 'Chocolate',
              image:
                'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=300&fit=crop',
              price: 160,
            },
            {
              value: 'Hazelnut',
              image:
                'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=300&h=300&fit=crop',
              price: 170,
            },
          ],
        },
      ],
    },
    {
      title: 'Starbucks',
      titleAr: 'ستاربكس',
      subtitle: 'Kenyan AA',
      subtitleAr: 'قهوة كينية',
      category: 'Roasted coffee',
      type: 'Specialty Coffee',
      typeAr: 'قهوة مختصة',
      images: ['https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=300&h=300&fit=crop'],
      priceAfter: 200,
      priceBefore: 240,
      choices: [
        {
          name: { en: 'Kind', ar: 'النوع' },
          options: [
            {
              value: 'Berry',
              image:
                'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=300&h=300&fit=crop',
              price: 210,
            },
            {
              value: 'Citrus',
              image:
                'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=300&h=300&fit=crop',
              price: 220,
            },
            {
              value: 'Vanilla',
              image:
                'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=300&h=300&fit=crop',
              price: 230,
            },
          ],
        },
      ],
    },
    {
      title: 'Segafredo',
      titleAr: 'سيجافريدو',
      subtitle: 'Guatemala',
      subtitleAr: 'قهوة غواتيمالا',
      category: 'Roasted coffee',
      type: 'Medium Roast',
      typeAr: 'تحميص متوسط',
      images: ['https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=300&h=300&fit=crop'],
      priceAfter: 170,
      priceBefore: 210,
      choices: [
        {
          name: { en: 'Kind', ar: 'النوع' },
          options: [
            {
              value: 'Spicy',
              image:
                'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=300&h=300&fit=crop',
              price: 180,
            },
            {
              value: 'Cocoa',
              image:
                'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=300&h=300&fit=crop',
              price: 190,
            },
            {
              value: 'Caramel',
              image:
                'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=300&fit=crop',
              price: 200,
            },
          ],
        },
      ],
    },
    {
      title: 'Dunkin',
      titleAr: 'دانكن',
      subtitle: 'House Blend',
      subtitleAr: 'خلطة القهوة',
      category: 'Roasted coffee',
      type: 'Blend',
      typeAr: 'مزيج',
      images: ['https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=300&h=300&fit=crop'],
      priceAfter: 130,
      priceBefore: 160,
      choices: [
        {
          name: { en: 'Kind', ar: 'النوع' },
          options: [
            {
              value: 'Original',
              image:
                'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=300&h=300&fit=crop',
              price: 130,
            },
            {
              value: 'Vanilla',
              image:
                'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=300&h=300&fit=crop',
              price: 140,
            },
            {
              value: 'Hazelnut',
              image:
                'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=300&h=300&fit=crop',
              price: 150,
            },
          ],
        },
      ],
    },

    // ================== Coffee Sets (6) ==================
    {
      title: 'DeLonghi',
      titleAr: 'ديلونجي',
      subtitle: 'Starter Set',
      subtitleAr: 'طقم مبتدئ',
      category: 'Coffee sets',
      type: 'Set',
      typeAr: 'طقم',
      images: ['https://images.unsplash.com/photo-1591047189829-91f966c05b4c?w=300&h=300&fit=crop'],
      priceAfter: 300,
      priceBefore: 400,
      colors: [
        {
          en: 'Black',
          ar: 'أسود',
          price: 300,
          image:
            'https://images.unsplash.com/photo-1591047189829-91f966c05b4c?w=300&h=300&fit=crop',
        },
        {
          en: 'Gold',
          ar: 'ذهبي',
          price: 350,
          image:
            'https://images.unsplash.com/photo-1591047189829-91f966c05b4c?w=300&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Philips',
      titleAr: 'فيليبس',
      subtitle: 'Premium Set',
      subtitleAr: 'طقم بريميوم',
      category: 'Coffee sets',
      type: 'Set',
      typeAr: 'طقم',
      images: ['https://images.unsplash.com/photo-1591047189829-91f966c05b4c?w=300&h=300&fit=crop'],
      priceAfter: 500,
      priceBefore: 600,
      colors: [
        {
          en: 'Brown',
          ar: 'بني',
          price: 500,
          image:
            'https://images.unsplash.com/photo-1591047189829-91f966c05b4c?w=300&h=300&fit=crop',
        },
        {
          en: 'White',
          ar: 'أبيض',
          price: 520,
          image:
            'https://images.unsplash.com/photo-1591047189829-91f966c05b4c?w=300&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Bosch',
      titleAr: 'بوش',
      subtitle: 'Barista Set',
      subtitleAr: 'طقم باريستا',
      category: 'Coffee sets',
      type: 'Set',
      typeAr: 'طقم',
      images: ['https://images.unsplash.com/photo-1591047189829-91f966c05b4c?w=300&h=300&fit=crop'],
      priceAfter: 700,
      priceBefore: 850,
      colors: [
        {
          en: 'Silver',
          ar: 'فضي',
          price: 700,
          image:
            'https://images.unsplash.com/photo-1591047189829-91f966c05b4c?w=300&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Tefal',
      titleAr: 'تيفال',
      subtitle: 'Travel Set',
      subtitleAr: 'طقم سفر',
      category: 'Coffee sets',
      type: 'Set',
      typeAr: 'طقم',
      images: ['https://images.unsplash.com/photo-1591047189829-91f966c05b4c?w=300&h=300&fit=crop'],
      priceAfter: 250,
      priceBefore: 350,
      colors: [
        {
          en: 'Red',
          ar: 'أحمر',
          price: 250,
          image:
            'https://images.unsplash.com/photo-1591047189829-91f966c05b4c?w=300&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'IKEA',
      titleAr: 'ايكيا',
      subtitle: 'Espresso Set',
      subtitleAr: 'طقم اسبريسو',
      category: 'Coffee sets',
      type: 'Set',
      typeAr: 'طقم',
      images: ['https://images.unsplash.com/photo-1591047189829-91f966c05b4c?w=300&h=300&fit=crop'],
      priceAfter: 400,
      priceBefore: 500,
      colors: [
        {
          en: 'Black',
          ar: 'أسود',
          price: 400,
          image:
            'https://images.unsplash.com/photo-1591047189829-91f966c05b4c?w=300&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Bialetti',
      titleAr: 'بياليتي',
      subtitle: 'Luxury Set',
      subtitleAr: 'طقم فاخر',
      category: 'Coffee sets',
      type: 'Set',
      typeAr: 'طقم',
      images: ['https://images.unsplash.com/photo-1591047189829-91f966c05b4c?w=300&h=300&fit=crop'],
      priceAfter: 900,
      priceBefore: 1100,
      colors: [
        {
          en: 'Gold',
          ar: 'ذهبي',
          price: 950,
          image:
            'https://images.unsplash.com/photo-1591047189829-91f966c05b4c?w=300&h=300&fit=crop',
        },
      ],
    },

    // ================== Cups & Mugs (6) ==================
    {
      title: 'IKEA',
      titleAr: 'ايكيا',
      subtitle: 'Glass Cup',
      subtitleAr: 'كوب زجاج',
      category: 'Cups & Mugs',
      type: 'Glass Mug',
      typeAr: 'كوب زجاج',
      images: ['https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop'],
      priceAfter: 60,
      priceBefore: 80,
      colors: [
        {
          en: 'Transparent',
          ar: 'شفاف',
          price: 60,
          image:
            'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Tefal',
      titleAr: 'تيفال',
      subtitle: 'Ceramic Mug',
      subtitleAr: 'كوب سيراميك',
      category: 'Cups & Mugs',
      type: 'Ceramic Mug',
      typeAr: 'كوب سيراميك',
      images: ['https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop'],
      priceAfter: 55,
      priceBefore: 75,
      colors: [
        {
          en: 'Red',
          ar: 'أحمر',
          price: 55,
          image:
            'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop',
        },
        {
          en: 'Blue',
          ar: 'أزرق',
          price: 60,
          image:
            'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Zara Home',
      titleAr: 'زارا هوم',
      subtitle: 'Tea Cup',
      subtitleAr: 'كوب شاي',
      category: 'Cups & Mugs',
      type: 'Tea Cup',
      typeAr: 'كوب شاي',
      images: ['https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=300&h=300&fit=crop'],
      priceAfter: 70,
      priceBefore: 95,
      colors: [
        {
          en: 'White',
          ar: 'أبيض',
          price: 70,
          image:
            'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=300&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Home Centre',
      titleAr: 'هوم سنتر',
      subtitle: 'Marble Mug',
      subtitleAr: 'كوب رخامي',
      category: 'Cups & Mugs',
      type: 'Ceramic Mug',
      typeAr: 'كوب سيراميك',
      images: ['https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop'],
      priceAfter: 80,
      priceBefore: 110,
      colors: [
        {
          en: 'Black Marble',
          ar: 'رخام أسود',
          price: 85,
          image:
            'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Porland',
      titleAr: 'بورلاند',
      subtitle: 'Porcelain Mug',
      subtitleAr: 'كوب بورسلين',
      category: 'Cups & Mugs',
      type: 'Porcelain Mug',
      typeAr: 'كوب بورسلين',
      images: ['https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop'],
      priceAfter: 65,
      priceBefore: 85,
      colors: [
        {
          en: 'White',
          ar: 'أبيض',
          price: 65,
          image:
            'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Generic',
      titleAr: 'منتج عام',
      subtitle: '2 Mugs Set',
      subtitleAr: 'طقم كوبين',
      category: 'Cups & Mugs',
      type: 'Set',
      typeAr: 'طقم',
      images: ['https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop'],
      priceAfter: 120,
      priceBefore: 150,
      colors: [
        {
          en: 'Blue',
          ar: 'أزرق',
          price: 120,
          image:
            'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop',
        },
      ],
    },

    // ================== Machines (6) ==================
    {
      title: 'DeLonghi',
      titleAr: 'ديلونجي',
      subtitle: 'Espresso Machine',
      subtitleAr: 'ماكينة اسبريسو',
      category: 'Coffee makers and grinders',
      type: 'Machine',
      typeAr: 'ماكينة',
      images: ['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop'],
      priceAfter: 4500,
      priceBefore: 5200,
      colors: [
        {
          en: 'Black',
          ar: 'أسود',
          price: 4500,
          image:
            'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Philips',
      titleAr: 'فيليبس',
      subtitle: 'Capsule Machine',
      subtitleAr: 'ماكينة كبسولات',
      category: 'Coffee makers and grinders',
      type: 'Machine',
      typeAr: 'ماكينة',
      images: ['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop'],
      priceAfter: 1200,
      priceBefore: 1500,
      colors: [
        {
          en: 'White',
          ar: 'أبيض',
          price: 1200,
          image:
            'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Bosch',
      titleAr: 'بوش',
      subtitle: 'Coffee Grinder',
      subtitleAr: 'مطحنة',
      category: 'Coffee makers and grinders',
      type: 'Grinder',
      typeAr: 'مطحنة',
      images: ['https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop'],
      priceAfter: 800,
      priceBefore: 950,
      colors: [
        {
          en: 'Silver',
          ar: 'فضي',
          price: 800,
          image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Bialetti',
      titleAr: 'بياليتي',
      subtitle: 'Moka Pot',
      subtitleAr: 'موكا بوت',
      category: 'Coffee makers and grinders',
      type: 'Moka',
      typeAr: 'موكا',
      images: ['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop'],
      priceAfter: 180,
      priceBefore: 220,
      colors: [
        {
          en: 'Silver',
          ar: 'فضي',
          price: 180,
          image:
            'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Hario',
      titleAr: 'هاريو',
      subtitle: 'Pour Over',
      subtitleAr: 'بوروفر',
      category: 'Coffee makers and grinders',
      type: 'Pour Over',
      typeAr: 'بوروفر',
      images: ['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop'],
      priceAfter: 400,
      priceBefore: 500,
      colors: [
        {
          en: 'Glass',
          ar: 'زجاج',
          price: 400,
          image:
            'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Generic',
      titleAr: 'منتج عام',
      subtitle: 'Cold Brew Maker',
      subtitleAr: 'كولد برو',
      category: 'Coffee makers and grinders',
      type: 'Cold Brew',
      typeAr: 'كولد برو',
      images: ['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop'],
      priceAfter: 650,
      priceBefore: 800,
      colors: [
        {
          en: 'Black',
          ar: 'أسود',
          price: 650,
          image:
            'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop',
        },
      ],
    },
  ]
  const categories = [
    { id: 1, name: 'Roasted coffee', nameAr: 'قهوة محمصة' },
    { id: 2, name: 'Coffee sets', nameAr: 'أطقم قهوة' },
    { id: 3, name: 'Cups & Mugs', nameAr: 'أكواب ومجّات' },
    { id: 4, name: 'Coffee makers and grinders', nameAr: 'ماكينات قهوة وطواحين' },
  ]

  const allCategories = [{ id: 'all', name: 'All Products', nameAr: 'كل المنتجات' }, ...categories]
  const [active, setActive] = useState('all')
  const filteredProducts = products.filter((product) => {
    if (active === 'all') return true
    const categoryName = categories.find((c) => c.id === active)?.name
    return product.category === categoryName
  })
  return (
    <div className="w-full md:max-w-7xl md:mx-auto flex flex-col text-base-light relative p-4 justify-center items-center">
      <div className="flex md:flex-row  justify-start flex-col md:justify-between w-full gap-4 items-center">
        <div className="flex justify-start md:justify-center items-center flex-wrap font-semibold gap-4">
          {allCategories.map((cat) => {
            const isActive = active === cat.id

            return (
              <div
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className="relative cursor-pointer group"
              >
                <span
                  className={`
                    relative pb-1
                    ${isActive ? 'after:w-full' : 'after:w-0'} after:content-[''] after:absolute after:left-0 after:bottom-0  after:h-px  after:bg-base-light after:transition-all after:duration-300 group-hover:after:w-full text-lg
                  `}
                >
                  {locale === 'en' ? cat.name : cat.nameAr}
                </span>
              </div>
            )
          })}
        </div>

        <div className="group inline-block">
          <Link
            href={`/${locale}/products`}
            className="
            font-semibold relative pb-1 text-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-base-light after:transition-all after:duration-300 hover:after:bg-base-coffe"
          >
            {locale === 'en' ? 'Showmoreproducts' : 'عرض المزيد من المنتجات'}
          </Link>
        </div>
      </div>
      <GridSwiper
        filteredProducts={filteredProducts}
        locale={locale}
        renderItem={(product) => <ProductCard product={product} locale={locale} />}
      />
    </div>
  )
}

export default HightLightedProducts
