import React from 'react'
import styles from './MemberProfile.module.css'

import { Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"

import useTranslations from '../useTranslations'

const MemberProfile = ({ img, name, role, slug }) => {
    const { organizersDetailsUrl } = useTranslations()

    return (
        <section className={styles.wrapper}>
            <Link to={`${organizersDetailsUrl}/#${slug}`} className={styles.img_wrapper}>
                <FontAwesomeIcon className={styles.icon} icon={'search'} />
                <Img className={styles.img} fluid={img} alt={`${name} facial portrait`} />
            </Link>
            <p className={styles.name}>{name}</p>
            <p className={styles.role}>{role}</p>
        </section>
    )
}

export default MemberProfile
