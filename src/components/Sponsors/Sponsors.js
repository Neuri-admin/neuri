import React from 'react'
import styles from './Sponsors.module.css'
import styles_global from '../../styles/global.module.css'

import { Link, graphql, useStaticQuery } from 'gatsby'
import useTranslations from '../useTranslations'

import SectionHeader from '../SectionHeader/SectionHeader'
import Logo from '../Logo/Logo'

const Sponsors = () => {
    const { sponsorsTitle, sponsorsSubtitle, sponsorsSignupButton } = useTranslations()

    const data = useStaticQuery(graphql`
        query {
            fossMedri: file(relativePath: { eq: "sponsors/foss-medri.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            hazu: file(relativePath: { eq: "sponsors/hazu.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            medri: file(relativePath: { eq: "sponsors/medri.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            morenoIvancic: file(relativePath: { eq: "sponsors/moreno-ivancic.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            psihijatrijskaRab: file(relativePath: { eq: "sponsors/psihijatrijska-rab.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            stancijaFava: file(relativePath: { eq: "sponsors/stancija-fava.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            szsur: file(relativePath: { eq: "sponsors/szsur.png" }) {
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
                <SectionHeader title={sponsorsTitle} subtitle={sponsorsSubtitle} icon={'thumbs-up'} />
                <section className={styles.slideshow}>
                    <Logo href={'http://foss.hr/'} img={data.fossMedri.childImageSharp.fluid} alt={'Foss Medri'} />
                    <Logo href={'http://info.hazu.hr/hr/'} img={data.hazu.childImageSharp.fluid} alt={'Hazu'} />
                    <Logo href={'http://www.medri.uniri.hr/hr/'} img={data.medri.childImageSharp.fluid} alt={'Medri'} />
                    <Logo href={'http://ibmvinaivancic.wixsite.com/winery'} img={data.morenoIvancic.childImageSharp.fluid} alt={'Moreno Ivancic'} />
                    <Logo href={'https://www.bolnicarab.hr/'} img={data.psihijatrijskaRab.childImageSharp.fluid} alt={'Psihijatrijska Rab'} />
                    <Logo href={'https://www.facebook.com/StancijaFava/'} img={data.stancijaFava.childImageSharp.fluid} alt={'Stancija Fava'} />
                    <Logo href={'http://sz-ri.com/'} img={data.szsur.childImageSharp.fluid} alt={'Studentski Zbor Sveucilista u Rijeci'} />
                </section>
                <Link to="/#kontakt" className={`${styles_global.button} ${styles.button}`}>{sponsorsSignupButton}</Link>
            </section>
        </section>
    )
}

export default Sponsors
