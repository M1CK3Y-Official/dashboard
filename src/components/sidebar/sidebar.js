'use client';
import styles from './sidebar.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { getPortfolioMenuData } from '@/lib/data.service';



const Sidebar = () => {

    const [portfolioMenuData, setPortfolioMenuData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getPortfolioMenuData();
                console.log("Data fetched:", data);
                setPortfolioMenuData(data);
            } catch (error) {
                console.log("Error fetching menu data:", error);
            }
        }
        getData();
    }, []);

    return (
        <aside className={styles.sidebar}>
            <ul className={styles.portfolios}>
            {portfolioMenuData.map( (menuItem) => {
                return (
                    <Link key={menuItem.name} href={menuItem.path} className={styles.link}><li className={styles.portfolio}>{menuItem.name}</li></Link>
                )
            })}

            </ul>
        </aside>
    )
}

export default Sidebar;