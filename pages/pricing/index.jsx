import Link from 'next/link'
import { MainLayout } from '../../componentes/layouts/MainLayout'

export default function PricingPage() {//Obligatorio export default
  return (
    <MainLayout>
        <h1>Contact page</h1>
        <h1 className={'title'}>
         {/* ir al <a href="/">Home</a> */}
         Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/pricing/pricing.jsx</code>
        </p>
    </MainLayout>
  )
}
