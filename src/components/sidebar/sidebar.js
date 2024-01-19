'use client';
import styles from './sidebar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Sidebar = ({authors}) => {

    const router = useRouter();
    
    // useEffect(() => {
        
    //     console.log(authors)
    //     if (authors.length > 0) {
    //         router.replace(`?gallery=${authors[0].gallery}&author=${authors[0].author}`); 
    //     }

    // });

    return (
        <aside className={styles.sidebar}>
            <ul className={styles.portfolios}>
            {authors.map( (author, index) => { return  <Link key={index} href={`/?gallery=${author.gallery}&author=${author.author}`} className={styles.link}><li className={styles.portfolio}>{author.author} </li></Link>})}

            </ul>
        </aside>
    )
}

export default Sidebar;