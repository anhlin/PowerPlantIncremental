import React from 'react'
import { Dashboard } from './components/Dashboard'
import CountersState from './context/counters-state'

export const App: React.FC = () => {
    return (
        <div className="App">
            <CountersState>
                <Dashboard />
            </CountersState>
        </div>
    )
}

export default App
