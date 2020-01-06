import React, { useContext } from 'react'
import TotalCounter from './TotalCounter'
import ActionButton from './ActionButton'
import { CountersContext } from '../context/counters-context'

interface Props {}

const SmashColumn: React.FC<Props> = props => {
    const countersContext = useContext(CountersContext)

    const {
        totalMoney,
        setTotalMoney,
        setTotalSmashed,
        totalSmashed
    } = countersContext

    const handleSell = () => {
        if (totalSmashed >= 1) {
            setTotalSmashed(totalSmashed - 1)
            setTotalMoney(totalMoney + 1)
        }
    }

    return (
        <div>
            <div>
                <TotalCounter total={totalMoney} type="Money ($)" />
            </div>
            <div>
                <ActionButton type="sell" onClick={handleSell} />
            </div>
        </div>
    )
}

export default SmashColumn
