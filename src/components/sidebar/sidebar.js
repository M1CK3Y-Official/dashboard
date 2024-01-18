import styles from './sidebar.module.css'
import Link from 'next/link'

const Sidebar = ({authors}) => {

    return (
        <aside className={styles.sidebar}>
            <ul className={styles.portfolios}>

            {authors.map( (author, index) => { return  <Link key={index} href={`/?gallery=${author.gallery}&author=${author.niceUrl}`} className={styles.link}><li className={styles.portfolio}>{author.author}</li></Link>})}

            </ul>
        </aside>
    )
}

export default Sidebar;