import './globals.css'
import { poppinsFont } from '@/utils/fonts';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { fetchGalleries } from '@/lib/data.service';

export const metadata = {
  title: 'MediaCollege Denmark',
  description: 'Vi arbejder...',
}

export default async function RootLayout({ children }) {

  let galleries = await fetchGalleries();

  return (
    <html lang="en">
      <body className={poppinsFont.className}>
        <Header galleries={galleries}></Header>
        {children}
        {/* <Footer></Footer> */}
      </body>
    </html>
  )
}
