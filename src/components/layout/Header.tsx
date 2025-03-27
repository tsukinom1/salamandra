import Image from 'next/image'
import Link from "next/link";
import Dropdown from '../ui/DropDown'
export default function Header() {
  return (
    <header className='container'>
      <nav className='flex items-center justify-between text-xl'>
        <ul className='flex items-center gap-x-10'>
          <li>
            <Link href={`/`}>
              <Image src={`/icons/logo-title.png`} alt='logo' width={200} height={100} />
            </Link>
          </li>
          {/* <li>
            <Link href={`/`}>Главная</Link>
          </li> */}
          <li>
            <Dropdown title="Услуги" links={
              [
                { label: "Услуга 1", href: "/" },
                { label: "услуга 2", href: "/" },
                { label: "услуга 3", href: "/" },

              ]
            } btnClass='text-darkBlue' />
          </li>
          <li>
            <Dropdown title="Связаться с нами" links={
              [
                { label: "Контакт 1", href: "/" },
                { label: "Контакт 2", href: "/" },
                { label: "Контакт 3", href: "/" },
              ]
            } btnClass='text-darkBlue' />
          </li>
        </ul>
        <ul className='flex items-center gap-x-5'>
          <li>
            <Dropdown title="Рус" links={
              [
                { label: "Рус", href: "/" },
                { label: "Каз", href: "/" },
                { label: "En", href: "/" },
              ]
            } btnClass='bg-primary px-3 py-1 rounded-xl text-white' />

          </li>
          <li>
            <button type={`button`} className='border border-1 border-primary px-3 py-1 rounded-xl text-primary'>
              <Link href={`/login`} >Профиль</Link>
            </button>
          </li>
          <li>
            <button type={`button`} className='bg-primary px-3 py-1 rounded-xl text-white'>
              Пациент
            </button>
          </li>
        </ul>
        {/* <Menu size={40} /> */}
      </nav>

    </header>
  )
}
