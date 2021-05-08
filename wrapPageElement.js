import React from 'react'

// import AppProvider from './src/hooks';
import Layout from './src/components/Layout/Layout'

const wrapPageElement = ({ element, props }) => {
    return (
        // <AppProvider>
            <Layout {...props}>{element}</Layout>
        // </AppProvider>
    )
}

export default wrapPageElement  