import Link from 'next/link'
import { DarkLayout } from '../componentes/layouts/DarkLayout'
import { MainLayout } from '../componentes/layouts/MainLayout'

export default function AboutPage() {//Obligatorio export default
  return (

    <>
        <h1>About page</h1>
        <h1 className={'title'}>
        {/* ir al <a href="/">Home</a> */}
        Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.js</code>
        </p>
    </>

  )
}

AboutPage.getLayout = function getLayout(page:JSX.Element){
  return(

    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  );
}
