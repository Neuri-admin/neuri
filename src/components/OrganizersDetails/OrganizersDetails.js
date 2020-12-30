import React from 'react'
import styles from './OrganizersDetails.module.css'
import styles_global from '../../styles/global.module.css'

import { graphql, useStaticQuery } from "gatsby"
import LocalizedLink from '../LocalizedLink'
import useTranslations from '../useTranslations'

import SectionHeader from '../SectionHeader/SectionHeader'
import MemberAbout from '../MemberAbout/MemberAbout'

const OrganizersDetails = () => {
    const { organizersTitle, organizersSubtitle, organizer_1_Name, organizer_1_Role, organizer_1_Description, organizer_2_Name, organizer_2_Role, organizer_2_Description, organizer_3_Name, organizer_3_Role, organizer_3_Description, organizer_4_Name, organizer_4_Role, organizer_4_Description, organizer_5_Name, organizer_5_Role, organizer_5_Description, organizer_6_Name, organizer_6_Role, organizer_6_Description, organizer_7_Name, organizer_7_Role, organizer_7_Description, organizer_8_Name, organizer_8_Role, organizer_8_Description, organizerDetailsBackButton } = useTranslations()

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
        <section className={styles.width_wrapper} id="organizatori">
            <section className={styles.wrapper}>
                <SectionHeader title={organizersTitle} subtitle={organizersSubtitle} icon={'users'}/>
                <section className={styles.members}>
                    <MemberAbout img={data.josipaK.childImageSharp.fluid} name={organizer_1_Name} role={organizer_1_Role} description={organizer_1_Description} slug={'-1'}/>
                    <MemberAbout img={data.eminaHV.childImageSharp.fluid} name={organizer_2_Name} role={organizer_2_Role} description={organizer_2_Description} slug={'-2'}/>
                    <MemberAbout img={data.ljerkaD.childImageSharp.fluid} name={organizer_3_Name} role={organizer_3_Role} description={organizer_3_Description} slug={'-3'}/>
                    <MemberAbout img={data.silvestarM.childImageSharp.fluid} name={organizer_4_Name} role={organizer_4_Role} description={organizer_4_Description} slug={'-4'}/>
                    <MemberAbout img={data.ivanS.childImageSharp.fluid} name={organizer_5_Name} role={organizer_5_Role} description={organizer_5_Description} slug={'-5'}/>
                    <MemberAbout img={data.vinkoB.childImageSharp.fluid} name={organizer_6_Name} role={organizer_6_Role} description={organizer_6_Description} slug={'-6'}/>
                    <MemberAbout img={data.antonioP.childImageSharp.fluid} name={organizer_7_Name} role={organizer_7_Role} description={organizer_7_Description} slug={'-7'}/>
                    <MemberAbout img={data.evaL.childImageSharp.fluid} name={organizer_8_Name} role={organizer_8_Role} description={organizer_8_Description} slug={'-8'}/>
                </section>
                <LocalizedLink to="/" className={`${styles_global.button} ${styles.button}`}>{organizerDetailsBackButton}</LocalizedLink>
            </section>
        </section>
    )
}

export default OrganizersDetails
