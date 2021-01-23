import styles from './index.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Layout({children}) {

  const router = useRouter()

return (
      <footer className={styles.footer}>
          <div className={styles.content}>
            <a href="mailto:ivan@barcia.dev">ivan@barcia.dev</a>

            <ul className={styles.locales}>
              {router.locales.map(locale => {
                return (
                  <li key={locale}>
                    <Link href={router.pathname} locale={locale}>
                      <a>{locale}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
      </footer>
    )
}
