import './globals.css'
import { poppinsFont } from '@/utils/fonts';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

export const metadata = {
  title: 'MediaCollege Denmark',
  description: 'Vi arbejder...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppinsFont.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
