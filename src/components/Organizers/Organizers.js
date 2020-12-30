import React from 'react'
import styles from './Organizers.module.css'
import styles_global from '../../styles/global.module.css'

import { graphql, useStaticQuery, Link } from "gatsby"
import useTranslations from '../useTranslations'

import SectionHeader from '../SectionHeader/SectionHeader'
import MemberProfile from '../MemberProfile/MemberProfile'

const Organizers = () => {
    const { organizersUrl, organizersTitle, organizersSubtitle, organizer_1_Name, organizer_1_Role, organizer_2_Name, organizer_2_Role, organizer_3_Name, organizer_3_Role, organizer_4_Name, organizer_4_Role, organizer_5_Name, organizer_5_Role, organizer_6_Name, organizer_6_Role, organizer_7_Name, organizer_7_Role, organizer_8_Name, organizer_8_Role, organizersBoardButton, boardUrl } = useTranslations()

    const data = useStaticQuery(graphql`
        query {
            eminaHV: file(relativePath: { eq: "leadership/emina-horvat-velic.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            josipaK: file(relativePath: { eq: "leadership/josipa-kajic.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            ljerkaD: file(relativePath: { eq: "leadership/ljerka-delac.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            silvestarM: file(relativePath: { eq: "leadership/silvestar-meznaric.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            ivanS: file(relativePath: { eq: "leadership/ivan-skara.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            vinkoB: file(relativePath: { eq: "leadership/vinko-beg.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            antonioP: file(relativePath: { eq: "leadership/antonio-percinic.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            evaL: file(relativePath: { eq: "leadership/eva-levartic.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `)

    return (
        <>
            <section className={styles.nav_offset} id={organizersUrl} />
            <section className={styles.width_wrapper} >
                <section className={styles.wrapper}>
                    <SectionHeader title={organizersTitle} subtitle={organizersSubtitle} icon={'users'}/>
                    <section className={styles.members}>
                        <MemberProfile img={data.josipaK.childImageSharp.fluid} name={organizer_1_Name} role={organizer_1_Role} slug={'-1'}/>
                        <MemberProfile img={data.eminaHV.childImageSharp.fluid} name={organizer_2_Name} role={organizer_2_Role} slug={'-2'}/>
                        <MemberProfile img={data.ljerkaD.childImageSharp.fluid} name={organizer_3_Name} role={organizer_3_Role} slug={'-3'}/>
                        <MemberProfile img={data.silvestarM.childImageSharp.fluid} name={organizer_4_Name} role={organizer_4_Role} slug={'-4'}/>
                        <MemberProfile img={data.ivanS.childImageSharp.fluid} name={organizer_5_Name} role={organizer_5_Role} slug={'-5'}/>
                        <MemberProfile img={data.vinkoB.childImageSharp.fluid} name={organizer_6_Name} role={organizer_6_Role} slug={'-6'}/>
                        <MemberProfile img={data.antonioP.childImageSharp.fluid} name={organizer_7_Name} role={organizer_7_Role} slug={'-7'}/>
                        <MemberProfile img={data.evaL.childImageSharp.fluid} name={organizer_8_Name} role={organizer_8_Role} slug={'-8'}/>
                    </section>
                    <Link to={boardUrl} className={`${styles_global.button} ${styles.button}`}>{organizersBoardButton}</Link>
                </section>
            </section>
        </>
    )
}

export default Organizers
