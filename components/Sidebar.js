import styles from "@/styles/Sidebar.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Sidebar(){

    return(
        <div className={styles.mainSidebarContainer}>
            <div>
                <ul className={styles.ulContainer}>
                    <h4 className={styles.menu}>Menu</h4>

                    <li className={styles.liContainer}>
                        <Image src="/images/home.png" width="25" height="25" alt="home icon"/>
                        <Link href="/" className={styles.itemName}>
                            Home
                        </Link>
                    </li>

                    <li className={styles.liContainer}>
                        <Image src="/images/DailyTask.png" width="20" height="20" alt="home icon"/>
                        <Link href="/dailyTask" className={styles.itemName}>
                            Daily Task
                        </Link>
                    </li>

                    <li className={styles.liContainer}>
                        <Image src="/images/Teammembers.png" width="20" height="20" alt="home icon"/>
                        <Link href="/teamMembers" className={styles.itemName}>
                            Team members
                        </Link>
                    </li>

                    <li className={styles.liContainer}>
                        <Image src="/images/monthlyIncome.png" width="20" height="20" alt="home icon"/>
                        <Link href="/monthlyIncome" className={styles.itemName}>
                            Monthly Income
                        </Link>
                    </li>

                    <li className={styles.liContainer}>
                        <Image src="/images/Salary.png" width="20" height="20" alt="home icon"/>
                        <Link href="/salary" className={styles.itemName}>
                            Salaries
                        </Link>
                    </li>

                    <li className={styles.liContainer}>
                        <Image src="/images/settings.png" width="20" height="20" alt="home icon"/>
                        <Link href="/settings" className={styles.itemName}>
                            Settings
                        </Link>                       
                    </li>
                </ul>
            </div>
        </div>
    )
}