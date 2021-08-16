import { func } from 'prop-types'
import React from 'react'

const Loader = () => {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="loader">Loading...</div>
    </div>
}

export default Loader;