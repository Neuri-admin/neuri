import React from 'react'
import styles from './Partners.module.css'
import styles_global from '../../styles/global.module.css'

import { Link, graphql, useStaticQuery } from 'gatsby'
import useTranslations from '../useTranslations'

import SectionHeader from '../SectionHeader/SectionHeader'
import Logo from '../Logo/Logo'

const Partners = () => {
    const { partnersTitle, partnersSubtitle, partnersSignupButton } = useTranslations()

    const data = useStaticQuery(graphql`
        query {
            aims: file(relativePath: { eq: "partners/aims.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            forward: file(relativePath: { eq: "partners/forward.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            imscs: file(relativePath: { eq: "partners/imscs.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            imsrc: file(relativePath: { eq: "partners/imsrc.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            sanitasUniri: file(relativePath: { eq: "partners/sanitas-uniri.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            sisb: file(relativePath: { eq: "partners/sisb.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `)

    return (
        <section className={styles.width_wrapper}>
            <section className={styles.wrapper}>
                <SectionHeader title={partnersTitle} subtitle={partnersSubtitle} icon={'graduation-cap'} />
                <section className={styles.slideshow}>
                    <Logo href={'http://www.aimsmeeting.org/'} img={data.aims.childImageSharp.fluid} alt={'Aims'} />
                    <Logo href={'http://gscbelgrade.org/'} img={data.forward.childImageSharp.fluid} alt={'Forward'} />
                    <Logo href={'http://www.samed.ba/'} img={data.imscs.childImageSharp.fluid} alt={'Imscs'} />
                    <Logo href={'http://imsrc.ctfobak.com/'} img={data.imsrc.childImageSharp.fluid} alt={'Imsrc'} />
                    <Logo href={'http://sanitas.uniri.hr/'} img={data.sanitasUniri.childImageSharp.fluid} alt={'Sanitas Uniri'} />
                    <Logo href={'https://www.facebook.com/sisbiol/'} img={data.sisb.childImageSharp.fluid} alt={'Sisb'} />
                </section>
                <Link to="/#kontakt" className={`${styles_global.button} ${styles.button}`}>{partnersSignupButton}</Link>
            </section>
        </section>
    )
}

export default Partners