import styles from './dashboard.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Dashboard = () => {
    return (
        <section className={styles.dashboard}>
            <div className={styles.gallery}>
                <div className={styles.galleryItem}>Image</div>
                <div className={styles.galleryItem}>Image</div>
                <div className={styles.galleryItem}>Image</div>
                <div className={styles.galleryItem}>Image</div>
                <div className={styles.galleryItem}>Image</div>
                <div className={styles.galleryItem}>Image</div>
                <div className={styles.galleryItem}>Image</div>
                <div className={styles.galleryItem}>Image</div>
                <div className={styles.galleryItem}>Image</div>
            </div>
        </section>
    )
}

export default Dashboard;