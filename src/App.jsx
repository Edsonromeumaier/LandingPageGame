import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx';

function App() {
  

  return (
    <>
    < Header />
      <div>
        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
