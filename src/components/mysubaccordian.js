import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SubAccordian = (props) => {

    const [title, setTitle] = useState(props.title);
    const [showEditor, setShowEditor] = useState(false);
  
    const editTitle = () => {
      setShowEditor(true);
    }
  
    const _handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        setShowEditor(false);
      }
    }

    return (
        <Accordion>
            <AccordionSummary
                className="panel-Summary"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography onClick={editTitle}> {/* Show or hide text box on click */}
                {showEditor && 
                <TextField  
                  type="text" 
                  value={title} 
                  onChange={event => { setTitle(event.target.value) }}
                  onKeyDown={_handleKeyDown} 
                />}
                {!showEditor && title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <Box component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="child1" label="UserName" variant="standard" />
                        <TextField id="child2" type="password" label="Password" variant="standard" />
                    </Box>
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default SubAccordian;