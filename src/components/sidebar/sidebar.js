import styles from './sidebar.module.css'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <ul className={styles.portfolios}>
                <Link href="#" className={styles.link}><li className={styles.portfolio}>Portfolio Name</li></Link>   
                <Link href="#" className={styles.link}><li className={styles.portfolio}>Portfolio Name</li></Link>   
                <Link href="#" className={styles.link}><li className={styles.portfolio}>Portfolio Name</li></Link>   
                <Link href="#" className={styles.link}><li className={styles.portfolio}>Portfolio Name</li></Link>   
                <Link href="#" className={styles.link}><li className={styles.portfolio}>Portfolio Name</li></Link>   
            </ul>
        </aside>
    )
}

export default Sidebar;