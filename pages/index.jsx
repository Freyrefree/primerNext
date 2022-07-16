import Link from 'next/link'
import { MainLayout } from "../componentes/layouts/MainLayout";


export default function Diego() {//Obligatorio export default

  return (

    <MainLayout>

      <h1>Home Page</h1>
      <h1 className="title">
        {/* ir a <a href="/about">About</a> */}
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/index.js</code>
      </p>

    </MainLayout>

  )

}
