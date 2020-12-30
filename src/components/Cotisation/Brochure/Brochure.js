import React from 'react'
import styles from './Brochure.module.css'
import styles_global from '../../../styles/global.module.css'

import useTranslations from '../../useTranslations'
import cms_general from '../../../../cms/general.yml'

const Brochure = props => {
    
    const { lang } = useTranslations();

    const { register_link } = cms_general

    const { buttonText } = props
    const { brochure_title_en, brochure_title_hr, brochure_price, perks } = props.cms

    const title = lang === 'en' ? brochure_title_en : brochure_title_hr;

    return (
        <section className={styles.wrapper}>
            <span className={styles.title_wrapper}>
                <h4>{title}</h4>
            </span>
            <p className={styles.price}>{brochure_price}</p>
            <section className={styles.bullets}>
                {perks.map((perk, index) => (
                    <p key={index} className={styles.bullet}>{lang === 'en' ? perk.perk_en : perk.perk_hr}</p>
                ))}
            </section>
            <a    
                href={register_link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles_global.button} ${styles.button}`}
            >{buttonText}
            </a>
        </section>
    )
}

export default Brochure
