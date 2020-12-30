import React from 'react'
import styles from './MobileInfoBoard.module.css'

import useTranslations from '../useTranslations'
import "../../utils/fontawesome"

import InfoBoardItem from '../InfoBoardItem/InfoBoardItem'

const MobileInfoBoard = () => {
    const { homeInfoTitle_1, homeInfoText_1, homeInfoTitle_2, homeInfoText_2, homeInfoTitle_3, homeInfoText_3, homeInfoTitle_4, homeInfoText_4 } = useTranslations();

    return (
        <section className={styles.wrapper}>
            <InfoBoardItem title={homeInfoTitle_1} text={homeInfoText_1} icon={'calendar-alt'} />
            <InfoBoardItem title={homeInfoTitle_2} text={homeInfoText_2} icon={'map-marker-alt'} />
            <InfoBoardItem title={homeInfoTitle_3} text={homeInfoText_3} icon={'microphone'} />
            <InfoBoardItem title={homeInfoTitle_4} text={homeInfoText_4} icon={'users'} />
        </section>
    )
};

export default MobileInfoBoard