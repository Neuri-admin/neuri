import React from 'react'
import styles from './Cotisation.module.css'

import useTranslations from '../useTranslations'
import cms from '../../../cms/brochures.yml'

import SectionHeader from '../SectionHeader/SectionHeader'
import Brochure from './Brochure/Brochure'

const Cotisation = () => {
    const { cotisationUrl, cotisationTitle, cotisationSubtitle } = useTranslations()

    const { brochures } = cms;

    return (
        <>
            <section className={styles.nav_offset} id={cotisationUrl} />
            <section className={styles.width_wrapper}>
                <section className={styles.wrapper}>
                    <SectionHeader title={cotisationTitle} subtitle={cotisationSubtitle} icon={'euro-sign'}/>
                    <section className={styles.brochure_wrapper}>
                        {brochures.map((brochure, index) => (
                            <Brochure key={index} data={brochure}/>
                        ))}
                    </section>
                </section>
            </section>
        </>
    )
}

export default Cotisation
