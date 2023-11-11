import './App.css'
import {Button, ButtonGroup} from "@mui/material"

function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <div className="card">
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <p>
            Test
          </p>
        </div>
      </div>
    </>
  )
}

export default App
