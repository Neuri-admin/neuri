import React from 'react'
import styles from './GalleryPreview.module.css'
import styles_global from '../../styles/global.module.css'

import { graphql, useStaticQuery } from "gatsby"

import LocalizedLink from '../LocalizedLink'
import useTranslations from '../useTranslations';

const GalleryPreview = ({ title, year }) => {

    console.log(year)

    const { archiveGalleryUrl, archiveGalleryShowMore } = useTranslations();

    const data = useStaticQuery(
        graphql`
        query CloudinaryImage {
            allCloudinaryMedia {
                edges {
                    node {
                        secure_url
                        context {
                            custom {
                                year
                            }
                        }
                    }
                }
            }
        }`
    );

    const filtered = data.allCloudinaryMedia.edges.filter(image => image.node.context.custom.year === year)

    return (
        <section className={styles.wrapper}>
            <h4 className={styles.title}>{title}</h4>
            <section className={styles.images}>
                {filtered.map((image, index) => (
                    <img key={index} className={styles.image} src={image.node.secure_url} alt={`gallery ${index}`} />
                ))}
            </section>
            <LocalizedLink to={`/${archiveGalleryUrl}`} className={`${styles_global.button} ${styles.button}`}>{archiveGalleryShowMore}</LocalizedLink>
        </section>
    )
}

export default GalleryPreview
