import styles from"@/styles/Navbar.module.css"
import Image from "next/image"

export default function Navbar(){

    return(
        <div className={styles.mainNavbar}>
            <div className={styles.dashboardContainer}>
                <h1 className={styles.dashboardTitle}>Dashboard</h1>
            </div>
            <div className={styles.searchContainer}>
                <Image 
                    src="/images/search.png" 
                    width="20" 
                    height="20" 
                    alt="seach icon" 
                />
                <input 
                    type="search" 
                    className={styles.searchInput}
                    placeholder="Search"
                />
            </div>
            <div className={styles.profileContainer}>
                <Image 
                    src="/images/notification.png" 
                    width="30" 
                    height="30" 
                    alt="notification icon" 
                    className={styles.notificationIcon}
                />
                <div className={styles.profileItems}>
                    <Image 
                        src="/images/photo.jpeg" 
                        width="40" 
                        height="40" 
                        alt="profile icon" 
                        className={styles.profileIcon}
                    />
                    <p className={styles.profileName}>Danielle </p>
                </div>
            </div>
        </div>
    )
}