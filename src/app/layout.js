import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='text-black bg-white w-screen'>
          <h1 className='text-3xl'>Las notas de roberto</h1>
          <nav>
            <ul>
              <li>
                <Link href='/notas'>Ir a las notas</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className='text-black bg-white w-screen'>Soy el footer principal</footer>
        </body>
    </html>
  )
}
