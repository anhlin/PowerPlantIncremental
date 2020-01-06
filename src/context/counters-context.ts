import { createContext } from 'react'

export interface CountersContextProps {
    totalAtoms: number
    setTotalAtoms: (arg: number) => void
    totalSmashed: number
    setTotalSmashed: (arg: number) => void
    totalMoney: number
    setTotalMoney: (arg: number) => void
    displayAtoms: number
}

export const CountersContext = createContext({} as CountersContextProps)
