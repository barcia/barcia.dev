import styles from './index.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Bowser from "bowser";
import { useState, useEffect } from 'react';
// import getPlatform from '../../hooks/getPlatform'

export default function Layout({children}) {
  const [platform, setPlatform] = useState(null);

  useEffect(() => {
      setPlatform(Bowser.parse(window.navigator.userAgent))
  }, [children]);

  const isApple = (platform?.os.name === 'macOS' || platform?.os.name === 'iOS' ) ? true : false;

  const VALDODUBRA = {
    applemaps: "https://maps.apple.com/?address=Val%20do%20Dubra,%20A%20Coru%C3%B1a,%20Espa%C3%B1a&auid=15769615001925900781&ll=43.026522,-8.656677&lsp=6489&q=Val%20do%20Dubra&_ext=Ch8KBQgEEM4BCgQIBRADCgQIBhADCgQIChALCgQIVRAOEiYpfv/mxYl5RUAxQ8nk1M5wIcA57E/icyeMRUBBnTpF/eQuIcBQDA%3D%3D",
    googlemaps: "https://goo.gl/maps/F85pgZkjAm4zhjFr8"
  }
  const router = useRouter()

  // https://maps.apple.com/?address=Val%20do%20Dubra,%20A%20Coru%C3%B1a,%20Espa%C3%B1a&auid=15769615001925900781&ll=43.026522,-8.656677&lsp=7618&q=Val%20do%20Dubra&_ext=Ch8KBQgEEM4BCgQIBRADCgQIBhADCgQIChALCgQIVRAOEiYpfv/mxYl5RUAxQ8nk1M5wIcA57E/icyeMRUBBnTpF/eQuIcBQDA%3D%3D

return (
      <footer className={styles.footer}>
          <div className={styles.content}>
            <div>
              <a href="mailto:ivan@barcia.dev">ivan@barcia.dev</a>
              <address className={styles.address}><a href={isApple ? VALDODUBRA.applemaps : VALDODUBRA.googlemaps}>Val do Dubra, Galicia</a></address>
            </div>

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
