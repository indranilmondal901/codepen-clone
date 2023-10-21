import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
// import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

import { Controlled as ControlledEditor } from 'react-codemirror2'
// import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

const Container = styled(Box)`
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    flex-direction: column;
    padding: 0 8px 8px;
`

const Header = styled(Box)`
    background-color: #060606;
    display: flex;
    color: #AAAEBC;
    justify-content: space-between;
    font-weight: 700;
`

const Heading = styled(Box)`
    background-color: #1d1e22;
    display: flex;
    padding: 9px 12px;
`

const Editor = (props) => {

    const [open, setOpen] = useState(true);

    const { heading, icon, iconColor, value, onChange } = props;

    const handelChange = (editor, data, newValue) => {
        onChange(newValue);
    }

    return (
        <Container style={open ? null : { flexGrow: 0 }}>
            <Header>
                <Heading>
                    <Box component="span"
                        style={{
                            display: "flex",
                            background: iconColor,
                            height: 20,
                            width: 20,
                            placeContent: "center",
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2,
                            color: "#000",
                            fontWeight: "bolder",
                            fontSize: "1.2rem",
                        }}>
                        {icon}
                    </Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                    fontSize='small'
                    style={{ alignSelf: "center" }}
                    onClick={() => setOpen(prevState => !prevState)} />
            </Header>

            <ControlledEditor
                value={value}
                className='CodeMirror'
                options={{
                    // mode: 'xml',
                    theme: 'material',
                    lineNumbers: true
                }}
                onBeforeChange={handelChange}
            />

        </Container>
    )
}

export default Editor;
