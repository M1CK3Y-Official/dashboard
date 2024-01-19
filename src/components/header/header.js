'use client';
import { useState, useEffect } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import { FaBars } from "react-icons/fa";
import { useRouter } from 'next/navigation';


const Header = ({galleries}) => {

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    
    // useEffect(() => {

    //   router.replace(`?gallery=${galleries[0].name}`); 

    // });


    return (
        <header className={`${styles.header} ${isOpen ? styles.open : ''}`}>
            <div className={styles.headerContainer}>

                <div className={styles.logoContainer}>
                    <Link className={styles.link} href={'/'}><h1 className={styles.logo}>Dashboard</h1></Link>
                </div>
                
                <FaBars className={styles.bars} onClick={ () => setIsOpen(!isOpen)} />

            </div>

            <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                <ul className={styles.menus}>
                    {galleries.map( (gallery) => 
                        <Link href={`?gallery=${gallery.name}`} key={gallery._id} className={styles.link}><li className={styles.menu}>{gallery.name}</li></Link> 
                    )}
                    
                </ul>
            </div>

        </header>
    )
}
export default Header;