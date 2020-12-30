import React from 'react'
import styles from './GalleryPreview.module.css'
import styles_global from '../../styles/global.module.css'

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import LocalizedLink from '../LocalizedLink'
import useTranslations from '../useTranslations';

const GalleryPreview = ({ title, year }) => {

    const { archiveGalleryUrl, archiveGalleryShowMore } = useTranslations();

    const data = useStaticQuery(graphql`
        query MyQuery {
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

    const filtered = data.images.edges.filter(image => image.node.relativePath.includes(`archive/${year}`)).slice(0, 14)

    return (
        <section className={styles.wrapper}>
            <h4 className={styles.title}>{title}</h4>
            <section className={styles.images}>
                {filtered.map((image, index) => (
                    <Img key={index} className={styles.image} fluid={image.node.childImageSharp.fluid} alt={'alt'} />
                ))}
            </section>
            <LocalizedLink to={`/${archiveGalleryUrl}`} className={`${styles_global.button} ${styles.button}`}>{archiveGalleryShowMore}</LocalizedLink>
        </section>
    )
}

export default GalleryPreview
