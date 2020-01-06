import React, { useContext } from 'react'
import TotalCounter from './TotalCounter'
import ActionButton from './ActionButton'
import { CountersContext } from '../context/counters-context'
import Workers from './Workers'

interface Props {}

const AtomsColumn: React.FC<Props> = props => {
    const countersContext = useContext(CountersContext)
    const { totalAtoms, setTotalAtoms, displayAtoms } = countersContext

    const increaseTotalAtoms = () => {
        setTotalAtoms(totalAtoms + 1)
    }

    return (
        <div>
            <div>
                <TotalCounter total={displayAtoms} type={'Atoms'} />
            </div>
            <div>
                <ActionButton type="atom" onClick={increaseTotalAtoms} />
            </div>
            <div style={{ marginTop: 50 }}>
                <Workers />
            </div>
        </div>
    )
}

export default AtomsColumn
