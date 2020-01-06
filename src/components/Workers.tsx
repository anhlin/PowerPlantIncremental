import React, { useState, useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { CountersContext } from '../context/counters-context'

interface Props {}

const Workers: React.FC<Props> = () => {
    const [totalWorkers, setTotalWorkers] = useState(0)
    const [workerCost, setWorkerCost] = useState(5)
    const [gatherRate, setGatherRate] = useState(1)

    const countersContext = useContext(CountersContext)
    const {
        totalMoney,
        setTotalMoney,
        setTotalAtoms,
        totalAtoms
    } = countersContext

    const purchaseWorker = () => {
        if (totalMoney >= workerCost) {
            setTotalMoney(totalMoney - workerCost)
            setTotalWorkers(totalWorkers + 1)
        }
    }

    const gatherAtoms = () => {
        if (totalWorkers > 0) {
            setTotalAtoms(totalAtoms + totalWorkers * gatherRate)
        }
    }

    const [workerThread, setWorkerThread] = useState()

    useEffect(() => {
        const interval = setInterval(() => {
            gatherAtoms()
        }, 1000)
        setWorkerThread(interval)
        return () => clearInterval(workerThread)
    }, [totalAtoms, totalWorkers])

    return (
        <div className="item_wrapper">
            <div>
                <Button onClick={purchaseWorker}>
                    Buy Worker {`($${workerCost})`}
                </Button>
                <div>Gather Rate: {gatherRate} per worker per second</div>
            </div>
            <div style={{ fontSize: 30 }}>{totalWorkers}</div>
        </div>
    )
}

export default Workers
