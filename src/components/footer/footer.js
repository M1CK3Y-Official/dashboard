import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.copyright}>Dashboard &copy; 2024 Mike Boldsen</p>
        </div>
    )
}

export default Footer;