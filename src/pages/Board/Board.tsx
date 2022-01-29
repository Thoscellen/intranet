import { FC, memo } from "react"
import { RouteComponentProps } from "react-router-dom"
import { useSelector } from "react-redux"

import { AppThunk } from "../../store"
import { fetchVolunteerDayWishesSetIfNeed } from "../../store/volunteerDayWishesSet"
import { selectUserJwtToken } from "../../store/auth"
import DayWishesForm from "../../components/VolunteerBoard/DayWishesForm/DayWishesForm"
import DDayInformations from "../../components/VolunteerBoard/DDayInformations/DDaysInformations"
import styles from "./styles.module.scss"
import DayWishes from "../../components/VolunteerBoard/DayWishes/DayWishes"

export type Props = RouteComponentProps

const BoardPage: FC<Props> = (): JSX.Element => {
    const jwtToken = useSelector(selectUserJwtToken)

    if (jwtToken === undefined) return <p>Loading...</p>
    if (jwtToken) {
        return (
            <div className={styles.dayWishPage}>
                <div className={styles.dayWisContent}>
                    <DayWishes />
                    <DayWishesForm />
                    <DDayInformations />
                </div>
            </div>
        )
    }
    return <div>Besoin d&apos;être identifié</div>
}

// Fetch server-side data here
export const loadData = (): AppThunk[] => [fetchVolunteerDayWishesSetIfNeed()]

export default memo(BoardPage)
