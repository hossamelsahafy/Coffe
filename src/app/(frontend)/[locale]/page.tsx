'use server'
import Header from '@/components/ui/Header/Header'
import HighLightedProducts from '@/components/ui/home/Products/HightLightedProducts'
import GetAllData from '@/actions/GetAllData'
export default async function Home() {
  await new Promise((res) => setTimeout(res, 2000)) // test

  const Categories = await GetAllData('categories')
  const products = await GetAllData('products')
  const CategoriesReversed = Categories.reverse()
  return (
    <main className="h-full">
      <Header />
      <HighLightedProducts categories={CategoriesReversed} products={products} />
    </main>
  )
}
