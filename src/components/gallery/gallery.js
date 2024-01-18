import styles from './gallery.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Gallery = ({gallery}) => {
    return (
        <section className={styles.galleryContainer}>
            <div className={styles.gallery}>
                {gallery.map( (image, index) => {
                    <div index={index} className={styles.galleryItem}>
                        <Image src={image.path} alt={image.alt} width={image.width} height={image.height} />
                    </div>
                })}
                
                {/* <div className={styles.galleryItem}>Image</div>
                <div className={styles.galleryItem}>Image</div>
                <div className={styles.galleryItem}>Image</div>
                <div className={styles.galleryItem}>Image</div>
                <div className={styles.galleryItem}>Image</div>
                <div className={styles.galleryItem}>Image</div>
                <div className={styles.galleryItem}>Image</div>
                <div className={styles.galleryItem}>Image</div> */}
            </div>
        </section>
    )
}

export default Gallery;