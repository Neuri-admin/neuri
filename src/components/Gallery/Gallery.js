import React from 'react'
import styles from './Gallery.module.css'
import styles_global from '../../styles/global.module.css'

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import LocalizedLink from '../LocalizedLink'
import useTranslations from '../useTranslations';
import cms from '../../../cms/archive_gallery.yml'

const Gallery = () => {

    const { lang, archiveBackToHomepage } = useTranslations();
    const { galleries } = cms

    const data = useStaticQuery(graphql`
        query {
            images: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
                edges {
                    node {
                        relativePath
                        childImageSharp {
                            fluid(maxWidth: 2000, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <>
            <section className={styles.nav_bg}></section>
            <section className={styles.width_wrapper}>
                <section className={styles.wrapper}>
                    <section className={styles.gallery}>
                        {galleries.map((gallery, index) => (
                            <section key={index}>
                                <h4 className={styles.title}>{lang === 'en' ? gallery.name_en : gallery.name_hr}</h4>
                                <section className={styles.images}>
                                    {data.images.edges.filter(image => image.node.relativePath.includes(`archive/${gallery.year}`)).map((image, index) => (
                                        <Img key={index} className={styles.image} fluid={image.node.childImageSharp.fluid} alt={'alt'} />
                                    ))}
                                </section>
                            </section>
                        ))}
                    </section>
                        <LocalizedLink to="/" className={`${styles_global.button} ${styles.button}`}>{archiveBackToHomepage}</LocalizedLink>
                </section>
            </section>
        </>
    )
}

export default Gallery
