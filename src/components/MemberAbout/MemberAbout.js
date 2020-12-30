import React from 'react'
import styles from './MemberAbout.module.css'

import Img from "gatsby-image"

const MemberAbout = ({ img, name, role, description, slug }) => {
    return (
        <>
            <section className={styles.navbar_offset} id={slug}/>
            <section className={styles.wrapper}>
                <div className={styles.img_wrapper}>
                    <Img className={styles.img} fluid={img} alt={`${name} facial portrait`} />
                </div>
                <p className={styles.name}>{name}</p>
                <p className={styles.role}>{role}</p>
                <p className={styles.description}>{description}</p>
            </section>
        </>
    )
}

export default MemberAbout
