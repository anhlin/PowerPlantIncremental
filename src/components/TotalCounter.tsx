import React from 'react'
import './App.css'

interface Props {
    total: number
    type: string
}

const TotalCounter: React.FC<Props> = props => {
    return (
        <div className="counter_container">
            <div className="counter_text">{props.type}</div>
            <div className="counter_text">{props.total}</div>
        </div>
    )
}

export default TotalCounter
