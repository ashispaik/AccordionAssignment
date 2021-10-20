import * as React from 'react';
import { useState } from 'react';
import './App.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MyAccordion from './components/myaccordian.js';
import MyAccordian from './components/myaccordian.js';

function App() {

  const [title, setTitle] = useState("Identity & Access Management");
  const [showEditor, setShowEditor] = useState(false);


  const editTitle = () => {
    setShowEditor(true);
  }

  const _handleKeyDown = (e) => { // When press enter it will setstate value
    if (e.key === 'Enter') {
      setShowEditor(false);
    }
  }

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <div className={"App"}>
          <Accordion className={'parent-accordian'} >
            <AccordionSummary
              className="panel-Summary"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="head"
            >

              <Typography onClick={editTitle}> {/* Show or hide text box on click */}
                {showEditor &&
                  <TextField
                    type="text"
                    value={title}
                    onChange={event => { setTitle(event.target.value) }}
                    onKeyDown={_handleKeyDown}
                  />}
                {!showEditor && title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <MyAccordian title={"Access Control"} child={{ title1: "RBAC", title2: "New Control", title3: "New Control 1", title4: "New Control 2" }} />
            </AccordionDetails>

            <AccordionDetails>
              <MyAccordion title={"Authorization"} child={{}} />
            </AccordionDetails>

          </Accordion>
        </div>
      </Container>
    </React.Fragment>
  );
}
export default App;