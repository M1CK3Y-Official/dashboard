import styles from './page.module.css'
import Sidebar from '@/components/sidebar/sidebar'
import Gallery from '@/components/gallery/gallery'
import { fetchAuthorsByGalleryName, fetchImagesForAuthor } from '@/lib/data.service';

export default async function Page({searchParams}) {

  let imagesForAuthor = await fetchImagesForAuthor(searchParams.author);


let authorsFromGallery = await fetchAuthorsByGalleryName(searchParams.gallery);

  return (
    <main className={styles.page} >
      <Sidebar authors={authorsFromGallery} />
      <Gallery gallery={imagesForAuthor} />
    </main>
  )
}

