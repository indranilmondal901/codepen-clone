import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { Box, styled } from '@mui/material'

const ResultContainer = styled(Box)`
    height: 31vh;
`

const Result = () => {
    const { html, css, js } = useContext(DataContext);

    let sorceCode = `
    <html>

    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>

    </html
    `
    let [src, setSrc] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setSrc(sorceCode)
        }, 1000);

        return () => clearTimeout()
    }, [html, css, js, sorceCode]);

    return (
        <ResultContainer>
            <iframe
                title='results'
                srcDoc={src}
                sandbox='allow-scripts'
                height="100%"
                width="100%"
            />
        </ResultContainer>
    )
}

export default Result
