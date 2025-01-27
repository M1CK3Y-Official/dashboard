import styles from './gallery.module.css';
import Link from 'next/link';
import Image from 'next/image';
import DevSwiper from '@/components/devSwiper/devSwiper';


const Gallery = async ({author}) => {

    console.log(author)
    
    return (
        <section className={styles.galleryContainer}>
            <div className={styles.gallery}>

                <DevSwiper author={author} />

                

                {/* {author.map( (image, index) => {
                    return <div className={styles.galleryItem} key={index}>
                        <Image className={styles.image} src={`/galleries${image.path}`} alt={image.name} width={image.width} height={image.height} />
                    </div>
                })} */}

            </div>
        </section>
    )
}

export default Gallery;