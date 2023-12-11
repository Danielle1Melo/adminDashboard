import Head from "next/head"
import Sidebar from "./Sidebar"
import styles from '@/styles/Layout.module.css'


export default function Layout({ children }) {

    return (
        <>
            <Head>
                <title>Admin Dashboard</title>
            </Head>

            <div className={styles.layoutMain}>
                
                <Sidebar />

                <div className={styles.layoutContainer}>
                    {children}
                </div>
            </div>
        </>
    )
}