import React, { useContext } from 'react'
import TotalCounter from './TotalCounter'
import ActionButton from './ActionButton'
import { CountersContext } from '../context/counters-context'

interface Props {}

const SmashColumn: React.FC<Props> = props => {
    const countersContext = useContext(CountersContext)
    const {
        totalSmashed,
        setTotalSmashed,
        setTotalAtoms,
        totalAtoms
    } = countersContext

    const handleSmash = () => {
        if (totalAtoms >= 1) {
            setTotalAtoms(totalAtoms - 1)
            setTotalSmashed(totalSmashed + 1)
        }
    }

    return (
        <div>
            <div>
                <TotalCounter total={totalSmashed} type="Smashed Atoms" />
            </div>
            <div>
                <ActionButton type="smash" onClick={handleSmash} />
            </div>
        </div>
    )
}

export default SmashColumn
