import React from 'react'
import styles from './Logo.module.css'

import Img from "gatsby-image"

const Logo = ({ href, img, alt }) => {
    return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={styles.wrapper}>
                <Img className={styles.img} fluid={img} alt={`${alt} logo`} />
            </a>
    )
}

export default Logo
