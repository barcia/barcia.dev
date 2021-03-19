import styles from './index.module.css'
import Footer from '../Footer'
import { useEffect } from 'react';

export default function Layout({children}) {

    useEffect(() => {
        const appHeight = () => {
            const doc = document.documentElement
            doc.style.setProperty('--app-height', `${window.innerHeight}px`)
        }
        window.addEventListener('resize', appHeight)
        appHeight()
    });

    const menu = [
        {
            path: '/',
            label: 'Inicio'
        },
        {
            path: '/now',
            label: 'Now'
        },
        {
            path: '/uses',
            label: 'Uses'
        },
    ]

return (
    <>
    <div className={styles.container}>
        {/* <nav className={styles.navbar}>
            <ul>
                {menu.map(item => <li><Link href={item.path}><a>{item.label}</a></Link></li>)}
            </ul>
        </nav> */}
        <main className={styles.main}>
            {children}
        </main>
        <Footer />
    </div>
    </>
    )
}
