import React, { useState, useEffect } from 'react'
import { CountersContext } from './counters-context'

const CountersState: React.FC = props => {
    const [totalAtoms, setTotalAtoms] = useState(0)
    const [totalSmashed, setTotalSmashed] = useState(0)
    const [totalMoney, setTotalMoney] = useState(0)

    const [displayAtoms, setDisplayAtoms] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayAtoms(totalAtoms)
        }, 100)
        return () => clearInterval(interval)
    }, [totalAtoms])

    return (
        <CountersContext.Provider
            value={{
                totalAtoms,
                setTotalAtoms,
                totalSmashed,
                setTotalSmashed,
                totalMoney,
                setTotalMoney,
                displayAtoms
            }}
        >
            {props.children}
        </CountersContext.Provider>
    )
}

export default CountersState
