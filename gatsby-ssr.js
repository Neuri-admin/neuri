import React from 'react'

import AppProvider from './src/hooks';
import Layout from './src/components/Layout/Layout';

export const wrapRootElement = ({ element }) => {
    return (
        <AppProvider>
            {element}
        </AppProvider>
    )
} 

export const wrapPageElement = ({ element, props }) => {
    return (
        // <AppProvider>
            <Layout {...props}>{element}</Layout>
        // </AppProvider>
    )
} 