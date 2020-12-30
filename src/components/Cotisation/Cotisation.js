import React from 'react'
import styles from './Cotisation.module.css'

import useTranslations from '../useTranslations'
import cms_1 from '../../../cms/brochure_1.yml'
import cms_2 from '../../../cms/brochure_2.yml'
import cms_3 from '../../../cms/brochure_3.yml'

import SectionHeader from '../SectionHeader/SectionHeader'
import Brochure from './Brochure/Brochure'

const Cotisation = () => {
    const { cotisationUrl, cotisationTitle, cotisationSubtitle, brochureRegisterButton } = useTranslations()

    return (
        <>
            <section className={styles.nav_offset} id={cotisationUrl} />
            <section className={styles.width_wrapper}>
                <section className={styles.wrapper}>
                    <SectionHeader title={cotisationTitle} subtitle={cotisationSubtitle} icon={'euro-sign'}/>
                    <section className={styles.brochure_wrapper}>
                        <Brochure
                            cms={cms_1}
                            buttonText={brochureRegisterButton}
                        />
                        <Brochure 
                            cms={cms_2}
                            buttonText={brochureRegisterButton} 
                        />
                        <Brochure 
                            cms={cms_3}
                            buttonText={brochureRegisterButton} 
                        />
                    </section>
                </section>
            </section>
        </>
    )
}

export default Cotisation
