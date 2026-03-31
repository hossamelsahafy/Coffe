'use server'
import Header from '@/components/ui/Header/Header'
import HighLightedProducts from '@/components/ui/home/Products/HightLightedProducts'
import GetAllData from '@/actions/GetAllData'
import HeaderTwo from '@/components/ui/Header/HeaderTwo'
export default async function Home() {
  interface Product {
    id: number
    title: string
    important: boolean
  }
  const Categories = await GetAllData('categories')
  const products = await GetAllData('products')
  const CategoriesReversed = Categories.reverse()
  const importantProducts = products.filter((pro: Product) => pro.important)
  return (
    <main className="h-full">
      <Header />
      <HighLightedProducts categories={CategoriesReversed} products={products} />
      <HeaderTwo importantProducts={importantProducts} />
    </main>
  )
}
