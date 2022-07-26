// rafc
import Link from 'next/link'
import { Activelink } from './Activelink'
import styles from './Navbar.module.css'


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
  
];


export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>

      {
        menuItems.map(({text,href})=>(
          <Activelink key={href} text = {text} href={href}/>
        ))
      }

        {/* <Activelink text="Home" href="/"/>
        <Activelink text="About" href="/about"/>
        <Activelink text="Contact" href="/contact"/>
        <Activelink text="Pricing" href="/pricing"/> 
        */}

    </nav>
  )
}
