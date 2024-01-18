'use client';
import { useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import { FaBars } from "react-icons/fa";



const Header = ({galleries}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={`${styles.header} ${isOpen ? styles.open : ''}`}>
            <div className={styles.headerContainer}>

                <div className={styles.logoContainer}>
                    <h1 className={styles.logo}>Dashboard</h1>
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