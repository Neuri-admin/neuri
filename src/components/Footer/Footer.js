import React from "react"
import styles from "./Footer.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useTranslations from '../useTranslations'
import cms from '../../../cms/footer.yml'

const Footer = () => {
  const { footerCopyright } = useTranslations()

  const { fb_link, ig_link } = cms

  return (
    <footer className={styles.width_wrapper}>
      <section className={styles.wrapper}>
        <section className={styles.social}>
          <a
            href={`${fb_link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={`${styles.icon} ${styles.facebook}`}
              icon={["fab", "facebook"]}
            />
          </a>
          <a
            href={`${ig_link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={`${styles.icon} ${styles.instagram}`}
              icon={["fab", "instagram"]}
            />
          </a>
        </section>
        <p className={styles.copyright}>{footerCopyright}</p>
      </section>
    </footer>
  )
}

export default Footer
