import React from 'react'

import AppProvider from './src/hooks';
import Layout from './src/components/Layout/Layout'

const wrapRootElement = ({ element, props }) => {
    return (
        <AppProvider>
            <Layout {...props}>{element}</Layout>
        </AppProvider>
    )
}

export default wrapRootElement  