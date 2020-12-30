import React from 'react'
import styles from './SectionHeader.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"

const SectionHeader = ({ title, subtitle, icon }) => {
    return (
        <section className={styles.wrapper}>
            <span className={styles.icon_wrapper}>
                <FontAwesomeIcon className={styles.icon} icon={icon} />
            </span>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.divider}>&nbsp; / &nbsp;</span>
            <p className={styles.subtitle}>{subtitle}</p>
        </section>
    )
}

export default SectionHeader
