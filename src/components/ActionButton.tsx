import React from 'react'
import { Button } from 'react-bootstrap'
import { ColumnType } from '../types'

interface Props {
    type: ColumnType
    onClick: () => void
}

const ActionButton: React.FC<Props> = props => {
    const textReciever = (arg: ColumnType) => {
        switch (arg) {
            case 'atom':
                return 'GATHER 1 ATOM'
            case 'smash':
                return 'SMASH 1 ATOM'
            case 'sell':
                return 'SELL 1 SMASHED ATOM'
        }
    }

    return (
        <Button onClick={props.onClick} size="lg">
            {textReciever(props.type)}
        </Button>
    )
}

export default ActionButton
