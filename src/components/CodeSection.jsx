import React,{useContext} from 'react'
import {DataContext} from "../context/DataProvider"

import Editor from './Editor'
import { Box, styled } from '@mui/material'

const EditorWrapper = styled(Box)`
    display: flex;
    background-color:#060606;
    width: 100%;
`

const CodeSection = () => { 

    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
    console.log({ html, setHtml, css, setCss, js, setJs });
    // setHtml("ppp")
    return (
        <EditorWrapper>
            <Editor heading="HTML" icon="/" iconColor="#FF3C41" value={html} onChange={setHtml}/>
            <Editor heading="CSS" icon="*" iconColor="#0EBEFF" value={css} onChange={setCss}/>
            <Editor heading="JS" icon="{}" iconColor="#FCD000" value={js} onChange={setJs}/>
        </EditorWrapper>
    )
}

export default CodeSection
